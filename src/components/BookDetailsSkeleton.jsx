"use client";
import { Skeleton } from "@/components/ui/skeleton";

const BookDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#f1f1f1] text-[#1d1d1d] dark:bg-[#1d1d1d] dark:text-[#f1f1f1] px-4 py-6 md:px-10 lg:px-20 mx-auto">
      <div className="mb-6">
        <Skeleton className="h-6 w-[120px]" />
      </div>

      <Skeleton className="h-10 w-full mb-6" />

      <div className="flex justify-center mb-6">
        <Skeleton className="h-[400px] w-[300px] rounded" />
      </div>

      <Skeleton className="h-20 w-full mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[50%]" />
      </div>

      <div className="flex flex-wrap gap-2">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-[80px] rounded-full" />
        ))}
      </div>
    </div>
  );
};

export default BookDetailsSkeleton;
