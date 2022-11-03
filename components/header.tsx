import Link from 'next/link';
import { CalendarIcon } from '@heroicons/react/solid';

export type HeaderType = {
  selectedIndex: number;
};

export default function Header(props: HeaderType) {
  const UP = 'flex px-3 py-2 hover:text-white';
  const SELECTED = 'flex px-3 py-2 bg-gray-700 text-white rounded-md';

  const { selectedIndex } = props;

  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className={selectedIndex === 0 ? SELECTED : UP}>
                <svg className="mt-1" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 1.777C0 .796.796 0 1.777 0h12.446C15.204 0 16 .796 16 1.777v12.446c0 .981-.796 1.777-1.777 1.777H1.777A1.778 1.778 0 0 1 0 14.223V1.777z" fill="#10B1DF" />
                  </g>
                </svg>
                <div className="ml-1">P4 Submit Log</div>
              </a>
            </Link>

            <Link href="/jira">
              <a className={selectedIndex === 1 ? SELECTED : UP}>
                <svg className="mt-1" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 1.777C0 .796.796 0 1.777 0h12.446C15.204 0 16 .796 16 1.777v12.446c0 .981-.796 1.777-1.777 1.777H1.777A1.778 1.778 0 0 1 0 14.223V1.777z" fill="#FF5630" />
                    <circle fill="#FFF" cx="8" cy="8" r="4" />
                  </g>
                </svg>
                <div className="ml-1">Jira Bug Comment Log</div>
              </a>
            </Link>
          </nav>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <div className="mt-2 ml-2 flex items-center text-sm text-gray-500">
              <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              update : 2022-11-03
            </div>
          </span>
        </div>
      </header>
    </>
  );
}
