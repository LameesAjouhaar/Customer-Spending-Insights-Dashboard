import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../../api/dashboardApi";
import type { CustomerProfile } from "../../../api/dashboardtypes";

// Custom hook to fetch customer profile data
export const useCustomerProfile = (customerId: string) => {
  return useQuery<CustomerProfile>({
    queryKey: ["customerProfile", customerId],
    queryFn: () => dashboardApi.getCustomerProfile(customerId),

    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};
