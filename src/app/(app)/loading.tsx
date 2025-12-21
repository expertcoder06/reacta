import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Skeleton */}
      <Card className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b bg-card px-4 md:px-6 rounded-none md:rounded-lg md:m-4 md:top-2 opacity-0 animate-pulse" style={{ animation: 'none', opacity: 1 }}>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Skeleton className="ml-auto h-8 w-[200px] sm:w-[300px] lg:w-[300px]" />
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </Card>
      
      {/* Ad Space Skeleton */}
      <div className="h-24 bg-muted mb-8 flex items-center justify-center rounded-lg">
          <Skeleton className="h-6 w-24" />
      </div>

      {/* Page Content Skeleton */}
      <div className="flex items-center justify-center">
        <div className="w-full space-y-8">
            <div className="space-y-2">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
                <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
                <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
                <Card><CardContent className="p-4"><Skeleton className="h-20 w-full" /></CardContent></Card>
            </div>

            <Card>
                <CardContent className="p-6">
                    <div className="space-y-4">
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                        <Skeleton className="h-16 w-full" />
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
