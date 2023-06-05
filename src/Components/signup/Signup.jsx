import {Row, Col} from 'react-bootstrap';
import Banner from './Banner';
import SignUpForm from './SignUpForm';
import signUpImg from '../../images/signup.png'
const Signup = () => {
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

