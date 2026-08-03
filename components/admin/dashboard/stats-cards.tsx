import { Card, CardContent } from "@/components/ui/card";
import { useGetAdminStats } from "@/lib/api/hooks/admin/admin.hooks";
import { formatCurrency } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CurrencyRevenue {
  currency: string;
  amount: number;
  payments: number;
}

export function StatsCards() {
  const { data, isLoading, isError } = useGetAdminStats();

  if (isError) return null;

  const statsData = data?.data;
  const baseCurrency: string = statsData?.currency ?? "GBP";

  // Revenue is totalled in the base currency, but every payment was taken in
  // the customer's own currency. Without the breakdown the total looks like it
  // disagrees with the payment rows.
  const byCurrency: CurrencyRevenue[] = (statsData?.revenueByCurrency ?? [])
    .filter((row: CurrencyRevenue) => row.currency !== baseCurrency)
    .sort((a: CurrencyRevenue, b: CurrencyRevenue) => b.amount - a.amount);

  const stats = [
    { title: "Total Users", value: statsData?.totalUsers ?? 0 },
    { title: "Total Programs", value: statsData?.totalPrograms ?? 0 },
    { title: "Total Camps", value: statsData?.totalCamps ?? 0 },
    { title: "Total Consultations", value: statsData?.totalConsultations ?? 0 },
    {
      title: "Total Revenue",
      value: formatCurrency(statsData?.totalRevenue ?? 0, baseCurrency),
      caption: byCurrency.length
        ? `incl. ${byCurrency
            .map((row) => formatCurrency(row.amount, row.currency))
            .join(", ")} taken in other currencies`
        : undefined,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full">
      {isLoading
        ? Array.from({ length: 5 }).map((_, i) => (
            <Card
              key={i}
              className="border-none rounded-[10px] bg-dash-secondary-bg"
            >
              <CardContent className="p-5 flex flex-col gap-3 justify-center">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))
        : stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none rounded-[10px] bg-dash-secondary-bg"
            >
              <CardContent className="p-5 flex flex-col gap-3 justify-center">
                <h6 className="text-primary-text text-xs md:text-sm font-normal">
                  {stat.title}
                </h6>
                <h3 className="text-secondary-text text-2xl font-semibold">
                  {stat.value}
                </h3>
                {stat.caption ? (
                  <p className="text-[10px] text-secondary-text leading-snug">
                    {stat.caption}
                  </p>
                ) : null}
              </CardContent>
            </Card>
          ))}
    </div>
  );
}
