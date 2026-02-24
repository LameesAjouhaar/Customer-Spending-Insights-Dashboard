/** @vitest-environment jsdom */
import { test, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithClient from "../../../utils/testUtils";
import { Transactions } from "../transactions/transactionsTable";
import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getTransactions: vi.fn(() => Promise.resolve(mock.transactions)),
  },
}));

test("renders transactions list", async () => {
  renderWithClient(<Transactions customerId={"12345"} />);

  await waitFor(() => expect(screen.getByText(/Pick n Pay/)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Netflix/)).toBeInTheDocument());
});
