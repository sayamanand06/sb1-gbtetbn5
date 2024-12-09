import { useEffect } from 'react';
import { AuthPage } from '@/pages/auth';
import { Dashboard } from '@/pages/dashboard';
import { useAuthStore } from '@/store/auth-store';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const { user } = useAuthStore();

  return (
    <>
      {user ? <Dashboard /> : <AuthPage />}
      <Toaster />
    </>
  );
}

export default App;