import { React, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import Banner from './Banner';
import SignUpForm from './SignUpForm';
import signUpImg from '../../images/signup.png'
import axios from 'axios';
import { toast } from 'react-toastify';
const Signup = () => {
    // update the count whenever user visits the login
    const updateCount = async () => {
        try{
        await axios.post('http://localhost:3001/api/visitors/track');
        } catch (error) {
        toast(error);
        }
    }
    useEffect(() => {
        updateCount();
    },[])
    return (
        <div style={{ overflow: 'hidden' }}>
            <Row style={{ height: '100vh', alignItems: 'center', overflowX: "hidden" }}>
                <Col lg={8} className="d-none d-lg-block">
                    <Banner signUpImg={signUpImg}/>
                </Col>
                <Col lg={4}>
                    <SignUpForm heading={'Adventure starts here 🚀'} title={'Make your app management easy and fun!'}/>
                </Col>
            </Row>
        </div>
    )
}

export default Signup

