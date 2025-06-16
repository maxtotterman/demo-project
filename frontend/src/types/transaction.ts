export type Transaction = {
  id: string;
  card_id: string;
  description: string;
  amount: number;
  transaction_type: "purchase" | "refund" | "fee" | "payment";
  merchant_name?: string;
  merchant_category?: string;
  data_points: string;
  transaction_date: string; // ISO string
  created_at: string;
  status: "pending" | "completed" | "failed";
};

export type TransactionListResponse = {
  transactions: Transaction[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
  summary: {
    total_amount: number;
    transaction_count: number;
  };
};
