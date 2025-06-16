type Props = {
  title: string;
  description: string;
};

export default function Loading({ title, description }: Props) {
  return (
    <div className="p-5 mb-4 bg-gray-200">
      <h3 className="mb-4 text-base font-semibold text-gray-700">{title}</h3>
      <div className="py-4 text-sm text-center text-gray-500">
        {description}
      </div>
    </div>
  );
}
