import { Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OptionSignal } from '@/types';

interface OptionSignalCardProps {
  signal: OptionSignal;
}

export function OptionSignalCard({ signal }: OptionSignalCardProps) {
  const lotSize = signal.scriptName === 'NIFTY' ? 50 : 25;
  const maxProfit = ((signal.target - signal.entry) * lotSize).toFixed(2);
  const maxLoss = ((signal.entry - signal.stopLoss) * lotSize).toFixed(2);

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          {signal.scriptName} {signal.strikePrice} {signal.optionType}
        </CardTitle>
        <Badge
          variant={
            signal.status === 'ACTIVE'
              ? 'default'
              : signal.status === 'COMPLETED'
              ? 'success'
              : 'secondary'
          }
        >
          {signal.status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-2">
          <p className="text-sm text-muted-foreground">{signal.message}</p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Entry</p>
              <p className="text-lg font-semibold">₹{signal.entry}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Target</p>
              <p className="text-lg font-semibold text-green-500">₹{signal.target}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Stop Loss</p>
              <p className="text-lg font-semibold text-red-500">₹{signal.stopLoss}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Lot Size</p>
              <p className="text-lg font-semibold">{lotSize}</p>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm">Max Profit: </span>
                <span className="font-semibold text-green-500">₹{maxProfit}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calculator className="h-4 w-4 text-red-500" />
                <span className="text-sm">Max Loss: </span>
                <span className="font-semibold text-red-500">₹{maxLoss}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}