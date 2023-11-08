import { defineStore } from 'pinia'
import { getPrice } from '@/utils/coingecko'

interface State {
  fiatPrice: {
    kusama: {
      usd: string | number | null
    }
    basilisk: {
      usd: string | number | null
    }
    polkadot: {
      usd: string | number | null
    }
  }
}

export const useFiatStore = defineStore('fiat', {
  state: (): State => ({
    fiatPrice: {
      kusama: {
        usd: null,
      },
      basilisk: {
        usd: null,
      },
      polkadot: {
        usd: null,
      },
      polkadot_Asset_hub: {
        usd: null,
      },
      kusama_Asset_hub: {
        usd: null,
      },
    },
  }),
  getters: {
    getCurrentKSMValue: (state) => state.fiatPrice.kusama.usd,
    getCurrentBSXValue: (state) => state.fiatPrice.basilisk.usd,
    getCurrentDOTValue: (state) => state.fiatPrice.polkadot.usd,
    getCurrentAHPValue: (state) => state.fiatPrice.polkadot.usd,
    getCurrentAHKValue: (state) => state.fiatPrice.kusama.usd,
    getCurrentTokenValue: (state) => (token: string) => {
      switch (token) {
        case 'KSM':
          return state.fiatPrice.kusama.usd
        case 'BSX':
          return state.fiatPrice.basilisk.usd
        case 'DOT':
          return state.fiatPrice.polkadot.usd
        case 'AHP':
          return state.fiatPrice.polkadot.usd
        case 'AHK':
          return state.fiatPrice.kusama.usd
        default:
          return 0
      }
    },
  },
  actions: {
    async fetchFiatPrice() {
      const ksmPrice = await getPrice('kusama')
      this.fiatPrice = Object.assign({}, this.fiatPrice, ksmPrice)
      const bsxPrice = await getPrice('basilisk')
      this.fiatPrice = Object.assign({}, this.fiatPrice, bsxPrice)
      const dotPrice = await getPrice('polkadot')
      this.fiatPrice = Object.assign({}, this.fiatPrice, dotPrice)
      const ahpPrice = await getPrice('polkadot')
      this.fiatPrice = Object.assign({}, this.fiatPrice, dotPrice)
      const ahkPrice = await getPrice('kusama')
      this.fiatPrice = Object.assign({}, this.fiatPrice, ksmPrice)
    },
    setFiatPrice(payload) {
      this.fiatPrice = Object.assign({}, this.fiatPrice, payload)
    },
  },
})
