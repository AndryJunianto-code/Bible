import React from 'react'

const ViewportContext = React.createContext({});

export const ViewportProvider = ({children}) => {
    const [width,setWidth] = React.useState(window.innerWidth)

    const handleWindowResize = () => setWidth(window.innerWidth)
    React.useEffect(()=> {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize',handleWindowResize)
        }
    },[])
    return (
        <ViewportContext.Provider value={{width}}>
            {children}
        </ViewportContext.Provider>
    )
}

export const useViewportContext = () => {
    const {width} = React.useContext(ViewportContext)
    return {width}
}