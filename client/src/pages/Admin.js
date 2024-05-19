import {React,useEffect} from 'react'
import {Login} from '../components/adminpage/Login'

export const Admin = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <>
        <Login />
    </>
  )
}

export default Admin ;

