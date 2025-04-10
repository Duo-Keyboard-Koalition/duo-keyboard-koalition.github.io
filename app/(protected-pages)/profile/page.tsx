'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProtectedContextProvider } from '@/context/ProtectedContext';
import { Hero } from "@/components/Hero";
export default function ProfilePage() {
  return (
    <ProtectedContextProvider>
      <ProfileContent />
    </ProtectedContextProvider>
  );
}

function ProfileContent() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [showJson, setShowJson] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
       <Hero />
	  <div className="w-full overflow-x-hidden flex-grow container mx-auto px-4 py-8">
        <section className="px-4 mb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
            <p className="text-gray-400 text-lg mb-8">
              Manage your account information and preferences.
            </p>
          
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Account Information</h2>
              <div className="space-y-3 text-gray-400">
                <p><span className="font-medium text-white">Email:</span> {user?.email}</p>
                <p><span className="font-medium text-white">User ID:</span> {user?.id}</p>
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowJson(!showJson)}
                >
                  {showJson ? 'Hide' : 'Show'} User Data
                </Button>
                
                {showJson && (
                  <div className="mt-4 bg-gray-950 p-4 rounded-md overflow-auto max-h-96">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">
                      {JSON.stringify(user, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Link href="/skills" passHref >
                  <Button asChild variant="outline" size="default">
                    <a>View Skills</a>
                  </Button>
                </Link>
                <Link href="/" passHref >
                  <Button asChild variant="secondary" size="default">
                    <a>Return to Home</a>
                  </Button>
                </Link>
                <Button 
                  variant="destructive"
                  size="default"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
