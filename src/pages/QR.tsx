import { Link } from 'react-router-dom';

const LANDING_URL = 'https://duo-keyboard-koalition.github.io/';
const QR_IMAGE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(LANDING_URL)}`;

function QR(): JSX.Element {
  return (
    <section className="py-16 px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Scan to visit</h1>
        <p className="text-gray-400 mb-8">
          Point your camera at the QR code to open the landing page.
        </p>
        <div className="bg-white p-4 rounded-lg inline-block">
          <img
            src={QR_IMAGE_URL}
            alt={`QR code for ${LANDING_URL}`}
            width={256}
            height={256}
            className="w-64 h-64"
          />
        </div>
        <p className="mt-6 text-gray-500 text-sm break-all">{LANDING_URL}</p>
        <Link
          to="/"
          className="inline-block mt-8 text-primary hover:underline"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}

export default QR;
