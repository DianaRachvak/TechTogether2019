import React from 'react';
import { MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Admin= () => {
  return (

    <MDBCol>
    <p>Best Matches Today </p>
      <MDBCard style={{ width: "22rem"}}>

        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn floating social="tw">
            <MDBIcon fab icon="twitter" className="pr-1" />
          </MDBBtn>
        </MDBCardBody>

        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn floating social="tw">
            <MDBIcon fab icon="twitter" className="pr-1" />
          </MDBBtn>
        </MDBCardBody>

        <MDBCardImage className="img-fluid" src="" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn floating social="tw">
            <MDBIcon fab icon="twitter" className="pr-1" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

  )
}

export default Admin;
