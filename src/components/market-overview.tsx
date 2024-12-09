import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MarketData } from '@/types';

const marketData: MarketData[] = [
  {
    symbol: 'NIFTY 50',
    ltp: 22345.65,
    change: 123.45,
    changePercent: 0.55,
  },
  {
    symbol: 'BANK NIFTY',
    ltp: 46789.30,
    change: -234.56,
    changePercent: -0.50,
  },
];

export function MarketOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      {marketData.map((data) => (
        <Card key={data.symbol} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{data.symbol}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.ltp.toFixed(2)}</div>
            <div className={`flex items-center text-sm ${data.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.change >= 0 ? (
                <ArrowUpIcon className="mr-1 h-4 w-4" />
              ) : (
                <ArrowDownIcon className="mr-1 h-4 w-4" />
              )}
              {Math.abs(data.change).toFixed(2)} ({Math.abs(data.changePercent).toFixed(2)}%)
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}