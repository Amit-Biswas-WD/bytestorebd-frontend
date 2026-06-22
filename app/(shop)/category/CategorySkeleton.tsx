export default function CategorySkeleton() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="h-8 w-48 bg-gray-200 animate-pulse rounded mb-4" />
      <div className="h-4 w-32 bg-gray-200 animate-pulse rounded mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-gray-100 animate-pulse rounded-lg"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-72 bg-gray-100 animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
