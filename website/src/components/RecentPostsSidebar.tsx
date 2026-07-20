import React, {type ComponentType, type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import BlogSidebarContent from '@theme/BlogSidebar/Content';
import type {BlogSidebar} from '@docusaurus/plugin-content-blog';

const SidebarList: ComponentType<{items: BlogSidebar['items']}> = ({items}) => (
  <BlogSidebarItemList
    items={items}
    ulClassName="recent-posts__list clean-list"
    liClassName="recent-posts__item"
    linkClassName="recent-posts__link"
    linkActiveClassName="recent-posts__link--active"
  />
);

/**
 * The blog "Recent posts" sidebar, rendered as a card. Shared between the blog
 * list page and the individual post page (via the swizzled BlogSidebar/Desktop)
 * so both surfaces stay visually identical.
 */
export function RecentPostsSidebar({
  sidebar,
}: {
  sidebar: BlogSidebar;
}): ReactNode {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  return (
    <nav
      className="recent-posts card sticky top-[112px] p-6"
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar',
      })}>
      <div className="recent-posts__title">{sidebar.title}</div>
      <BlogSidebarContent
        items={items}
        ListComponent={SidebarList}
        yearGroupHeadingClassName="recent-posts__year"
      />
    </nav>
  );
}
