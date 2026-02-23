import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

// Reusable Card component for consistent styling across the dashboard (used in profile, summary, categories, trends, goals, transactions sections)
export const Card = ({ children, className }: Props) => {
  return (
    <div className={`bg-white shadow-md rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
};
