type Props = {
  title: string;
};

export default function Loading({ title }: Props) {
  return (
    <div className="p-5 mb-4 bg-gray-200">
      <h3 className="mb-4 text-base font-semibold text-gray-700">{title}</h3>
      <div className="animate-pulse">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex justify-between items-center py-3 border-b border-gray-300 last:border-b-0"
          >
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
