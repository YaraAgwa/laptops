import React, { useState } from 'react'
import './shop.css'
import {  AiFillEye, AiOutlineClose } from 'react-icons/ai';
const Shop = ({ shop,  addtocart }) => {
    
    const [showDetail, setShowDetail] = useState(false)
    
    const [detail, setDetail] = useState([])
   
    const detailpage = (product) => {
        const detaildata = ([{ product }])
        const productdetail = detaildata[0]['product']
       
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () => {
        setShowDetail(false)
    }
    return (
        <>
            {
                showDetail ?
                    <>
                        <div className='product_detail'>
                            <button className='close_btn' onClick={closedetail}><AiOutlineClose /></button>
                            <div className='container'>
                                <div className='img_box'>
                                    <img src={detail.image} alt=''></img>
                                </div>
                                <div className='info'>
                                    <h4># {detail.cat}</h4>
                                    <h2>{detail.Name}</h2>
                                    <p>A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                                    <h3>${detail.price}</h3>
                                    <button onClick={() => addtocart(detail)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }
            <div className='shop'>
                <h2># shop</h2>
                <p>Home . shop</p>
                <div className='container'>

                    <div className='product_container'>
                        {
                            shop.map((curElm) => {
                                return (
                                    <>
                                        <div className='box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt=''></img>
                                                <div className='icon'>
                                                    <li onClick={() => detailpage(curElm)}><AiFillEye /></li>
                                                </div>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.Name}</h3>
                                                <p>$ {curElm.price}</p>
                                                <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop