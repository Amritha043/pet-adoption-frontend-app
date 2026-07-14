import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'



const ViewPet = () => {
     const [data,changeData]=useState([])
    const fetchData =()=>{
        axios.get("http://localhost:3003/view-adoption").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>
     <NavigationBar/>
      <div className="container py-5">

        <h2 className="text page-title mb-5">
          Pet Boarding Bookings
        </h2>

        <div className="row g-4">

          {data.map((value, index) => (

            <div className="col-md-6 col-lg-4" key={index}>

              <div className="team-box">

                <div className="team-top">
                  <h5>{value.pet_name}</h5>
                  <span>Booking ID : {value.booking_id}</span>
                </div>

                <div className="team-info">

                  <p><strong>Pet Type :</strong> {value.pet_type}</p>

                  <p><strong>Breed :</strong> {value.breed}</p>

                  <p><strong>Age :</strong> {value.age}</p>

                  <p><strong>Weight :</strong> {value.weight_kg} kg</p>

                  <p><strong>Vaccination Status :</strong> {value.vaccination_status}</p>

                  <p><strong>Owner Name :</strong> {value.owner_name}</p>

                  <p><strong>Owner Email :</strong> {value.owner_email}</p>

                  <p><strong>Owner Phone :</strong> {value.owner_phone}</p>

                  <p><strong>Check-in Date :</strong> {value.check_in_date}</p>

                  <p><strong>Check-out Date :</strong> {value.check_out_date}</p>

                  <p><strong>Kennel Number :</strong> {value.kennel_number}</p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default ViewPet