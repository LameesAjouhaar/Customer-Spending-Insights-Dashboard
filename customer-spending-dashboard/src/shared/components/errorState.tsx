interface Props {
  message?: string;
}

// Simple error state component to display error messages in case of API failures or other issues (used across all sections of the dashboard)

export const ErrorState = ({ message }: Props) => (
  <div className="text-red-500 text-center py-6">
    {message || "Something went wrong."}
  </div>
);
