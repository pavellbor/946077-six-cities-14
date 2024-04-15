import { ReactNode } from 'react';
import cn from 'classnames';

import PageFooter from '../../components/page-footer/page-footer';
import PageHeader from '../../components/page-header/page-header';

type PageLayoutProps = {
  rootClasses?: string;
  mainClasses?: string;
  hasFooter?: boolean;
  children: ReactNode;
};

function PageLayout({
  rootClasses,
  mainClasses,
  hasFooter,
  children,
}: PageLayoutProps): JSX.Element {
  return (
    <div className={cn('page', rootClasses)}>
      <PageHeader />
      <main className={cn('page__main', mainClasses)}>{children}</main>
      {hasFooter && <PageFooter />}
    </div>
  );
}

export default PageLayout;
