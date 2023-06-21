import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss';
import { Helmet } from 'react-helmet';
const Cart = () => {

const data = [
    {
        id: 1,
        img:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title:"Top",
        isNew:true,
        oldPrice: 19,
        price: 12,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repudiandae totam harum soluta asperiores suscipit cumque tempora distinctio dolores quisquam consequuntur praesentium, quis veniam in, omnis vitae. Explicabo, aut libero.",
    },
]


  return (
    <div className='cart'>
      <Helmet>
          <title>Cart</title>
          <meta name='description' content='Your Shopping Cart'/>
          <meta name='keywords' content='Clothes, Shopping, Fashion, Style, Cart, Checkout, Payment' />
        </Helmet>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className='item' key={item.id}>
            <img src={item.img} alt="" />
            <div className="details"><h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$999</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart
