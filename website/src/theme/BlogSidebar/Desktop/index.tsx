import React, {memo, type ReactNode} from 'react';
import {RecentPostsSidebar} from '@site/src/components/RecentPostsSidebar';
import type {Props} from '@theme/BlogSidebar/Desktop';

function BlogSidebarDesktop({sidebar}: Props): ReactNode {
  return <RecentPostsSidebar sidebar={sidebar} />;
}

export default memo(BlogSidebarDesktop);
