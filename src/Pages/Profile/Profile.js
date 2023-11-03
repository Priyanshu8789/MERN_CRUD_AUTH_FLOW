import React from 'react';
import "./profile.css";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';

const Profile = () => {
  return (
   <>
   <div className='container'>
      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
          <Card.Body>
            <Row>
              <div className='col'>
                    <div className='card-profile-stats d-flex justify-content-center'>
                    <img src='/man.png' alt=''/>
                    </div>
              </div>
            </Row>
            <div className='text-center'>
              <h3>Priyanshu Pandey</h3>
              <h4><i class="fa-solid fa-envelope email"></i>&nbsp;:- <span>priyanshupandeyppp@gmail.com</span></h4>
              <h5><i class="fa-solid fa-mobile"></i>&nbsp;:- <span>7007473942</span></h5>
              <h4><i class="fa-solid fa-person"></i>&nbsp;:- <span>Male</span></h4>
              <h4><i class="fa-solid fa-location-pin location"></i>&nbsp;:- <span>Dehradun</span></h4>
              <h4>Status&nbsp;:- <span>Active</span></h4>
              <h5><i class="fa-solid fa-calendar-days calender"></i>&nbsp;Date Created&nbsp;:- <span>22-02-2000</span></h5>
              <h5><i class="fa-solid fa-calendar-days calender"></i>&nbsp;Date Updated&nbsp;:- <span>02-11-2023</span></h5>
            </div>
          </Card.Body>
      </Card>
   </div>
   </>
  )
}

export default Profile