import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { SpendingTrends } from "../../../api/dashboardtypes";

// Custom hook to fetch spending trends data for a customer over a specified number of months

export const useSpendingTrends = (customerId: string, months = 6) => {
  return useQuery<SpendingTrends>({
    queryKey: ["spendingTrends", customerId, months],
    queryFn: async () => {
      return await dashboardApi.getSpendingTrends(customerId, months);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
