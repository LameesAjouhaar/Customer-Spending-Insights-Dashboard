// SpendingCategory.tsx
import React from "react";
import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useSpendingCategories } from "./useSpendingCategory";
import type { SpendingCategoryProps } from "./spendingCategorytypes";

import {
  ShoppingCart,
  Film,
  Car,
  Utensils,
  ShoppingBag,
  Zap,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Component to display spending categories with amounts, percentages, and progress bars for a customer

export const SpendingCategory = ({
  customerId,
  period,
}: SpendingCategoryProps) => {

    // Fetch spending categories data using the custom hook

  const { data, isLoading, error } = useSpendingCategories(
    customerId,
    period
  );

  // Map category icons to Lucide icons

  const iconMap: Record<string, React.ReactNode> = {
    "shopping-cart": <ShoppingCart size={18} />,
    film: <Film size={18} />,
    car: <Car size={18} />,
    utensils: <Utensils size={18} />,
    "shopping-bag": <ShoppingBag size={18} />,
    zap: <Zap size={18} />,
  };

  if (isLoading) return <Loader />;
  if (error || !data)
    return (
      <ErrorState message="Failed to load spending categories." />
    );

    // Display spending categories with amounts, percentages, and progress bars

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-900">
        Spending Categories
      </h2>

      {/* 📊 Category Pie Chart */}
<div className="h-72 w-full mb-6">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Tooltip />
      <Pie
        data={data.categories}
        dataKey="amount"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.categories.map((entry) => (
          <Cell key={entry.name} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
</div>

      <div className="space-y-5">
        {data.categories.map((category) => {
          const formattedAmount =
            category.amount.toLocaleString("en-ZA", {
              style: "currency",
              currency: "ZAR",
            });

          return (
            <div
              key={category.name}
              className="p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-4">
                  {/* Icon Bubble */}
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white"
                    style={{
                      backgroundColor:
                        category.color ?? "#6366F1",
                    }}
                  >
                    {iconMap[category.icon] ?? (
                      <ShoppingCart size={18} />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {category.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {category.percentage}% of total spend
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-gray-900">
                  {formattedAmount}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${category.percentage}%`,
                    backgroundColor:
                      category.color ?? "#6366F1",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};