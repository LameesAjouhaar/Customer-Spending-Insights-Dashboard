import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useSpendingSummary } from "./usesummaryCards";
import type { SummaryCardsProps } from "./summaryCardstypes";

// Component to display summary cards with total spent, transaction count, average transaction value, and top category for a customer

export const SummaryCards = ({ customerId, period = "30d" }: SummaryCardsProps) => {

// Fetch spending summary data using the custom hook

  const { data, isLoading, error } = useSpendingSummary(customerId, period);

  if (isLoading) return <Loader />;
  if (error || !data) return <ErrorState message="Failed to load spending summary." />;

  // Destructure summary data with default values to handle missing fields
  const {
    totalSpent = 0,
    transactionCount = 0,
    averageTransaction = 0,
    topCategory = "",
    comparedToPrevious = { spentChange: 0, transactionChange: 0 },
  } = data as any;

  const spentChange = Number(comparedToPrevious.spentChange ?? 0);
  const transactionChange = Number(comparedToPrevious.transactionChange ?? 0);

  const spentChangeColor = spentChange >= 0 ? "text-green-500" : "text-red-500";
  const transactionChangeColor = transactionChange >= 0 ? "text-green-500" : "text-red-500";

  // Display summary cards with conditional formatting for changes compared to previous period
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <h3 className="text-sm text-gray-500 mb-1">Total Spent</h3>
        <p className="text-lg font-semibold">
          {totalSpent.toLocaleString(undefined, { style: "currency", currency: "ZAR" })}
        </p>
        <span className={`text-xs ${spentChangeColor}`}>
          {spentChange >= 0 ? "+" : ""}
          {spentChange.toFixed(1)}% vs previous
        </span>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500 mb-1">Transactions</h3>
        <p className="text-lg font-semibold">{transactionCount}</p>
        <span className={`text-xs ${transactionChangeColor}`}>
          {transactionChange >= 0 ? "+" : ""}
          {transactionChange.toFixed(1)}% vs previous
        </span>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500 mb-1">Average Transaction</h3>
        <p className="text-lg font-semibold">
          {averageTransaction.toLocaleString(undefined, { style: "currency", currency: "ZAR" })}
        </p>
      </Card>

      <Card>
        <h3 className="text-sm text-gray-500 mb-1">Top Category</h3>
        <p className="text-lg font-semibold">{topCategory}</p>
      </Card>
    </div>
  );
};
