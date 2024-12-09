export interface Trade {
  id: string;
  scriptName: 'NIFTY' | 'BANKNIFTY';
  entryPrice: number;
  targetPrice: number;
  stopLoss: number;
  date: string;
  status: 'ACTIVE' | 'COMPLETED' | 'STOPPED';
  type: 'BUY' | 'SELL';
  profitLoss?: number;
}

export interface MarketData {
  symbol: string;
  ltp: number;
  change: number;
  changePercent: number;
}

export interface OptionSignal {
  id: string;
  timestamp: string;
  scriptName: 'NIFTY' | 'BANKNIFTY';
  strikePrice: number;
  optionType: 'CE' | 'PE';
  entry: number;
  target: number;
  stopLoss: number;
  status: 'ACTIVE' | 'COMPLETED' | 'STOPPED';
  lots?: number;
  maxProfit?: number;
  maxLoss?: number;
  message: string;
}