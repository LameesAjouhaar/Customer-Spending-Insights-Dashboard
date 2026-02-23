// Transactions.tsx
import React from "react";
import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useTransactions } from "./usetransactions";
import type { TransactionsProps } from "./transactionstypes";

import {
  ShoppingCart,
  Film,
  Car,
  Utensils,
  ShoppingBag,
  Zap,
} from "lucide-react";

// Component to display a list of transactions for a customer with merchant, category, amount, and date

export const Transactions = ({
  customerId,
  params,
  currency = "ZAR",
}: TransactionsProps) => {

    // Fetch transactions data using the custom hook

  const { data, isLoading, error } = useTransactions(customerId, params);

  // Map of category icons for transaction display

  const iconMap: Record<string, React.ReactNode> = {
    "shopping-cart": <ShoppingCart size={18} />,
    film: <Film size={18} />,
    car: <Car size={18} />,
    utensils: <Utensils size={18} />,
    "shopping-bag": <ShoppingBag size={18} />,
    zap: <Zap size={18} />,
  };

  if (isLoading) return <Loader />;

  if (error || !data || data.transactions.length === 0) {
    return <ErrorState message="No transactions available." />;
  }

  // Sort transactions by date (newest first)

  return (
    <Card className="p-6">

      <div className="space-y-4">
        {data.transactions.map((txn) => {
          const formattedAmount = txn.amount.toLocaleString("en-ZA", {
            style: "currency",
            currency,
          });

          const formattedDate = new Date(txn.date).toLocaleDateString(
            "en-ZA",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          );

          return (
            <div
              key={txn.id}
              className="flex justify-between items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              {/* LEFT SIDE */}
              <div className="flex items-start gap-4">
                {/* Icon Bubble */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-transform duration-200 hover:scale-105"
                  style={{ backgroundColor: txn.categoryColor }}
                >
                  {iconMap[txn.icon] ?? <ShoppingCart size={18} />}
                </div>

                {/* Merchant Info */}
                <div>
                  <p className="font-semibold text-gray-900">
                    {txn.merchant}
                  </p>
                  <p className="text-sm text-gray-500">
                    {txn.category}
                  </p>
                  {txn.description && (
                    <p className="text-xs text-gray-400 mt-1">
                      {txn.description}
                    </p>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  {formattedAmount}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formattedDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};