import React from 'react'
import { Data } from '../../Data'
import './BlogsStayle.css'


export default function Blogs() {
    const dataitems = Data.map((items) => {
        return (
            <div className='col-md-4'>
                <div className='box'>
                    <img src={items.image} title='image' />
                    <h4>{items.titele}</h4>
                    <span>{items.time}</span>
                    <h6>{items.price} <h5 className='old-price'>12.50$</h5></h6>
                   
                    <button>order now</button>

                </div>
            </div>
        )
    })



    return (
        <>
            <section className='blogs'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-12 col-md-12 '>
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

                        </div>

                    </div>
                    <div className='row'>
                        {dataitems}
                    </div>
                </div>

            </section>
        </>
    )
}
