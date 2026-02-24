import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { Goal } from "../../../api/dashboardtypes";

// Custom hook to fetch customer goals data

export const useGoals = (customerId: string) => {
  return useQuery<Goal[]>({
    queryKey: ["goals", customerId],

    queryFn: async () => {
      const response = await dashboardApi.getGoals(customerId);
      return response?.goals ?? [];
    },

    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
};
