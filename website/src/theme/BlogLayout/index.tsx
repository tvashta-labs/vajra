import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type {Props} from '@theme/BlogLayout';

/**
 * Full-width blog shell: instead of Infima's centered `.container` + `.row`,
 * a grid pins "Recent posts" to the left edge (minimal margin) and the table
 * of contents to the right, giving the article the wide center column.
 */
export default function BlogLayout(props: Props): ReactNode {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div
        className={clsx('blog-shell', {
          'blog-shell--with-sidebar': hasSidebar,
          'blog-shell--with-toc': !!toc,
        })}>
        {hasSidebar && (
          <div className="blog-shell__rail">
            <BlogSidebar sidebar={sidebar} />
          </div>
        )}
        <main className="blog-shell__main">{children}</main>
        {toc && <div className="blog-shell__toc">{toc}</div>}
      </div>
    </Layout>
  );
}
