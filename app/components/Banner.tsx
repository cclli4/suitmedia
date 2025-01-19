'use client';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full h-80 overflow-hidden">
      {/* Gambar Latar */}
      <Image
        src="/banner.png" 
        alt="Ideas Banner"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 -z-10"
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />

      {/* Konten Teks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Ideas</h1>
        <p className="text-lg text-white drop-shadow-sm">
          Where all our great things begin
        </p>
      </div>
    </div>
  );
};

export default Banner;
