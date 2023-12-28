import React from 'react'
import { Button } from 'react-bootstrap'


function View() {
  return (
    <div className='mt-5 container'>
     <div className="row mt-5 align-items-center">
      <div className="col-md-4">
        <img style={{height:'400px',width:'100%'}} src="https://img.buzzfeed.com/buzzfeed-static/static/2018-05/3/15/asset/buzzfeed-prod-web-03/sub-buzz-15015-1525376911-2.jpg?downsize=900:*&output-format=auto&output-quality=auto" alt="" />
      </div>
      <div className="col-md-2">
    
      </div>
      <div className="col-md-6">
        <p>PID: sdsfgdgdjuu7</p>
        <h1>Product Title</h1>
        <h5 className='fw-folder'>$ 560</h5>
        <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Description</span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ratione recusandae aperiam, harum sit sapiente nobis atque voluptas commodi, fugit voluptates reprehenderit odit dolores fuga rem repellat blanditiis quod consectetur?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, tempora dolores incidunt quia officiis dicta. Qui fugit, ab officia iusto quo quas voluptate esse amet nemo quaerat architecto, nisi soluta.
        </p>
        <div className='d-flex justify-content-between'>
                <Button className='btn btn-light'><i className="fa-regular fa-heart text-danger "></i></Button>
                <Button className='btn btn-light'><i className="fa-solid fa-cart-shopping text-success "></i></Button>

              </div> 
      </div>
      </div> 
    </div>
  )
}

export default View