import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/fights.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import { SkeletCard } from '@/skelets/skelet-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DragonsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SkeletCard />
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`dragons`, `common`]),
  },
});

export default DragonsPage;
