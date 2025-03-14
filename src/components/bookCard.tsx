import { Star } from '@phosphor-icons/react';

interface BookCardProps {
  name: string;
  author: string;
  summary: string;
  coverUrl: string;
  createdAt: Date;
  cardSize?: 'sm' | 'lg';
}

export const BookCard = ({
  name,
  author,
  summary,
  coverUrl,
  createdAt,
  cardSize = 'lg',
}: BookCardProps) => {
  if (cardSize == 'sm') {
    return (
      <div className='w-[308px] h-[130px] px-5 py-4 flex gap-4 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600'>
        <img className='min-w-16 w-16 h-[94px] rounded-sm' src={coverUrl} />

        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-gray-100 font-bold'>A revolução dos bichos</h1>
            <h1 className='text-gray-400 text-sm font-light'>George Orwell</h1>
          </div>

          <div className='flex gap-0.5'>
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='w-[600px] h-48 px-6 py-5 flex gap-6 rounded-lg bg-gray-600 hover:outline-2 hover:outline-gray-500'>
      <img
        className='min-w-[108px] w-[108px] h-[152px] rounded-sm'
        src={coverUrl}
      />

      <div className='flex flex-col w-full gap-3'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='text-gray-300 text-sm font-light'>
            {createdAt.toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h1>

          <div className='flex gap-0.5'>
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' weight='fill' />
            <Star className='text-purple-100' />
          </div>
        </div>

        <div>
          <h1 className='text-gray-100 font-bold'>{name}</h1>
          <h1 className='text-gray-400 text-sm'>{author}</h1>
        </div>

        <h1 className='mt-6 text-gray-100 text-sm font-semibold'>{summary}</h1>
      </div>
    </div>
  );
};
