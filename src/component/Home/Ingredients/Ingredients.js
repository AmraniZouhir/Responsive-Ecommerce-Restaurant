import React from 'react'
import ingredient from './../../../asetse/ingredients.png'
import check from './../../../asetse/check.png'
import './ingredientStayl.css'

export default function Ingredients() {
    return (
        <>
            <section className='ingredients'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                            <ol><img src={check} title='imge'></img>  Etiam sed dolor ac diam volutpat.</ol>
                            <ol><img src={check} title='imge'></img>  Erat volutpat aliquet imperdiet.</ol>
                            <ol><img src={check} title='imge'></img>  purus a odio finibus bibendum.</ol>
                            </ul>
                            <button><a href='#'>Learn More</a></button>

                        </div>
                        <div className='col-md-6'>
                            <img src={ingredient} title='imge'></img>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
