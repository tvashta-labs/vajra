import React from 'react';
import Layout from '@theme/Layout';
import { Hero } from '@site/src/components/Hero';
import { Installation } from '@site/src/components/Installation';
import { Benchmarks } from '@site/src/components/Benchmarks';
import { CTA } from '@site/src/components/CTA';
import { Footer } from '@site/src/components/Footer';

export default function Home() {
  return (
    <Layout
      title="High-Performance Model Streamer"
      description="Load models faster by overlapping download, RAM staging, and CUDA transfer."
      noFooter>
      <div className="vajra-landing">
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
