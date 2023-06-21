import React, { useState } from 'react'
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Helmet } from 'react-helmet';

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className='product'>
      <Helmet>
          <title>Product Description</title>
          <meta name='description' content='Product Description'/>
          <meta name='keywords' content='Clothes, Shopping, Fashion, Style, Product, Description, shirt, T-shirt, top, skirt, jeans, shoes, bags' />
        </Helmet>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$99</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laudantium et ducimus quis quaerat aliquid hic consequuntur explicabo, facilis fugit error, labore, non repellat dignissimos cum assumenda veniam exercitationem delectus?</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev=>prev===1 ?1:prev-1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tag: T-shirt, Women, Top</span>
        </div>
        <hr/>
        <div className="info">
          <span>Description</span>
          <hr/>
          <span>Additional Information</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product
