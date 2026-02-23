import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { SpendingSummary } from "../../../api/dashboardtypes";

// Custom hook to fetch spending summary data for a customer and period

export const useSpendingSummary = (customerId: string, period = "30d") => {
  return useQuery<SpendingSummary>({
    queryKey: ["spendingSummary", customerId, period],
    queryFn: async () => {
      return await dashboardApi.getSpendingSummary(customerId, period);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
