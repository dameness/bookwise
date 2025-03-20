interface SignInCardProps {
  iconUrl: string;
  description: string;
}

export const SignInCard = ({ iconUrl, description }: SignInCardProps) => {
  return (
    <button className='flex items-center w-80 gap-4 rounded-lg bg-gray-600 p-4 h-16 hover:outline-2 hover:outline-gray-700'>
      <img src={iconUrl} alt='Sign In Icon' className='w-8 min-w-8' />
      <h1 className='font-bold text-lg'>{description}</h1>
    </button>
  );
};
