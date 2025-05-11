import React from 'react';
import Link from 'next/link';

import HeaderLinks from './HeaderLinks';

async function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          <React.Suspense>
            <HeaderLinks />
          </React.Suspense>
        </ol>
      </nav>
    </header>
  );
}

export default SiteHeader;
