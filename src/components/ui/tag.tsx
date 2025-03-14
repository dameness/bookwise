interface TagProps {
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Tag = ({ title, selected = false, onClick }: TagProps) => {
  return (
    <a
      className={`${
        selected
          ? 'bg-purple-200 text-gray-100'
          : 'bg-transparent text-purple-100 hover:text-gray-100'
      } flex items-center justify-center hover:bg-purple-200 border border-purple-100 hover:border-0 rounded-[20px] w-[122px] h-[34px]`}
      onClick={onClick}
    >
      {title}
    </a>
  );
};
