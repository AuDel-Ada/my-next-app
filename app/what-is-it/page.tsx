import React from 'react';
import Table from '../components/Table';
import { ItemsProps } from '../components/Table';

import * as fs from 'fs';
import path from 'path';

const basePathToData: string = path.join(__dirname, './infosCsrSsr.json');
const data: ItemsProps[] = JSON.parse(fs.readFileSync(basePathToData, 'utf-8'));

const messPage = () => {
  const items = data;
  return (
    <div>
      <h1>What ? Why ?!</h1>
      <p>
        So this app is especially for myself.
        <br /> It is a good way to try and test, but to get off my path, for
        once, I will put all the interesting notions that I find, on this page,
        and not on Notions !
      </p>
      <h2>Client-side rendering VS Server-side rendering</h2>
      <Table
        head1="Client-side rendering"
        head2="Server-side rendering"
        items={items}
      />
    </div>
  );
};

export default messPage;
