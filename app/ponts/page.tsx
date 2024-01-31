//routing by folder, rendering the page.tsx
//rafce to begin the page easily

import React from 'react';
import ProductCard from '../components/ProductCard';
import './page.css';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos: Photo[] = await res.json();
  return (
    <div className="background">
      <h1 className={`mb-3 text-2xl font-semibold`}>Avignon Baby !</h1>

      <div className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className="flex gap-2">
          <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
          <ProductCard />
        </div>
      </div>

      <ul>
        {photos.slice(0, 5).map((photo) => (
          <li key={photo.id}>
            {photo.title}: <img src={photo.url} alt={photo.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
