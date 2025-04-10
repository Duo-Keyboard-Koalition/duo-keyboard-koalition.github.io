'use client';

import React from 'react';
import Link from 'next/link';
import { useQRCode } from 'next-qrcode';

const discordInvite = "https://discord.gg/6GaWZAawUc";
function QRCodeComponent() {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={discordInvite}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFA500FF',
        },
      }}
    />
  );
}

export default QRCodeComponent;
