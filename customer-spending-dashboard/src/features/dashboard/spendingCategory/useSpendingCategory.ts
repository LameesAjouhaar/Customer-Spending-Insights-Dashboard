import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { SpendingCategories } from "../../../api/dashboardtypes";

// Custom hook to fetch spending categories data for a customer

export const useSpendingCategories = (customerId: string, period = "30d") => {
  return useQuery<SpendingCategories>({
    queryKey: ["spendingCategories", customerId, period],
    queryFn: async () => {
      return await dashboardApi.getSpendingCategories(customerId, period);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
