import Image from 'next/image'
import appPreview from '../assets/app-nlw-copa-preview.png'
import logoImage from '../assets/logo.svg'
import usersAvatar from '../assets/users-avatar-example.png'
import iconCheck from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
      <main>
        <Image src={logoImage} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatar} alt="" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            placeholder="Qual nome do seu bolão?"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-6 py-4 rounded font-bold text-gray-900 text-sm uppercase hover:bg-yellow-700"
          >
            Criar meu bolão
          </button>
        </form>

        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col ">
              <span className="font-bold text-2xl">+2.034</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" />
            <div className="flex flex-col ">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image src={appPreview} alt="celulares" quality={100} />
    </div>
  )
}
