//routing by folder, rendering the page.tsx
//rafce to begin the page easily

import React from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos: Photo[] = await res.json();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">Want to go back Home !</Link>
        </p>
      </div>

      <h1>Avignon Baby !</h1>

      <div className="grid mt-10 lg:grid-cols-4 bg-yellow-200">
        {photos.slice(0, 5).map((photo) => (
          <ul key={photo.id}>
            <ProductCard title={photo.title} url={photo.url} />{' '}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
