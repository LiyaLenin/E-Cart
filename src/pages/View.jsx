import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import Header from '../Components/Header'




function View() {
  const { id } = useParams()
  const { loading} = useSelector((state) => state.productSlice)
  const {wishlist}=useSelector(state=>state.wishlistSlice)

  const [product, setProduct] = useState({})
  const dispatch=useDispatch()
  

  useEffect(() => { 
    const products =JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product => product.id == id))
  }, [])
  console.log(product);
  const handleWishlist=(product)=>{
    const existingProduct=wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product aleady exist!!!!")
    }else{
      dispatch(addToWishlist(product))
      
    }
  }


  return (
   <>
   <Header/>
      <div className='mt-5 container'>
        {loading ? <div className='d-flex justify-content-center mt-5'><Spinner className='me-3' animation="border" variant="dark" />Loading....</div> :
          <div className="row mt-5 align-items-center">
            <div className="col-md-4">
              <img style={{ height: '400px', width: '100%' }} src={product?.thumbnail} alt="" />
            </div>
            <div className="col-md-2">
  
            </div>
            <div className="col-md-6">
              <p>PID: {product?.id}</p>
              <h1>{product?.title}</h1>
              <h5 className='fw-folder'>{product?.price}</h5>
              <p style={{ textAlign: 'justify' }}> <span className='fw-bolder'>Description : </span>
                {product?.description}
              </p>
              <div className='d-flex justify-content-between'>
                <Button onClick={()=>handleWishlist(product)} className='btn btn-light'><i className="fa-regular fa-heart text-danger "></i></Button>
                <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i className="fa-solid fa-cart-shopping text-success "></i></Button>
  
              </div>
            </div>
          </div>}
      </div>
   </>
  )
}

export default View