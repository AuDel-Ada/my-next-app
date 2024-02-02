'use client';
import React from 'react';

export interface ItemsProps {
  id: number;
  item1: string;
  item2: string;
}
interface TableProps {
  head1: string;
  head2: string;
  items: ItemsProps[];
}
const Table = ({ head1, head2, items }: TableProps) => {
  return (
    <div>
      <table className="w-5/6 text-left table-auto min-w-max">
        <thead>
          <tr className="border-b">
            <th className="pb-2">{head1}</th>
            <th>{head2}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="pt-1 pr-4">{item.item1}</td>
              <td>{item.item2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
