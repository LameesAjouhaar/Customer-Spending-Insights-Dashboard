/** @vitest-environment jsdom */
import { screen, waitFor } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import renderWithClient from "../../../utils/testUtils";
import { SummaryCards } from "../summaryCards/summaryCards";
import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getSpendingSummary: vi.fn(() => Promise.resolve(mock.spendingSummary)),
  },
}));

test("renders summary total spent", async () => {
  renderWithClient(<SummaryCards customerId={"12345"} />);

  await waitFor(() => expect(screen.getByText(/Total Spent/i)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Groceries/)).toBeInTheDocument());
});
