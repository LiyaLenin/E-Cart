import React from 'react'
import { Col, Row, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/Slices/wishlistSlice'
import Header from '../Components/Header'


function Wishlist() {
  const dispatch=useDispatch()
  const wishlist=useSelector((state)=>state.wishlistSlice.wishlist)
const handleCart=(product)=>{
  dispatch(removeFromWishlist(product.id))
  dispatch(addToCart(product))
}
  return (
  <>
  <Header/>
      <div style={{ marginTop: '60px' }}>
      <Row style={{marginLeft:'30px'}} className='mt-5 container-fluid '>
        {wishlist?.length>0?wishlist?.map(product=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem' }}>
            <Link to={'/view/1'}><Card.Img  style={{height:"200px"}} variant="top" src= {product?.thumbnail}/></Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
  
              <div className='d-flex justify-content-between'>
                <Button  onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light'><i className="fa-solid fa-heart-circle-xmark text-danger "></i></Button>
                <Button onClick={()=>handleCart(product)}  className='btn btn-light'><i className="fa-solid fa-cart-shopping text-success "></i></Button>
  
              </div>      </Card.Body>
          </Card>
        </Col >))
        :<div className='text-center mt-5'>
          <img width={'50%'} height={'400px'}src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt="" />
          <h1>your wishlist is empty</h1>
        </div> }
      </Row>
    </div>
  </>
  )
}


export default Wishlist