import React from 'react'
import './SubscribeStayle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Subscribe() {
    return (
        <section className='subscribe'>
            <div className='container'>
                <div className='row '>
                    <div className='col-lg-12 col-md-12 '>
                        <h2>Hurry up! Subscribe our newsletter<br /> and get 25% Off</h2>
                        <p>Limited time offer for this month. No credit card required.</p>







                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email Address here"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <button>Subscribe</button>

                        </InputGroup>




                    </div>
                </div>
            </div>

        </section>
    )
}
