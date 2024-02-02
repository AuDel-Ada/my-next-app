import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/what-is-it">Run For Your Life !</Link>
          {/* Better used <Link /> than <a />, as it is only replace the content area,
          and doesn't re-download all fonts, styles, and full JS ... 
          -> that's the client-side navigation !*/}
        </p>
        <div className="fixed bottom-0 left-0 flex h-30 w-full items-end justify-center bg-gradient-to-r from-indigo-500 backdrop-blur-2xl lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/AuDel-Ada"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Aurelie
          </a>
        </div>
      </div>

      <div className="relative flex-col place-items-center">
        <h1>My Vacation App</h1>
        <Image
          src="/dayOff-rafiki.svg"
          alt="A woman in swimming suit, leaving the office to go to the beach"
          width={540}
          height={110}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link href="/week-ends">
          <h2>
            Week-ends{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link href="/ponts">
          <h2>
            Ponts de Mai{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link href="/ete2024">
          <h2>
            Été 2024{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
