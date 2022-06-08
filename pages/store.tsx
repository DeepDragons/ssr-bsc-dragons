import type { NextPage } from 'next';

import styles from '../styles/pages/store.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import { BuyForm } from '@/components/buy-form';

const StorePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <BuyForm />
    </div>
  )
};

export default StorePage;
