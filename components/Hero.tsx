import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative w-full h-[33vh] bg-gradient-to-r from-black to-gray-800 flex items-center justify-center">
      {/* Make sure content is visible despite navbar overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background content (if any) */}
        <Image
          src="/banner.png"
          alt="Background"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>
    </div>
  );
}

