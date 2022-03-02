import React, { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSlider(props) {
    const [current, setCurrent] = useState(0)

    const product = props.product
    const photos = props.product.photos
    const length = props.product.photos.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(photos) || length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/> 
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {photos.map((photo, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <img src={`${photo}`} key={index} className='image' alt={product.productName}></img>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider;
