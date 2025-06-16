import { useCardTransactions } from "@/queries/card";
import { formatCurrency, formatDate } from "@/utils/formatter";
import { getAuthPayload } from "@/utils/token";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

//TODO: Update total transactions count when API is available
export default function TransactionList() {
  const authPayload = getAuthPayload();

  if (!authPayload) {
    return null;
  }

  const {
    data: transactions,
    isLoading,
    isError,
  } = useCardTransactions(authPayload.card.id);

  if (isLoading) {
    return <Loading title="Latest transactions" />;
  }

  if (isError || !transactions) {
    return (
      <Error
        title="Latest transactions"
        description="Failed to load transactions"
      />
    );
  }

  return (
    <div className="p-5 mb-4 bg-gray-200">
      <h3 className="mb-4 text-base font-semibold text-gray-700">
        Latest transactions
      </h3>
      <div className="mb-5">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center py-3 border-b border-gray-300 last:border-b-0"
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-700">
                {transaction.description}
              </span>
              <span className="mt-1 text-xs text-gray-500">
                {formatDate(transaction.transaction_date)}
              </span>
            </div>
            <span className="text-sm text-gray-700">
              {formatCurrency(transaction.amount)}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center p-4 -mx-5 -mb-5 text-sm text-gray-700 bg-gray-50 border-2 border-gray-700 transition-colors cursor-pointer hover:bg-gray-100">
        <span>{transactions.length} more items in transaction view</span>
        <span className="text-lg">›</span>
      </div>
    </div>
  );
}
