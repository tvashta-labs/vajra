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
      title="High-Performance Model Streamer"
      description="Load models faster by overlapping download, RAM staging, and CUDA transfer."
      noFooter>
      <style>{`
        .navbar { display: none !important; }
      `}</style>
      <div className="vajra-landing">
        <Navbar />
        <main>
          <Hero />
          <Installation />
          <Benchmarks />
          <CTA />
        </main>
        <Footer />
      </div>
    </Layout>
  );
}
