'use client';

import Glass from '@src/components/Glass';
import AppLayout from '@src/layouts/AppLayout';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  const clickHandler = () => {
    router.push('/');
  };
  return (
    <AppLayout className="flex h-screen items-center justify-center">
      <Glass className="max-w-md rounded-lg border-2 p-8 text-[#fff] shadow-2xl">
        <div>
          <h1 className="text-center text-3xl font-bold">Edge DoH</h1>
          <p className="mt-2 text-center text-sm text-gray-300">
            Secure and Fast DNS over HTTPS (DoH)
          </p>
        </div>
        <div className="mt-6 border-t border-gray-300 pt-4">
          <div>
            <p className="text-center text-sm text-gray-300">Not Found</p>
          </div>
          <button
            onClick={clickHandler}
            className="glass mt-3 w-full rounded-full p-2 text-center"
          >
            Return to Home
          </button>
        </div>
      </Glass>
    </AppLayout>
  );
}

export default NotFound;
