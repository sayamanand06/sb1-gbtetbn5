export interface User {
  id: string;
  email: string;
  name: string;
  subscriptionStatus: 'free' | 'premium';
  subscriptionEndDate: string;
  referralCode: string;
  referredBy?: string;
  referralCount: number;
  joinedAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}