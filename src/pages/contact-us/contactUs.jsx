import '../contact-us/contactUs.css';
import { BsFacebook, BsTwitter, BsInstagram, BsTelephone } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import { FiMail } from "react-icons/fi"
import GoogleMapsLink from '../contact-us/GoogleMap';
import Navigation from '../Navigation/Navigation';


let Contact = () => {

    return (
        
        <div className='container'>
             <Navigation />
        <div className="contactUs">
            <div className="title">
                <h1>Get in Touch</h1>
            </div>
            <div className='box'>
                {/* form of contact */}
                <div className='contact form'>
                    <h2>Send a Message</h2>
                    <form>
                        <div className='formBox'>
                            <div className='row50'>
                                <div className='inputBox'>
                                    <span>First Name</span>
                                    <input type='text' placeholder='John' required></input>
                                </div>
                                <div className='inputBox'>
                                    <span>Last Name</span>
                                    <input type='text' placeholder='Doe' required></input>
                                </div>
                            </div>

                            <div className='row50'>
                                <div className='inputBox'>
                                    <span>Email</span>
                                    <input type='email' placeholder='Johndoe@example.com' required></input>
                                </div>
                                <div className='inputBox'>
                                    <span>Mobile number</span>
                                    <input type='text' placeholder='+250 780 000 000' required></input>
                                </div>
                            </div>
                            <div className='row100'>
                                <div className='inputBox'>
                                    <span>Message</span>
                                    <textarea placeholder='write your message here......'></textarea>
                                </div>
                            </div>

                            <div className='row100'>
                                <div className='inputBox'>
                                    <input type='submit' value="Send" id='submit'></input>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* information about how to reach to our company for ex: through twitter*/}
                <div className='contact info'>
                    <h3>Contact information</h3>
                    <div className='infoBox'>
                        <div>
                            <span></span>
                            <ImLocation id='icons' /> <p>Kacyiru Sector, Kigali City <br />Rwanda</p>
                        </div>
                        <div>
                            <span></span>
                            <FiMail id='icons' /> <a href='malito:teckcode@gmail.com'>teckcode@gmail.com</a>
                        </div>

                        <div>
                            <span></span>
                            <BsTelephone id='icons' /> <a href='tel: +250 780 000 000'>+250 780 000 000</a>
                        </div>

                        {/* social media handles */}
                        <ul className='sci'>
                            <li><a href="www.facebook.com"><BsFacebook /></a></li>
                            <li><a href="www.twitter.com"><BsTwitter /></a></li>
                            <li><a href="www.instagram.com"><BsInstagram /></a></li>
                        </ul>
                    </div>

                     

                </div>
                {/* Location of our company on map  */}
                <div className='contact map'>
                 <GoogleMapsLink />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;