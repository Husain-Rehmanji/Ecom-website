import React from 'react'
import Card from "../Card/Card"
import "./List.scss"

const List = () => {

    const data =[
        {
            id:1,
            img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
            img2: "https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Long Sleeve Graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price:12,
        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price:12,
        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Hat",
            isNew: true,
            oldPrice: 19,
            price:12,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400",
            title: "Skirt",
            isNew: true,
            oldPrice: 19,
            price:12,
        },
    ] 

  return (
    <div className='list'>{data?.map(item => (
        <Card item={item} key={item.id} />
    ))}
      
    </div>
  )
}

export default List
