//routing by folder, rendering the page.tsx
//rafce to begin the page easily

import React from 'react';
import ProductCard from '../components/ProductCard';

const UsersPage = () => {
  return (
    <div>
      <h2 className={`mb-3 text-2xl font-semibold`}>Hello You !</h2>
      <div className="flex flex-row gap-2">
        <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
        <ProductCard />
      </div>
    </div>
  );
};

export default UsersPage;
