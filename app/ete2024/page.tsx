import React from 'react';
import Link from 'next/link';

const summerPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">Want to go back Home !</Link>
        </p>
      </div>
      <h1>Summer 2024 Plan</h1>
      <p>
        Rappel : les JO de Paris se déroulent du vendredi 26 juillet au dimanche
        11 août, et du 28 août au 08 septembre ...{' '}
      </p>
    </div>
  );
};

export default summerPage;
