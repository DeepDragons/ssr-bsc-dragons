import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/store.module.scss';

import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

import { BuyForm } from '@/components/buy-form';

import { CrowdSale } from 'mixins/crowd-sale';


const crowdSale = new CrowdSale();
const StorePage: NextPage = (props) => {
  const hanldeBuy = React.useCallback(async(num: number) => {
    await crowdSale.getPrice();
    crowdSale.buy(num);
  }, []);

  return (
    <div className={styles.container}>
      <BuyForm  onBuy={hanldeBuy}/>
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`store`, `common`]),
  },
});

export default StorePage;
