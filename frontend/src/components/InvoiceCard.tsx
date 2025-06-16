type InvoiceCardProps = {
  imageUrl?: string;
};

export default function InvoiceCard({ imageUrl }: InvoiceCardProps) {
  const handleCardClick = () => {
    console.log("Card clicked");
  };

  const handleInvoiceClick = () => {
    console.log("Invoice clicked");
  };

  return (
    <div className="relative mb-4">
      <CardHeader label="Invoice due" onClick={handleInvoiceClick} />
      <div className="bg-gray-200 rounded-2xl h-[200px]">
        <CardImage imageUrl={imageUrl} onClick={handleCardClick} />
      </div>
    </div>
  );
}

type InvoiceCardHeaderProps = {
  label: string;
  onClick: () => void;
};

function CardHeader({ label, onClick }: InvoiceCardHeaderProps) {
  return (
    <div className="absolute -top-5 left-1/2 z-10 transform -translate-x-1/2">
      <button
        onClick={onClick}
        className="py-1 px-4 text-sm font-medium bg-gray-200 shadow-md transition cursor-pointer hover:bg-gray-100"
      >
        <span>{label}</span>
        <span className="ml-2 text-lg text-gray-500">›</span>
      </button>
    </div>
  );
}

type InvoiceCardImageProps = {
  imageUrl?: string;
  onClick: () => void;
};

function CardImage({ imageUrl, onClick }: InvoiceCardImageProps) {
  return (
    <div
      className="overflow-hidden relative w-full h-full rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Users virtual credit card"
          className="object-cover absolute inset-0 w-full h-full"
        />
      ) : (
        <div className="flex justify-center items-center w-full h-full text-gray-500 bg-gray-200">
          <span>Card image</span>
        </div>
      )}

      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 z-10 p-1 text-2xl text-white transition transform -translate-y-1/2 cursor-pointer drop-shadow"
      >
        ›
      </button>
    </div>
  );
}
