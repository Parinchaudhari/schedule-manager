'use client'
import axios from 'axios'
import React,{createContext,useContext,useEffect,useState} from 'react'

const AppContext=createContext()

export  function AppContextProvider({children}) {
    let [isLoading,setisLoading]=useState(false)
    let [LoggedIn,setIsLoggedIn]=useState(false)
    let [fullName,setfullName]=useState(false)
    const loginCheck=async()=>{
      try {
        setisLoading(true)
        let response=await axios.post("/api/user/checklogin")
        console.log(response)
        setIsLoggedIn(response.data.checkLogin)
        setfullName(response.data.name)
        
      } catch (error) {
        console.log("error occured in forntend of the appcontext",error)
      }
      finally{
        setisLoading(false)
      }
    }
    useEffect(()=>{
      loginCheck()
    },[])
  return (
    <AppContext.Provider value={{isLoading,setisLoading,setIsLoggedIn,LoggedIn,setfullName,fullName}}>
        {children}
    </AppContext.Provider>
  )
}
export function useAppContext(){
    return useContext(AppContext)
}