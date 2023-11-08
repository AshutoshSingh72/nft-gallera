export const useIcon = () => {
  const getTokenIconBySymbol = (token: string) => {
    switch (token.toLowerCase()) {
      case 'bsx':
        return '/token/bsx.svg'
      case 'dot':
        return '/token/dot.svg'
      case 'ksm':
        return '/token/ksm.svg'
      case 'ahp':
        return '/token/polkadot_asset_hub.svg'
      case 'ahk':
        return '/token/kusama_asset_hub.svg'
      default:
        return '/token/ksm.svg'
    }
  }

  return { getTokenIconBySymbol }
}
