import React from 'react';
import { useState } from 'react';
import './User.css'
import img1 from '../../../assets/img5.png'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

const Useradmin = () => {
  
  const users = [
    {
        name : "Praveena",
        address:'Hosur',
        phone: '9876543210',
        email : 'prv@gmail.com',
        service : 'physiotherapy',
        description : 'None',
        charges : '5000',
        timing : '06 pm to 07 pm',
        booking : 'Completed',
        duration : '10 days',
    },
    {
      name : "Vivetha",
      address:'chennai',
      phone: '92918364820',
      email : 'viv@gmail.com',
      service : 'physiotherapy',
      description : 'None',
      charges : '4500',
      timing : '06 pm to 07 pm',
      booking : 'Rejected',
      duration : '10 days',
  },
  {
    name : "qwerty",
    address:'asd',
    phone: '87547974480',
    email : 'qwerty@gmail.com',
    service : 'physiotherapy',
    description : 'None',
    charges : '10000',
    timing : '06 pm to 07 pm',
    booking : 'Pending',
    duration : '10 days',
},
{
  name : "sample",
  address:'xxx',
  phone: '9087654434',
  email : 'sample@gmail.com',
  service : 'physiotherapy',
  description : 'None',
  charges : '7000',
  timing : '06 pm to 07 pm',
  booking : 'Completed',
  duration : '10 days',
},
{
name : "user",
address:'userplace',
phone: '98127634520',
email : 'user@gmail.com',
service : 'physiotherapy',
description : 'None',
charges : '5000',
timing : '06 pm to 07 pm',
booking : 'Rejected',
duration : '10 days',
},
  ]
  const [data, setData] = useState(users)
  const [process, setProcess] = useState('');
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setProcess(selectedValue);
    
    if (selectedValue === "") {
      setData(users);
    } else {
      const filteredData = users.filter((item) => item.booking.toLowerCase().includes(selectedValue.toLowerCase()));
      setData(filteredData);
    }
    console.log(data)
    console.log(process)
  };
  
  return (
    <>
      <div className="user">
        <div className="addordel">
        <select className='filter'
        value={process}
        onChange={handleChange}
      >
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>
          <button  className='del'>Delete all users</button> 
        </div>

        <div className="product-container">
          {data.map((user, index) => (
            <div className="product-card" key={index}>
              <img src={img1} alt={user.naem} className="product-image" />
              <h3 className="product-name">Name: {user.name}</h3>
              <p className="product-price">Address: {user.address}</p>
              <p className="product-price">Phone: {user.phone}</p>
              <p className="product-price">Email: {user.email}</p>
              <p className="product-price">Service: {user.service}</p>
              <p className="product-price">Description: {user.description}</p>
              <div className="product-price">Charges: {user.charges} Rupees</div>
              <div className="product-price">Timing: {user.timing}</div>
              <div className="product-price">Duration: {user.duration}</div>
              <div className="product-price">Booking: {user.booking}</div>
              <button
                className="ask-query-button"
                style={{marginTop: '10px'}}
              >
               user delete
              </button>

              <button style={{  marginTop: '-40px', marginLeft:'50%', marginBottom:'3%' }}>
              <button className="ask-query-button">
              <Link to={"/userprofile"} >user edit </Link>
              </button>
            </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Useradmin;
