import React from 'react'
import './AskedStayle.css'
import check from './../../../asetse/check.png'


export default function AskedQuestions() {
    return (
        <>
            <section className='paride'>
            <div class="section-title">Frequently Asked Questions</div>

                <div class="faq-container">

                    <div class="faq-row">
                        <div class="faq-item">
                        <div class="question"><img src={check} title='imge'></img> Is Foodera Bread really baked fresh each day?</div>
                            <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</div>
                        </div>

                        <div class="faq-item">
                       <div class="question">  <img src={check} title='imge'></img>Do you bake breads containing animal fats or products?</div>
                            <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</div>
                        </div>
                    </div>

                    <div class="faq-row">
                        <div class="faq-item">
                        <div class="question"><img src={check} title='imge'></img>Can I order your products online?</div>
                            <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</div>
                        </div>

                        <div class="faq-item">
                         <div class="question"><img src={check} title='imge'></img>When are you opening a shop near me?</div>
                            <div class="answer">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
