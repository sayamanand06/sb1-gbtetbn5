import { OptionSignal } from '@/types';
import { OptionSignalCard } from './option-signal-card';

const signals: OptionSignal[] = [
  {
    id: '1',
    timestamp: '2024-03-26T10:30:00',
    scriptName: 'BANKNIFTY',
    strikePrice: 42500,
    optionType: 'CE',
    entry: 125,
    target: 175,
    stopLoss: 100,
    status: 'ACTIVE',
    message: 'Buy BANKNIFTY 42500 CE at 125. Target: 175, SL: 100. Risk management is crucial.',
  },
  {
    id: '2',
    timestamp: '2024-03-26T09:15:00',
    scriptName: 'NIFTY',
    strikePrice: 22000,
    optionType: 'PE',
    entry: 85,
    target: 120,
    stopLoss: 70,
    status: 'COMPLETED',
    message: 'Buy NIFTY 22000 PE at 85. Target: 120, SL: 70. Book profits in tranches.',
  },
];

export function SignalsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {signals.map((signal) => (
        <OptionSignalCard key={signal.id} signal={signal} />
      ))}
    </div>
  );
}