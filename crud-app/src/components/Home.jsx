import React, { useEffect, useState } from 'react'
import UserInfo from './Common/UserInfo'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'
import toast from 'react-hot-toast'

function Home() {
  let [data, setData] = useState([])

  let getData = async() =>{
    try {
      let response = await AxiosService.get(ApiRoutes.USER_MANAGE.path)
      if(response.status===200){
        setData(response.data)
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }

  useEffect(()=>{
    getData()
  },[])
  
  return <>
  <h1 className='mt-2 text-center'>User Details</h1>
  <div className='home-wrapper p-5'>
    {
      data.map((e)=>{
        return <UserInfo
          key={e.id}
          data={e}
          getData={getData}
          showActions = {false}
        />
      })
    }
  </div>
  </>
}

export default Home