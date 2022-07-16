import type { GetServerSidePropsContext, NextPage } from 'next';

import styles from '../styles/pages/dragons.module.scss';

import { DragonObject } from '@/types';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { SkeletCard } from '@/skelets/skelet-card';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Card } from '@/components/dragon-card';

import { RARITY } from '@/config/rarity';


const list: DragonObject[] = [
  {
    gen_fight: 'string;',
    gen_image: 'string;',
    id: '1',
    rarity: 0,
    url: '/tmp/1.png',
    name: 'Fucker'
  },
  {
    gen_fight: 'string;',
    gen_image: 'string;',
    id: '2',
    rarity: 5,
    url: '/tmp/0.png'
  },
  {
    gen_fight: 'string;',
    gen_image: 'string;',
    id: '3',
    rarity: 7,
    url: '/tmp/2.png'
  }
];

const DragonsPage: NextPage = () => {
  const [loading, setLoading] = React.useState(false);

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
          {list.map((dragon) => (
            <Card dragon={dragon} key={dragon.id}>
              <div className={styles.cardcontainer}>
                <div className={styles.cardtext}>
                  #
                  {dragon.id}
                  ,
                  {` `}
                  {RARITY[dragon.rarity].name}
                  {` `}
                  free
                  {` `}
                  <span>{dragon.name ? `- ${dragon.name}` : ``}</span>
                </div>
              </div>
            </Card>
          ))}
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
