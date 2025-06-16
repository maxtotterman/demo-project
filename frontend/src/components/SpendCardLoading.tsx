type Props = {
  title: string;
};

export default function SpendCardLoading({ title }: Props) {
  return (
    <div className="p-5 mb-4 bg-gray-200">
      <h3 className="mb-4 text-base font-semibold text-gray-700">{title}</h3>
      <div className="animate-pulse">
        <div className="flex justify-between items-center my-5">
          <div className="w-40 h-8 bg-gray-300 rounded"></div>
          <div className="w-4 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="mb-3 h-2 bg-gray-300 rounded"></div>
        <div className="mx-auto w-36 h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
