import { useState } from "react";
import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useSpendingTrends } from "./usespendingTrend";
import type { SpendingTrendsProps } from "./spendingTrendtypes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Component to display spending trends over the last 6 months for a customer

export const SpendingTrends = ({
  customerId,
  months = 6,
}: SpendingTrendsProps) => {
  const { data, isLoading, error } = useSpendingTrends(
    customerId,
    months
  );

  // Local state to manage expanded/collapsed view of trends

  const [expanded, setExpanded] = useState(false);
  const currency = "ZAR";

  if (isLoading) return <Loader />;
  if (error || !data)
    return <ErrorState message="Failed to load spending trends." />;

  // Sort newest to oldest
  const sortedTrends = [...data.trends].sort((a, b) => {
    return (
      new Date(b.month + "-01").getTime() -
      new Date(a.month + "-01").getTime()
    );
  });

  // Show only 4 unless expanded
  const visibleTrends = expanded
    ? sortedTrends
    : sortedTrends.slice(0, 4);

  // Bar scaling
  const maxSpend = Math.max(
    ...sortedTrends.map((t) => t.totalSpent),
    0
  );

  // Display spending trends with month, total spent, average transaction, and a progress bar

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">
        Spending Trends (Last {months} Months)
      </h2>

      <div className="h-72 w-full mb-6">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={sortedTrends}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip
        formatter={(value: number | string | undefined) => {
            if (typeof value !== "number") return value;

            return value.toLocaleString("en-ZA", {
            style: "currency",
            currency,
            });
        }}
        />
      <Line
        type="monotone"
        dataKey="totalSpent"
        stroke="#6366f1"
        strokeWidth={3}
        dot={{ r: 4 }}
        activeDot={{ r: 6 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>

      <div className="space-y-5">
        {visibleTrends.map((trend) => {
          const formattedTotal =
            trend.totalSpent.toLocaleString("en-ZA", {
              style: "currency",
              currency,
            });

          const formattedAverage =
            trend.averageTransaction.toLocaleString("en-ZA", {
              style: "currency",
              currency,
            });

          const barWidth =
            maxSpend > 0
              ? (trend.totalSpent / maxSpend) * 100
              : 0;

          return (
            <div
              key={trend.month}
              className="p-4 rounded-xl hover:bg-gray-50 transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-900">
                  {trend.month}
                </p>

                <p className="text-sm text-gray-500">
                  {trend.transactionCount} transactions
                </p>
              </div>

              {/* Totals */}
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm text-gray-500">
                    Total Spent
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {formattedTotal}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    Avg Transaction
                  </p>
                  <p className="font-medium text-gray-800">
                    {formattedAverage}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* View More / View Less */}
     {sortedTrends.length > 4 && (
  <div className="mt-6 flex justify-center">
    <button
      type="button"
      onClick={() => setExpanded((prev) => !prev)}
      className="
        px-6 py-2.5
        rounded-full
        text-sm font-medium
        transition-all duration-200
        bg-indigo-50 text-indigo-600
        hover:bg-indigo-100
        hover:scale-105
        active:scale-95
      "
    >
      {expanded
        ? "View Less"
        : `View More (${sortedTrends.length - 4})`}
    </button>
  </div>
      )}
    </Card>
  );
};