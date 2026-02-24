/** @vitest-environment jsdom */
import { test, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithClient from "../../../utils/testUtils";
import { SpendingTrends } from "../spendingTrend/spendingTrend";
import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getSpendingTrends: vi.fn(() => Promise.resolve(mock.spendingTrends)),
  },
}));

test("renders spending trends months", async () => {
  renderWithClient(<SpendingTrends customerId={"12345"} months={6} />);

  await waitFor(() => expect(screen.getByText(/Spending Trends/)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/2024-06/)).toBeInTheDocument());
});
