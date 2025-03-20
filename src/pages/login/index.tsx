import { SignInCard } from '../../components/signInCard';

export const LoginPage = () => {
  return (
    <div className='flex items-center md:flex-row flex-col gap-4 text-gray-100 w-full h-full md:min-h-screen min-h-[60vh]'>
      <div className='flex items-center justify-center rounded-md w-full bg-gray-900 text-4xl font-bold md:w-2/5 md:min-h-screen min-h-[60vh]'>
        <div className='flex items-center gap-2 bg-gradient-horizontal text-gradient'>
          <img
            src='/assets/bookwise.svg'
            alt='Bookwise Icon'
            className='w-10 min-w-10'
          />
          BookWise
        </div>
      </div>
      <div className='flex items-center justify-center w-full md:w-3/5 md:min-h-screen min-h-[60vh]'>
        <div className='space-y-1 w-max'>
          <h1 className='font-bold text-2xl'>Boas vindas!</h1>
          <h1>Faça seu login ou acesse como visitante.</h1>
          <div className='flex flex-col items-center gap-4 w-full mt-8'>
            <SignInCard
              iconUrl='/assets/google-icon.svg'
              description='Entrar Com Google'
            />
            <SignInCard
              iconUrl='/assets/github-icon.svg'
              description='Entrar Com GitHub'
            />
            <SignInCard
              iconUrl='/assets/rocket-icon.svg'
              description='Acessar como Visitante'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
