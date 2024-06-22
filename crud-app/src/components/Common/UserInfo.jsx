import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import toast from 'react-hot-toast'


function UserInfo({data, getData, showActions}) {
    let navigate = useNavigate()
    
    const handleDelete = async(id) =>{
        try {
            let response = await AxiosService.delete(`${ApiRoutes.USER_MANAGE.path}/${id}`)
            if(response.status=== 200){
                toast.success("Data Deleted Successfully")
                getData()
            }
        } catch (error) {
            toast.error("Internal Server Error")
        }
    }

    return <>
        <div className="card mt-3 color" style={{ width: '19rem' }}>
            <h2 className="card-title text-center mt-3">{data.name}</h2>
            <div className="card-body">
                <p className="card-text"><strong>Username</strong>: {data.username}</p>
                <p className="card-text"><strong>Email</strong>: {data.email}</p>
                <p className="card-text"><strong>Street</strong>: {data.address.street}</p>
                <p className="card-text"><strong>City</strong>: {data.address.city}</p>
                <p className="card-text"><strong>Zipcode</strong>: {data.address.zipcode}</p>
                <p className="card-text"><strong>Latitude</strong>: {data.address.geo.lat}</p>
                <p className="card-text"><strong>Longitude</strong>: {data.address.geo.lng}</p>
                <p className="card-text"><strong>Phone</strong>: {data.phone}</p>
                {
                    showActions ? <>
                    <button className='btn btn-primary' onClick={()=>navigate(`/view/${data.id}`)}>Edit</button>&nbsp;&nbsp;
                    <button className='btn btn-danger' onClick={()=>handleDelete(data.id)}>Delete</button></>
                    :
                    ""
                }
                
            </div>
        </div>

    </>
}

export default UserInfo