'use client'
import React,{createContext,useContext,useState} from 'react'

const AppContext=createContext()

export  function AppContextProvider({children}) {
    let [isLoading,setisLoading]=useState(false)
  return (
    <AppContext.Provider value={{isLoading,setisLoading}}>
        {children}
    </AppContext.Provider>
  )
}
export function useAppContext(){
    return useContext(AppContext)
}