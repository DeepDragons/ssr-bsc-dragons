import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/store.module.scss';

import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BuyForm } from '@/components/buy-form';

import { CrowdSale } from 'mixins/crowd-sale';


const crowdSale = new CrowdSale();
const StorePage: NextPage = () => {
  const [loading, setLoading] = React.useState(false);

  const hanldeBuy = React.useCallback(async(num: number) => {
    setLoading(true);
    try {
      await crowdSale.getPrice();
      await crowdSale.buy(num);
    } catch {
      ///
    }
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      <BuyForm
        loading={loading}
        onBuy={hanldeBuy}
      />
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`store`, `common`]),
  },
});

export default StorePage;
