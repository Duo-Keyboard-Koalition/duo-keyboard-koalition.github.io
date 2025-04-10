import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PjQ7yXSb2U4BqTmLgAhrHSc15WVDmA.png"
              alt="DKK Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-white text-sm">© 2024 Duo Keyboard Koalition</span>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/duo-keyboard-koalition" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary text-sm">GitHub</Link>
            <Link href="https://www.linkedin.com/company/pygmalion-koalition" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary text-sm">Linked In</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

