/**
 * Skeleton loader for detail weather page
 * Shows placeholder animation while data loads
 */

export function DetailPageSkeleton() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Header skeleton */}
        <div className="grid grid-cols-3 items-center">
          <div className="justify-self-start">
            <div className="h-10 w-32 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded animate-pulse" />
          </div>
          <div className="justify-self-center h-12 w-48 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded animate-pulse" />
          <div>{/* Empty div */}</div>
        </div>

        {/* Current weather skeleton */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 space-y-4">
          <div className="h-8 w-1/3 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-16 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Forecast skeleton */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 space-y-4">
          <div className="h-8 w-1/4 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded animate-pulse" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
