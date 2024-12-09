import { BarChart3Icon, TrendingUpIcon, BellIcon } from 'lucide-react';
import { MarketOverview } from '@/components/market-overview';
import { TradeList } from '@/components/trade-list';
import { SignalsList } from '@/components/signals/signals-list';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TrendingUpIcon className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-lg font-semibold">Trading Dashboard</h2>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Market Overview</h2>
          <div className="flex items-center space-x-2">
            <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Live Market</span>
          </div>
        </div>
        <MarketOverview />
        
        <div className="mt-8">
          <div className="flex items-center space-x-2 mb-4">
            <BellIcon className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Latest Option Signals</h2>
          </div>
          <SignalsList />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Today's Trading Scripts</h2>
          <TradeList />
        </div>
      </div>
    </div>
  );
}