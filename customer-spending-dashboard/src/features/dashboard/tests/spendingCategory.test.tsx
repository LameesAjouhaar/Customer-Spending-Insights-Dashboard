/** @vitest-environment jsdom */
import { test, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithClient from "../../../utils/testUtils";
import { SpendingCategory } from "../spendingCategory/spendingCategory";

import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getSpendingCategories: vi.fn(() => Promise.resolve(mock.spendingCategories)),
  },
}));

test("renders spending categories list", async () => {
  renderWithClient(<SpendingCategory customerId={"12345"} />);

  await waitFor(() => expect(screen.getByText(/Spending Categories/)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Groceries/)).toBeInTheDocument());
});
