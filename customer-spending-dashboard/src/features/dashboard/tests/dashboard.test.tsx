/** @vitest-environment jsdom */
import { test, expect } from "vitest";
import { screen } from "@testing-library/react";
import renderWithClient from "../../../utils/testUtils";
import { Dashboard } from "../dashboard";

test("renders dashboard header", () => {
  renderWithClient(<Dashboard />);
  expect(screen.getByText(/Customer Spending Insights/)).toBeInTheDocument();
});
