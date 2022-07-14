import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/dragons.module.scss';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { SkeletCard } from '@/skelets/skelet-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DragonsPage: NextPage = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className={styles.container}>
      {loading ? (
        <>
          <SkeletCard />
          <SkeletCard />
          <SkeletCard />
          <SkeletCard />
        </>
      ) : (
        <>
          
        </>
      )}
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`dragons`, `common`]),
  },
});

export default DragonsPage;
