import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/fights.module.scss';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const FightsPage: NextPage = () => {
  return (
    <div className={styles.container}>
    </div>
  )
};

export const getStaticProps = async (props: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(props.locale || `en`, [`fights`, `common`]),
  },
});

export default FightsPage;
