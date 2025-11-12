/**
 * Displays a loading indicator
 */

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-20">
      <div className="text-4xl font-semibold text-zinc-600 dark:text-zinc-400">
        Loading weather data...
      </div>
      <div className="animate-spin">
        <svg
          className="w-20 h-20 text-zinc-400 dark:text-zinc-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    </div>
  );
}
