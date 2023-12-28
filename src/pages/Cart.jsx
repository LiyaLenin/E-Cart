import React from 'react'

function Cart() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-8">
          <h3 className='mt-5'>Cart Summary</h3>
          <table className='table shadow'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>COCO</td>
                <td><img style={{height:"100px", width:"100px"}} variant="top" src="https://img.buzzfeed.com/buzzfeed-static/static/2018-05/3/15/asset/buzzfeed-prod-web-03/sub-buzz-15015-1525376911-2.jpg?downsize=900:*&output-format=auto&output-quality=auto" alt="" /></td>
                <td>$560</td>
                <td><button className='btn'><i class="fa-solid fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="shadow border rounded mt p-4">
          <h5>Total Product: <span className='fw-bolder'>3</span></h5>
                <h3>Total Amount: <span className='fw-bolder'>$ 560</span></h3>
                <hr />
                <div className='d-grid'>
                    <button className='btn btn-success'>CHECKOUT</button>
                </div>
                
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart