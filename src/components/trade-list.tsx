import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trade } from '@/types';

const trades: Trade[] = [
  {
    id: '1',
    scriptName: 'NIFTY',
    entryPrice: 22345.65,
    targetPrice: 22400.00,
    stopLoss: 22300.00,
    date: '2024-03-26',
    status: 'ACTIVE',
    type: 'BUY',
  },
  {
    id: '2',
    scriptName: 'BANKNIFTY',
    entryPrice: 46789.30,
    targetPrice: 47000.00,
    stopLoss: 46700.00,
    date: '2024-03-26',
    status: 'COMPLETED',
    type: 'SELL',
    profitLoss: 210.70,
  },
];

export function TradeList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Script</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Entry</TableHead>
            <TableHead className="text-right">Target</TableHead>
            <TableHead className="text-right">Stop Loss</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">P&L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.scriptName}</TableCell>
              <TableCell>
                <Badge variant={trade.type === 'BUY' ? 'default' : 'destructive'}>
                  {trade.type}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{trade.entryPrice.toFixed(2)}</TableCell>
              <TableCell className="text-right">{trade.targetPrice.toFixed(2)}</TableCell>
              <TableCell className="text-right">{trade.stopLoss.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    trade.status === 'ACTIVE'
                      ? 'default'
                      : trade.status === 'COMPLETED'
                      ? 'success'
                      : 'secondary'
                  }
                >
                  {trade.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {trade.profitLoss ? (
                  <span
                    className={trade.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}
                  >
                    {trade.profitLoss >= 0 ? '+' : ''}
                    {trade.profitLoss.toFixed(2)}
                  </span>
                ) : (
                  '-'
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}