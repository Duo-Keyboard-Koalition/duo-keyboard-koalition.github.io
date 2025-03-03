import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCode({ value = "https://discord.gg/6GaWZAawUc", title = "Scan Our QR Code", description = "Scan this code to join our Discord community" }) {
  return (
    <section className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 mt-6 text-white">{title}</h2>
      <div className="bg-white p-8 rounded-lg inline-block">
        <QRCodeSVG 
          value={value}
          size={256}
          level="H"
        />
      </div>
      <p className="mt-4 text-gray-400">
        {description}
      </p>
    </section>
  );
}

export default QRCode;
