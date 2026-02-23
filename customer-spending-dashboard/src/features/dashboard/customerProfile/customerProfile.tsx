import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useCustomerProfile } from "./useCustomerProfile";
import type { CustomerProfileProps } from "./customerProfiletypes";

// Component to display customer profile information in a card layout

export const CustomerProfileComponent = ({ customerId }: CustomerProfileProps) => {
    // Fetch customer profile data using the custom hook
  const { data, isLoading, error } = useCustomerProfile(customerId);

  if (isLoading) return <Loader />;
  if (error || !data) return <ErrorState message="Failed to load customer profile." />;

// Display customer profile information in a card layout
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{data.name}</h2>

          <p className="text-sm text-gray-500">
            {data.email}
          </p>

          <p className="text-sm text-gray-500">
            Joined: {new Date(data.joinDate).toLocaleDateString()}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">
            Account Type
          </p>

          <p className="font-medium capitalize">
            {data.accountType}
          </p>

          <p className="text-lg font-bold mt-2">
            {data.currency ?? ""} {Number(data.totalSpent ?? 0).toLocaleString()}
          </p>

          <p className="text-sm text-gray-500">
            Lifetime Spending
          </p>
        </div>
      </div>
    </Card>
  );
};

// Backwards-compatible named export
export { CustomerProfileComponent as CustomerProfile };
