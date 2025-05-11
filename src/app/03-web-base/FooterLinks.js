import React from 'react';
import Link from 'next/link';

import { getNavLinks } from '@/helpers/web-base-helpers';

async function FooterLinks() {
  let navLinks = await getNavLinks();

  // Only show the first 4 links in the header.
  navLinks = navLinks.slice(0, 4);

  return (
    <>
      {navLinks.map(({ slug, label, href }) => (
        <li key={slug}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </>
  );
}

export default FooterLinks;
