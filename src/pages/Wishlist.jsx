import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <div style={{ marginTop: '60px' }}>
    <Row className='mt-5 container'>
      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem' }}>
          <Link to={'/view/1'}><Card.Img  style={{height:"300px"}} variant="top" src="https://img.buzzfeed.com/buzzfeed-static/static/2018-05/3/15/asset/buzzfeed-prod-web-03/sub-buzz-15015-1525376911-2.jpg?downsize=900:*&output-format=auto&output-quality=auto" /></Link>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>

            <div className='d-flex justify-content-between'>
              <Button className='btn btn-light'><i className="fa-solid fa-heart-circle-xmark text-danger "></i></Button>
              <Button className='btn btn-light'><i className="fa-solid fa-cart-shopping text-success "></i></Button>

            </div>      </Card.Body>
        </Card>
      </Col >
    </Row>
  </div>
  )
}

export default Wishlist