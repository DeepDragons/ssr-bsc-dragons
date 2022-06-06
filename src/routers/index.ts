import { wrap } from 'svelte-spa-router/wrap';

import { routerGuard } from './guard';

import MainPage from '../pages/Main.svelte';

export default {
  '/': wrap({
    component: MainPage
  })
};
