import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const [longtitude, setLongtitude] = React.useState([])
    const [latitude, setLatitude] = React.useState([])
    const [address, setAddress] = React.useState([])

    const store = { latitude, setLatitude, longtitude, setLongtitude, address, setAddress}

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}