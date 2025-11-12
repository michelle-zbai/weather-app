/**
 * Skeleton loader for forecast cards
 * Shows placeholder animation while data loads
 */

interface ForecastSkeletonProps {
  count?: number;
}

export function ForecastSkeleton({ count = 3 }: ForecastSkeletonProps) {
  return (
    <div className="space-y-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-10">
          {/* Icon skeleton */}
          <div className="w-20 flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded-lg animate-pulse" />
          </div>

          {/* Table skeleton */}
          <section className="flex-1 border rounded-lg p-4 bg-white dark:bg-zinc-900">
            {/* City name skeleton */}
            <div className="h-6 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded w-1/3 mb-3 animate-pulse" />

            {/* Table skeleton */}
            <div className="space-y-2">
              {/* Header row */}
              <div className="flex gap-4 pb-2">
                <div className="h-5 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded w-1/3 animate-pulse" />
                <div className="h-5 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded w-1/4 animate-pulse" />
                <div className="h-5 bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded w-1/4 animate-pulse" />
              </div>
              {/* Data rows */}
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="flex gap-4">
                  <div className="h-5 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded w-1/3 animate-pulse" />
                  <div className="h-5 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded w-1/4 animate-pulse" />
                  <div className="h-5 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded w-1/4 animate-pulse" />
                </div>
              ))}
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
