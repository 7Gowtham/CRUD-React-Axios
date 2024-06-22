import React, { useEffect, useState } from 'react'
import UserInfo from './Common/UserInfo'
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes'

function Dashboard() {
    let [data, setData] = useState([])
    
    const getData = async () => {
        try {
            let response = await AxiosService.get(ApiRoutes.USER_MANAGE.path)
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (error) {
            toast.error("Internal Server Error")
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const showActions = true
    return <>
        <h1 className='text-center mt-3'>Admin Dashboard</h1>
        <div className="container mt-3">
            {
                data.map((e, i) => {
                   return <UserInfo data={e} getData={getData} showActions={showActions} key={i} />
                })
            }
        </div>
    </>
}

export default Dashboard