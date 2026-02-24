/** @vitest-environment jsdom */
import { test, expect, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import renderWithClient from "../../../utils/testUtils";
import { GoalsProgress } from "../goals/goalsProgress";
import * as mock from "../../../api/mockData.json";

vi.mock("../../../api/dashboardApi", () => ({
  dashboardApi: {
    getGoals: vi.fn(() => Promise.resolve(mock.goals)),
  },
}));

test("renders goals and progress percentages", async () => {
  renderWithClient(<GoalsProgress customerId={"12345"} />);

  await waitFor(() => expect(screen.getByText(/Entertainment/)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Groceries/)).toBeInTheDocument());
});
