import { prisma } from '../lib/prisma';
import { FastifyInstance } from 'fastify';
import { authenticate } from '../plugins/authenticate';
import { z } from 'zod';

export async function guessRoutes(fastify: FastifyInstance) {
  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count();

    return { count };
  });

  fastify.post(
    '/pools/:poolId/games/:gameId/guesses',
    {
      onRequest: [authenticate],
    },
    async (req, res) => {
      const createGuessParams = z.object({
        poolId: z.string(),
        gameId: z.string(),
      });

      const createGuesBody = z.object({
        firstTeamPoints: z.number(),
        secondTeamPoints: z.number(),
      });

      const { gameId, poolId } = createGuessParams.parse(req.params);
      const { firstTeamPoints, secondTeamPoints } = createGuesBody.parse(
        req.body
      );

      const participant = await prisma.participant.findUnique({
        where: {
          userId_poolId: {
            poolId,
            userId: req.user.sub,
          },
        },
      });

      if (!participant) {
        return res.status(400).send({
          message: 'User is not in the pool.',
        });
      }

      const guess = await prisma.guess.findUnique({
        where: {
          participantId_gameId: {
            participantId: participant.id,
            gameId,
          },
        },
      });

      if (guess) {
        return res.status(400).send({
          message: 'Participant already has a guess in the game.',
        });
      }

      const game = await prisma.game.findUnique({
        where: {
          id: gameId,
        },
      });

      if (!game) {
        return res.status(400).send({
          message: 'Game not found.',
        });
      }

      if (game.date < new Date()) {
        return res.status(400).send({
          message: 'You can not send guesses after the game date.',
        });
      }

      await prisma.guess.create({
        data: {
          gameId,
          participantId: participant.id,
          firstTeamPoints,
          secondTeamPoints,
        },
      });

      return res.status(201).send;
    }
  );
}
