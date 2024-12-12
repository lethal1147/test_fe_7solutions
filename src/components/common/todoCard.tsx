type TodoCardPropsType = {
  title: string;
  onClick: () => void;
};

export default function TodoCard({ title, onClick }: TodoCardPropsType) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full border border-gray-300 shadow-md px-1 md:px-3 py-3 text-center font-bold hover:scale-105 transition-all cursor-pointer line-clamp-1"
    >
      {title}
    </button>
  );
}
