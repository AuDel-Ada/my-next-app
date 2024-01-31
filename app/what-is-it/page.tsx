import React from 'react';

const messPage = () => {
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
      <table className="w-5/6 text-left table-auto min-w-max">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Client-side rendering</th>
            <th>Server-side rendering</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-1 pr-4">
              ALL the components need to be bundled (which uses more memory to
              load the components)
            </td>
            <td>truc</td>
          </tr>
          <tr>
            <td>
              No SEO, as the bots don't check the content ON the web browser
            </td>
            <td>truc</td>
          </tr>
          <tr>
            <td>Less secure</td>
            <td>truc</td>
          </tr>
        </tbody>
      </table>
      <p></p>
    </div>
  );
};

export default messPage;
