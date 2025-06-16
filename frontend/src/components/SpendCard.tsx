import { useCardDetails } from "@/queries/card";
import { formatCurrency } from "@/utils/formatter";
import { getAuthPayload } from "@/utils/token";
import Error from "@/components/Error";
import SpendCardLoading from "./SpendCardLoading";

export default function SpendCard() {
  const authPayload = getAuthPayload();

  if (!authPayload) {
    return null;
  }

  const {
    data: card,
    isLoading,
    isError,
  } = useCardDetails(authPayload.card.id);

  if (isLoading) {
    return <SpendCardLoading title="Remaining spend" />;
  }

  if (isError || !card) {
    return (
      <Error title="Remaining spend" description="Unable to load spend data" />
    );
  }

  return (
    <div className="p-5 mb-4 bg-gray-200 transition-colors cursor-pointer hover:shadow-sm">
      <h3 className="mb-4 text-base font-semibold text-gray-700">
        Remaining spend
      </h3>

      <div className="relative my-5">
        <div className="flex justify-center">
          <span className="text-2xl font-bold">
            {formatCurrency(card.total_spent)} /{" "}
            {formatCurrency(card.total_spend_limit)}
          </span>
        </div>
        <span className="absolute right-0 top-1/2 text-lg -translate-y-1/2">
          ›
        </span>
      </div>

      <p className="m-0 text-sm text-right text-gray-500">
        Based on your set limit
      </p>
    </div>
  );
}
