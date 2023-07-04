import { useEffect, useState } from 'react';
import {Form, Stack,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { sendResetMail } from '../../features/auth/authSlice';
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import Spinner from '../Spinner/ContentSpinner';
const ForgetForm = ({heading,title}) => {
    const [email, setEmail] = useState('');
    // this is a test comment
    // get the states
    const { isLoading, isError, isSuccess, message } = useSelector(state => state.auth);
    // initialize dispatch function
    const dispatch = useDispatch()
    // handle the third party
    useEffect(() => {
        if (isError) {
            toast.error(message);
            alert(message)
            setEmail('');
        } else if (isSuccess) {
            toast.success('Email Sent Successfully!');
            alert('Email sent successfully to the provided email address!')
            setEmail('');
        }
    }, [isError, isSuccess, message]);

    
    // handle the sent email
    const handleReset = (e) => {
        e.preventDefault();
        dispatch(sendResetMail({email}));
    }
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <>
            <Stack direction='vertical' className='p-4'>
                <Stack direction='vertical' className='mb-3'>
                    <div className='signup--logo py-3'>
                        <svg width="32" height="22" viewBox="0 0 34 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00183571 0.3125V7.59485C0.00183571 7.59485 -0.141502 9.88783 2.10473 11.8288L14.5469 23.6837L21.0172 23.6005L19.9794 10.8126L17.5261 7.93369L9.81536 0.3125H0.00183571Z"></path>
                            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.17969 17.7762L13.3027 3.75173L17.589 8.02192L8.17969 17.7762Z" ></path>
                            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.58203 17.2248L14.8129 5.24231L17.6211 8.05247L8.58203 17.2248Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25781 17.6914L25.1339 0.3125H33.9991V7.62657C33.9991 7.62657 33.8144 10.0645 32.5743 11.3686L21.0179 23.6875H14.5487L8.25781 17.6914Z"></path>
                        </svg>
                    </div>
                    <h5 className='heading'>{heading}</h5>
                    <p className='gray'>{title}</p>
                </Stack>
                <Form style={{ width: "100%" }}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label className='label--heading gray'>Email</Form.Label>
                        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Button type='submit' onClick={handleReset} style={{ width: "100%", backgroundColor: "#7367F0" }}>Send Reset Link</Button>
                </Form>
                <Stack direction='horizontal' className='mx-auto mt-3'>
                    <div className='ms-3 gray'><Link to='/' style={{ textDecoration: "none", color: "rgb(115,103,240)" }}> {'<'} Back to login</Link></div>
                </Stack>
            </Stack>
        </>
    )
}

export default ForgetForm
