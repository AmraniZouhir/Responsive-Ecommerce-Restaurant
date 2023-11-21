import React from 'react'
import './paralexStayle.css'
import vidio from './../../../asetse/vidio.png'


export default function Paralex() {
    return (
        <>
            <section className='paralex'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-12 col-md-12 '>
                            <h2>When a man's stomach is full it makes no<br/> difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <img src={vidio} title='imge' className='vidio'></img> <a href='#'>Watch Our Story</a>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
