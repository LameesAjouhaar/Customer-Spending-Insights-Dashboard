export interface TransactionsProps {
  customerId: string;
  currency?: string; // defaults to ZAR
  params?: {
    limit?: number;
    offset?: number;
    category?: string;
    startDate?: string;
    endDate?: string;
    sortBy?: string;
  };
}
