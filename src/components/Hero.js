import React from 'react';

function Hero() {
    return (
        // This negative margin technique breaks out of container in all directions
        <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 xl:-mx-24 2xl:-mx-32 -mt-12 mb-12">
            <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-wO6vZ9seXn8CWyqwZ4kV3djPxCS4UJ.png"
                alt="Duo Keyboard Koalition Banner"
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover"
            />
        </div>
    );
}

export default Hero;