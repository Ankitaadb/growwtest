export const getStateValues = (state, moduleName) =>  state[moduleName]

export const getImages = (state) => {
    const home = getStateValues(state, 'home')
    return home.images
}

export const getAuthCode = (state) => {
    const home = getStateValues(state, 'home')
    return home.authCode
}