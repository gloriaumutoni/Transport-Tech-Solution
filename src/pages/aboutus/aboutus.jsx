import React from 'react';
import "./aboutus.css";
import Kigali from '../../assets/goo.jpg';
import { useRef, useEffect, useState } from 'react'
import NavBar from '../navigation/NavigationBar';
import Footer from '../../component/newfooter';
import coach3 from '../../assets/goal.jpg'
import coach1 from '../../assets/goo1.jpg'
import coach2 from '../../assets/goo2.jpg'

const Aboutus = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current - carousel.current)
    }, [])
    return (
        <>
            <div className="wholeaboutus1">
                <NavBar />
                <div className='about-all'>
                <div className='about-para'>
                    <h1>ABOUT-US</h1>
                    <p>Take journey with us cause we don’t wait more time on 
                        bus stop we book bus every where you are we don’t <br></br>
                        need to wait on bus stop this app has came to solve 
                        passenger waiting many minutes.</p>
                </div>
                <div className='about-what'>
                    <div className='about-mission'>
                        <h2>mission</h2>
                        <p>To work with citizen to <br></br>
                            deliver good service <br></br>
                            to the user of public <br></br>
                            bus in kigali</p>
                    </div>
                    <div className='about-vision'>
                        <h2>vision</h2>
                        <p>our vision is to give people <br></br>
                            nice service as well as to not <br></br>
                            let them to wait for the bus <br></br>
                            they don’t know where it is</p>
                    </div>
                    <div className='about-objective'>
                        <h2>objective</h2>
                        <p>our value is save money <br></br>
                            and time for the bus user <br></br>
                            and to keep trust.</p>
                    </div>
                </div>
                <div className='about-offer'>
                    
                <h4><a href="#">OUR ADVANTAGE</a></h4>
                    <p>We make strongest service to people who use public <br></br>
                        car, this website is here to solve the problems our have <br></br>
                        been meeting to wait for the bus for long hours, this website <br></br>
                        for the people who use public transport and I hope this website 
                        
                    </p>
                    <div className='about-serve'>
                   
                    <img src={coach1} />

                    <img src={coach2} /> 
             
                  
                    <img src={coach3} /> 
                 
                        </div>                  
                    <h1>what we offer</h1>
                    <p>                           . we book your sit every where you are in kigali <br></br>
                        . your pay your sit before and you can cancel you ticket when you <br></br>
                        find that you will be later to rich to bus stop <br></br>
                        . there is free wifi</p>
                </div>
                <div className='about-map'>
                    {/* <img src={Kigali} alt='atals' /> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31900.292484035286!2d30.05784773616678!3d-1.9378347333206631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40203f041%3A0x5f8434259d8c4393!2sKacyiru%2C%20Kigali!5e0!3m2!1sfr!2srw!4v1685865664641!5m2!1sfr!2srw"
                        width='auto'
                        height='400'
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Embedded Map"
                    ></iframe>
                </div>
                <Footer />
            </div>
            </div>
        </>
    )

};
export default Aboutus;