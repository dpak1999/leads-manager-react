/** @format */

import { createStore } from 'fluxible-js';
import { createFluxibleHook } from 'react-fluxible';

const globalStore = createStore({
  initialStore: {
    authUser: null,
  },

  persist: {
    syncStorage: window.localStorage,
    restore({ authUser }) {
      return { authUser };
    },
  },
});

export const useGlobalStore = createFluxibleHook(globalStore);
