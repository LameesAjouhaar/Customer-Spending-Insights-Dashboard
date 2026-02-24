/** @vitest-environment jsdom */
import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect, vi } from "vitest";
import renderWithClient from "../../../utils/testUtils";
import { CustomerProfile } from "../customerProfile/customerProfile";
import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getCustomerProfile: vi.fn(() => Promise.resolve(mock.customerProfile)),
  },
}));

test("renders customer profile with name", async () => {
  renderWithClient(<CustomerProfile customerId={"12345"} />);

  await waitFor(() => expect(screen.getByText(/John Doe/)).toBeInTheDocument());
});
