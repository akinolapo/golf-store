import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface Breadcrumb {
  label: string;
  href: string;
}

interface UpperBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const UpperBanner: React.FC<UpperBannerProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="bg-gray-100 p-12">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold flex-1">{title}</h1>
        <nav>
          <ol className="flex items-center justify-center mt-2 space-x-2 text-gray-600">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <li>
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                </li>
                {index < breadcrumbs.length && (
                  <li>
                    <FaChevronRight />
                  </li>
                )}
              </React.Fragment>
            ))}
            <li className="font-medium text-red-600">{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default UpperBanner;
