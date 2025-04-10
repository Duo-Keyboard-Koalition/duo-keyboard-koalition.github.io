'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { UserDetails} from '@/types/UserDetails';
function Header() {
  // user is of type UserDetails
  const { user } = useAuth();
  
  // Properly access nested properties from the UserDetails structure
  const userAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email;
  
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#000000]/40 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto">
          <nav className="flex justify-between py-4 px-6">
            <div className="flex items-center">
              <Link href="/" className="text-white font-bold text-xl">
                Duo Keyboard Koalition
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white hover:text-primary">Home</Link>
              <Link href="/goals" className="text-white hover:text-primary">Goals</Link>
              <Link href="/projects" className="text-white hover:text-primary">Projects</Link>
              <Link href="/events" className="text-white hover:text-primary">Events</Link>
              <Link href="/wins" className="text-white hover:text-primary">Wins</Link>
              <Link href="/about" className="text-white hover:text-primary">About</Link>
              
              {user ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="flex items-center gap-2 text-white hover:text-primary">
                    {userAvatar ? (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                          src={userAvatar} 
                          alt={userName || 'User avatar'} 
                          width={32} 
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                        {userName?.charAt(0) || 'U'}
                      </div>
                    )}
                  </Link>
                </div>
              ) : (
                <Link href="/sign-in" className="text-white hover:text-primary">Sign In</Link>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
