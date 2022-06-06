import { get } from 'svelte/store';
import { push } from 'svelte-spa-router';


export const routerGuard = (e: { location: string; }) => {
  return true;
}
