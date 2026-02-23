import { CustomerProfile } from "./customerProfile/customerProfile";
import { GoalsProgress } from "./goals/goalsProgress";
import { SpendingCategory } from "./spendingCategory/spendingCategory";
import { SpendingTrends } from "./spendingTrend/spendingTrend";
import { SummaryCards } from "./summaryCards/summaryCards";
import { Transactions } from "./transactions/transactionsTable";
import { appConfig } from "../../config/appConfig";

// Main dashboard component that composes all the individual sections (profile, summary, categories, trends, goals, transactions) for a given customer

export const Dashboard = () => {

const customerId = appConfig.defaultCustomerId;

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Customer Spending Insights
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Overview of spending, goals, and transaction activity.
          </p>
        </div>

        <div className="space-y-6">

          {/* Profile */}
          <CustomerProfile customerId={customerId} />

          {/* Summary Cards */}
          <SummaryCards customerId={customerId} />

        </div>

        {/*Analytics Section */}
        <div className="bg-white rounded-3xl shadow-sm p-8 space-y-8">

          <h2 className="text-2xl font-semibold text-gray-800">
            Spending Analytics
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

            {/* Spending Categories */}
            <div className="xl:col-span-2">
              <SpendingCategory customerId={customerId} />
            </div>

            {/* Spending Trends */}
            <SpendingTrends customerId={customerId} />

          </div>
        </div>

        {/* Goals */}
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Budget Goals
          </h2>

          <GoalsProgress customerId={customerId} />
        </div>

        {/* Transactions*/}
        <div className="bg-white rounded-3xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Transactions
          </h2>

          <Transactions customerId={customerId} />
        </div>

      </div>
    </div>
  );
};