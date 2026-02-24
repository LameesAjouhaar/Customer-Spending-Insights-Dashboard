import { Card } from "../../../shared/components/card";
import { Loader } from "../../../shared/components/loader";
import { ErrorState } from "../../../shared/components/errorState";
import { useGoals } from "./useGoals";
import type { GoalsProgressProps } from "./goalstypes";

// Component to display goals progress with progress bars and status indicators

export const GoalsProgress = ({ customerId }: GoalsProgressProps) => {
    // Fetch goals data using the custom hook
  const { data: goals, isLoading, error } = useGoals(customerId);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !goals) {
    return <ErrorState message="Failed to load spending goals." />;
  }

// Display goals progress with progress bars and status indicators
  return (
    <Card>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progressColor =
            goal.status === "exceeded"
              ? "bg-red-500"
              : goal.status === "warning"
              ? "bg-yellow-500"
              : "bg-green-500";

          return (
            <div key={goal.id}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">
                  {goal.category}
                </span>

                <span>
                  {goal.currentSpent.toLocaleString()} /{" "}
                  {goal.monthlyBudget.toLocaleString()}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${progressColor} h-3 rounded-full transition-all`}
                  style={{
                    width: `${Math.min(goal.percentageUsed, 100)}%`,
                  }}
                />
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>
                  {goal.percentageUsed.toFixed(1)}% used
                </span>

                <span>
                  {goal.daysRemaining} days remaining
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
