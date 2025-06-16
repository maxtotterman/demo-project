type Props = {
  label: string;
  loadingLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  loadingLabel = "Processing...",
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  type = "button",
}: Props) {
  const baseClasses =
    "w-full p-4 text-base font-semibold transition-all duration-200 border-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = {
    primary:
      "bg-gray-700 text-white hover:bg-gray-800 disabled:hover:bg-gray-700 focus:ring-gray-500",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 disabled:hover:bg-gray-600 focus:ring-gray-400",
  };
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${loading ? "cursor-wait" : "cursor-pointer"}`}
      disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading ? (
        <div className="flex gap-2 justify-center items-center">
          <div className="w-4 h-4 rounded-full border-2 border-white animate-spin border-t-transparent"></div>
          <span>{loadingLabel}</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
}
