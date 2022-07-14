import type { StateStore } from '@/types';

import { Store } from 'react-stores';

const init: StateStore = {
  price: '0'
};
export const $state = new Store<StateStore>(init);
