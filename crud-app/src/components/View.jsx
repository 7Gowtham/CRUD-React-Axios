import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

function View() {
  let [name, setName] = useState("")
  let [username, setUsername] = useState("")
  let [email, setEmail] = useState("")
  let [street, setStreet] = useState("")
  let [city, setCity] = useState("")
  let [zipcode, setZipcode] = useState("")
  let [lat, setLat] = useState("")
  let [lng, setLng] = useState("")
  let [phone, setPhone] = useState("")
  let navigate = useNavigate()
  let {id} = useParams()

  let getData = async(id) =>{
    try {
      let response = await AxiosService.get(`${ApiRoutes.USER_MANAGE.path}/${id}`)
      if(response.status === 200){
        setName(response.data.name)
        setUsername(response.data.username)
        setEmail(response.data.email)
        setStreet(response.data.address.street)
        setCity(response.data.address.city)
        setZipcode(response.data.address.zipcode)
        setLat(response.data.address.geo.lat)
        setLng(response.data.address.geo.lng)
        setPhone(response.data.address.phone)
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }

  const handleSubmit = async () => {
    let address = {
      street, city, zipcode, geo: { lat, lng }
    }
    try {
      let response = await AxiosService.put(`${ApiRoutes.USER_MANAGE.path}/${id}`, { name, username, email, address, phone })
      if (response.status === 200) {
        toast.success("User Details Edited Successfully")
        console.log(response.data)
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }

  useEffect(()=>{
    if(id){
      getData(id)
    }
  },[])

  return <>
    <div className="display-grid">
      <div className="form-wrapper">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Street" name='street' value={street} onChange={(e) => setStreet(e.target.value)} />
            <Form.Control type="text" placeholder="City" name='city' value={city} onChange={(e) => setCity(e.target.value)} />
            <Form.Control type="text" placeholder="Zipcode" name='zipcode' value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            <Form.Control type="text" placeholder="Latitude" name='lat' value={lat} onChange={(e) => setLat(e.target.value)} />
            <Form.Control type="text" placeholder="Longitude" name='lng' value={lng} onChange={(e) => setLng(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>

  </>
}

export default View