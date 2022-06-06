import { wrap } from 'svelte-spa-router/wrap';

import { routerGuard } from './guard';

import MainPage from '../pages/Main.svelte';
import DragonPage from '../pages/Dragon.svelte';
import FlightsPlacePage from '../pages/FlightsPlace.svelte';
import StorePage from '../pages/Store.svelte';

export default {
  '/': wrap({
    component: MainPage
  }),
  '/dragon/:id': wrap({
    component: DragonPage
  }),
  '/fights': wrap({
    component: FlightsPlacePage
  }),
  '/store': wrap({
    component: StorePage
  })
};
