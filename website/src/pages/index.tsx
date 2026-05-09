import React from 'react';
import Layout from '@theme/Layout';
import { Hero } from '@site/src/components/Hero';
import { Installation } from '@site/src/components/Installation';
import { Benchmarks } from '@site/src/components/Benchmarks';
import { CTA } from '@site/src/components/CTA';
import { Navbar } from '@site/src/components/Navbar';
import { Footer } from '@site/src/components/Footer';

export default function Home() {
  return (
    <Layout
      title="Vajra"
      description="State-of-the-Art | Blazingly Fast | Model Streamer"
      noFooter>
      <style>{`
        .navbar { display: none !important; }
      `}</style>
      <div className="vajra-landing">
        <Navbar />
        <main className="min-h-screen pt-16">
          <Hero />
          <Installation />
          <Benchmarks />
        </main>
        <CTA />
        <Footer />
      </div>
    </Layout>
  );
}
