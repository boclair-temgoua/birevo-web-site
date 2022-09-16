import React from 'react';
import Head from 'next/head';

export type LayoutProps = {
  title: string;
  desc: string;
  hasClass: string;
  classOpt: string;
  children: JSX.Element | any,
}

const Layout = ({ children, title, desc, hasClass, classOpt }: LayoutProps) => {
  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : null} ${classOpt}`}>
      <Head>
        <title>
          {title
            ? `${process.env.NEXT_PUBLIC_NAME} | ${title}`
            : `${process.env.NEXT_PUBLIC_NAME} - Create and manage coupons or vouchers from a single platform`}
        </title>
        {desc && <meta name="description" content={desc} />}
        <link rel="icon" href="/favicon.png" />
      </Head>

      {children}
    </div>
  );
};

export default Layout;
