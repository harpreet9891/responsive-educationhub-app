import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const tx = useRef(0);

    const slideForward = () => {
        const totalSlides = slider.current.children.length;
        const slidesPerView = 2;

        const totalViews = Math.ceil(totalSlides / slidesPerView);
        const maxTranslate = -((totalViews - 1) * 100);

        if (tx.current > maxTranslate) {
            tx.current -= 100;
        }

        slider.current.style.transform = `translateX(${tx.current}%)`;
    };

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 100;
        }

        slider.current.style.transform = `translateX(${tx.current}%)`;
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className="slider">
                <ul ref={slider}>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Student A</h3>
                                    <span>India</span>
                                </div>
                            </div>
                            <p>The courses are well-structured and easy to follow. I was able to understand concepts clearly and apply them in projects.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Student B</h3>
                                    <span>India</span>
                                </div>
                            </div>
                            <p>The instructors explain everything in a simple way. I gained both knowledge and confidence during my learning journey.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Student C</h3>
                                    <span>India</span>
                                </div>
                            </div>
                            <p>Great learning platform with practical approach. The hands-on experience really helped me improve my skills.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Student D</h3>
                                    <span>India</span>
                                </div>
                            </div>
                            <p>I really liked the course structure and support. It helped me stay consistent and learn effectively.</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials