import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/store.module.scss';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

import { BuyForm } from '@/components/buy-form';

const StorePage: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <BuyForm />
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`store`, `common`]),
  },
});

export default StorePage;
