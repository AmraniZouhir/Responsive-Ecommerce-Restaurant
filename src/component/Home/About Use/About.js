import React from 'react'
import aboutimg from './../../../asetse/salade.png'
import './AboutStayle.css'

export default function About() {
    return (
        <>
            <section className='paride'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6'>
                            <img src={aboutimg} title='image'></img>
                        </div>
                        <div className='col-md-6'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                            </p>
                            <button><a href='#'>Learn More</a></button>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
