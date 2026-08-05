import React from 'react';
import Layout from '@theme/Layout';
import { CopyButton } from '@site/src/components/CopyButton';

export default function Contact() {
  return (
    <Layout title="Contact us" description="Contact the Vajra team.">
      <main className="vajra-landing mx-auto w-full max-w-3xl px-7 py-20">
        <h1 className="mb-5 font-display text-4xl font-semibold tracking-[-0.03em] text-ink">
          Contact us
        </h1>
        <p className="mb-8 text-lg text-ink-soft">
          Questions, feedback, or want to work with us? Email either of us:
        </p>
        <p className="mb-3 flex items-center gap-3">
          <a
            className="font-mono text-accent"
            href="mailto:ishan@tvashta-labs.in"
          >
            ishan@tvashta-labs.in
          </a>
          <CopyButton
            text="ishan@tvashta-labs.in"
            label="Copy Ishan's email"
            variant="surface"
          />
        </p>
        <p className="flex items-center gap-3">
          <a
            className="font-mono text-accent"
            href="mailto:shivkr@tvashta-labs.in"
          >
            shivkr@tvashta-labs.in
          </a>
          <CopyButton
            text="shivkr@tvashta-labs.in"
            label="Copy Shiv's email"
            variant="surface"
          />
        </p>
      </main>
    </Layout>
  );
}
