import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import wishlistSlice from '../Redux/Slices/wishlistSlice';
wishlistSlice
function Header() {
    const [wishlistCount, setwishlistCount] = useState(0)
    const wishlist = useSelector(state => state.wishlistSlice.wishlist)
    useEffect(() => {
        setwishlistCount(wishlist.length)
    }, [wishlist])
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#"><i class="fa-solid fa-truck-fast"></i>E Cart</Navbar.Brand>
                    <div className='d-flex justify-content-between '>
                        <Link to={'./wishlist'}><Button className='me-2' variant="primary"><i class="fa-regular fa-heart me-2"></i>Wishlist<Badge className='ms-2 rounded ' bg="secondary " >{wishlistCount}</Badge> </Button>{' '}</Link>
                        <Link to={'./cart'}> <Button variant="primary"> <i class="fa-solid fa-cart-shopping me-2"></i>Cart<Badge className='ms-2 rounded ' bg="secondary " >10</Badge></Button>{' '}</Link>

                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
