import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { Transactions } from "../../../api/dashboardtypes";

interface UseTransactionsParams {
  limit?: number;
  offset?: number;
  category?: string;
  startDate?: string;
  endDate?: string;
  sortBy?: string;
}

// Custom hook to fetch transactions for a customer with optional parameters for filtering and pagination

export const useTransactions = (
  customerId: string,
  params?: UseTransactionsParams
) => {
  return useQuery<Transactions>({
    queryKey: ["transactions", customerId, params],
    queryFn: async () => {
      return await dashboardApi.getTransactions(customerId, params);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
