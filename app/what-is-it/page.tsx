import React from 'react';
import Link from 'next/link';
import Table from '../components/Table';
import { ItemsProps } from '../components/Table';

// Mocking data
import * as fs from 'fs';
import path from 'path';

const messPage = () => {
  const basePathToData: string = path.join(__dirname, './infosCsrSsr.json');
  const data: ItemsProps[] = JSON.parse(
    fs.readFileSync(basePathToData, 'utf-8')
  );

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/">Want to go back Home !</Link>
        </p>
      </div>

      <h1>What ? Why ?!</h1>
      <p>
        So this app is especially for myself.
        <br /> It is a good way to try and test, but to get off my path, for
        once, I will put all the interesting notions that I find, on this page,
        and not on Notions !
      </p>

      <div className="mb-32 text-center lg:text-left">
        <h2>Client-side rendering VS Server-side rendering</h2>
        <Table
          head1="Client-side rendering"
          head2="Server-side rendering"
          items={data}
        />
      </div>
    </div>
  );
};

export default messPage;
