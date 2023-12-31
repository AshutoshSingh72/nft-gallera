export const useIcon = () => {
  const getTokenIconBySymbol = (token: string) => {
    switch (token.toLowerCase()) {
      case 'bsx':
        return '/token/bsx.svg'
      case 'dot':
        return '/token/dot.svg'
      case 'ksm':
        return '/token/ksm.svg'
      case 'usdt':
        return '/token/usdt.svg'
      default:
        return '/token/ksm.svg'
    }
  }

  return { getTokenIconBySymbol }
}
