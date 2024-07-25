const KEY = 'TODO_STATE'

export const createId = () => Date.now().toString()

export const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(KEY, serializedState)
    } catch (err) {
        console.error('Can\'t save to LocalStorage', err)
    }
}

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem(KEY)
        if (!serializedState) return undefined

        return JSON.parse(serializedState)
    } catch (err) {
        console.error('Can\'t load from LocalStorage', err)
        console.warn('Using mocked instead')
        return undefined
    }
}
