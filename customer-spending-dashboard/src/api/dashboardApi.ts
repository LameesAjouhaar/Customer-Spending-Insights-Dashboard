import { appConfig } from "../config/appConfig";
import mockData from "./mockData.json";
import type {
  CustomerProfile,
  SpendingSummary,
  SpendingCategories,
  SpendingTrends,
  Transactions,
  Goals
} from "./dashboardtypes";

// Simulate API calls with mock data and delay

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const dashboardApi = {

  getCustomerProfile: async (customerId: string): Promise<CustomerProfile> => {
   await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.customerProfile;
  },


  getSpendingSummary: async (
    customerId: string,
    _period = "30d"
  ): Promise<SpendingSummary> => {
    await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.spendingSummary;
  },

  // For categories and trends, we return the nested data to match the expected structure in hooks

  getSpendingCategories: async (
    customerId: string,
    _period = "30d"
  ): Promise<SpendingCategories> => {
    await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.spendingCategories;
  },


  getSpendingTrends: async (
    customerId: string,
    _months = 6
  ): Promise<SpendingTrends> => {
    await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.spendingTrends;
  },


  getTransactions: async (
    customerId: string,
    _params?: unknown
  ): Promise<Transactions> => {
    await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.transactions;
  },

  getGoals: async (customerId: string): Promise<Goals> => {
    await simulateDelay(appConfig.apiDelay);

    if (customerId !== mockData.customerProfile.customerId) {
      throw new Error("Customer not found");
    }

    return mockData.goals;
  }
};