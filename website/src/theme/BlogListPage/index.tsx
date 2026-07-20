import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {BlogPostProvider} from '@docusaurus/plugin-content-blog/client';
import Layout from '@theme/Layout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItem from '@theme/BlogPostItem';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {RecentPostsSidebar} from '@site/src/components/RecentPostsSidebar';
import type {Props} from '@theme/BlogListPage';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout>
      <div className="mx-auto max-w-wrap px-7 pb-20 pt-4">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
          {hasSidebar && (
            <>
              <div className="order-2 lg:order-1 lg:w-[290px] lg:flex-shrink-0">
                <RecentPostsSidebar sidebar={sidebar} />
              </div>
              <div
                className="order-3 hidden self-stretch bg-line lg:order-2 lg:mx-9 lg:block lg:w-px"
                aria-hidden="true"
              />
            </>
          )}
          <main className="order-1 min-w-0 flex-1 lg:order-3">
            <div className="flex flex-col gap-8">
              {items.map(({content: BlogPostContent}) => (
                <BlogPostProvider
                  key={BlogPostContent.metadata.permalink}
                  content={BlogPostContent}>
                  <div className="card relative p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft-lg md:p-10">
                    <BlogPostItem>
                      <BlogPostContent />
                    </BlogPostItem>
                  </div>
                </BlogPostProvider>
              ))}
            </div>
            {metadata.totalPages > 1 && (
              <div className="mt-8">
                <BlogListPaginator metadata={metadata} />
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
