export const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  }
  catch (err) {
    return undefined
  }
}

export const saveAuthState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  }
  catch (err) {
    // ignore
  }
}

export const loadCartState = () => {
  try {
    const cartItemSaved = localStorage.getItem('cart')
    if (cartItemSaved === null) {
      return undefined
    }
    return JSON.parse(cartItemSaved)
  }
  catch (err) {
    return undefined
  }
}

export const saveCartState = (state) => {
  try {
    const cartItemSaved = JSON.stringify(state)
    localStorage.setItem('cart', cartItemSaved)
  }
  catch (err) {
    // ignore
  }
}
