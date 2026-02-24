// Simple loader component to indicate loading state while fetching data for the dashboard (used across all sections of the dashboard)
export const Loader = () => (
  <div className="flex justify-center py-10">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800"></div>
  </div>
);
