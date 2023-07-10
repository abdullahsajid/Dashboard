    import React, { useRef, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import { useSelector, useDispatch } from 'react-redux';
    import { postOrder } from '../../../features/order/orderSlice';
    import { reset } from '../../../features/order/orderSlice';
    import Spinner from '../../Spinner/Spinner';

    const Form = ({ item, formFields, setFormFields, onItemSelected }) => {
    const { orders, isLoading, isSuccess, isError, message } = useSelector(state => state.order);
    const { user } = useSelector(state => state.auth);
    const prod = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
        alert(message);
        dispatch(reset());
        }
        if (isSuccess) {
        dispatch(reset());
        }
    }, [isError, isSuccess, message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = prod.current.value;
        const user_id = user.id;
        const data = {
        product,
        user: user_id
        };
        dispatch(postOrder(data));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
        <Link style={{ textDecoration: 'none' }}>
            <div className="card w-100 h-100" style={{ width: '18rem' }}>
            <img
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                src={`${item.image}`}
                className="card-img-top p-1 rounded w-100 h-100"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <input type="hidden" ref={prod} value={item._id} />
                <p className="card-text"></p>
                <button onClick={handleSubmit} type="submit" className="btn btn-dark">
                PKR {item.price}
                </button>
            </div>
            </div>
        </Link>
        </>
    );
    };

    export default Form;
