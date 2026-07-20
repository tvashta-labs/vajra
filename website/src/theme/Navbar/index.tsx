import React, { type ReactNode } from 'react';
import { Navbar as LandingNavbar } from '@site/src/components/Navbar';

// Replace the default Docusaurus navbar with the landing-page pill navbar
// on every page (home, docs, blog).
export default function Navbar(): ReactNode {
  return <LandingNavbar />;
}
