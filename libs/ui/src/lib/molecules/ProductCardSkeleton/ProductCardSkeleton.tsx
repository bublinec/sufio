export interface ProductCardSkeletonProps {}

export const ProductCardSkeleton = (props: ProductCardSkeletonProps) => {
  return (
    <article className={`flex flex-col gap-2`}>
      <div className="w-full aspect-video object-cover rounded-md bg-dark-gray overflow-hidden shadow-lg animate-pulse"></div>
      <div className="flex flex-col justify-between gap-0.5">
        <div className="h-6 bg-dark-gray rounded w-1/3 animate-pulse"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-dark-gray rounded w-14 animate-pulse"></div>
          <div className="h-10 bg-dark-gray rounded w-28 animate-pulse"></div>
        </div>
      </div>
    </article>
  );
};
