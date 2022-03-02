export function addItem(value) {
    return {type: 'ADD_ITEM', payload: value}
}

export function removeItem(value) {
    return {type:'REMOVE_ITEM', payload: value}
}