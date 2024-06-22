import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AxiosService from '../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function Create() {
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

  const handleSubmit = async () => {
    if (!name || !username || !email || !street || !city || !zipcode || !lat || !lng || !phone) {
      toast.error('Please fill in all fields');
      return;
    }
    let address = {
      street, city, zipcode, geo: { lat, lng }
    }
    try {
      let response = await AxiosService.post(ApiRoutes.USER_MANAGE.path, { name, username, email, address, phone })
      if (response.status === 201) {
        toast.success("User Details created Successfully")
        console.log(response.data)
        navigate('/dashboard')
      }
    } catch (error) {
      toast.error("Internal Server Error")
    }
  }

  return <>
    <h4 className='p-2 mt-3'>Please fill the user details</h4>
    <div className="display-grid">
      <div className="form-wrapper">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name" name={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" name={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Street" name='street' onChange={(e) => setStreet(e.target.value)} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="City" name='city' onChange={(e) => setCity(e.target.value)} />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col>
                <Form.Control type="text" placeholder="Zipcode" name='zipcode' onChange={(e) => setZipcode(e.target.value)} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Latitude" name='lat' onChange={(e) => setLat(e.target.value)} />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Longitude" name='lng' onChange={(e) => setLng(e.target.value)} />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone" name={phone} onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>

  </>
}

export default Create