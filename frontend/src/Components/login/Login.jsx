import {Row, Col} from 'react-bootstrap';
import Banner from './Banner'
import loginImg from '../../images/login.png'
import LoginForm from './LoginForm';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const Login = () => {
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
                    <Banner loginUpImg={loginImg}/>
                </Col>
                <Col lg={4}>
                    <LoginForm heading={'Welcome to Vuexy! 👋🏻'} title={'Please sign-in to your account and start the adventure'}/>
                </Col>
            </Row>
    </div>
  )
}

export default Login
