import Header from './Header'
import { useMemo,useState,useEffect } from 'react';
import { MaterialReactTable,Cell } from 'material-react-table'
import View from '../View';
import { getOrders } from '../../../features/order/orderSlice';
import { getProducts } from '../../../features/products/productSlice';
import { getAllUsers } from '../../../features/auth/authSlice';

import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import { reset } from '../../../features/order/orderSlice';
const data = [
  {
    _id:1,
    product:"Hp laptop",
    price:"150000",
    status:"Paid",
    user:"Hamza",
    action:<View/>
  }
]
const Ordertable = () => {
  // const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  const {orders,isLoading,isError,isSuccess,message} = useSelector(state=>state.order)
  const {products} = useSelector(state=>state.product)
  const {allUsers} = useSelector(state=>state.auth)
  const dispatch = useDispatch();
  useEffect(() => {
    if(isError){
      alert(message)
    }
    dispatch(getOrders())
    dispatch(getProducts())
<<<<<<< HEAD
    dispatch(getAllUsers())
    setData(orders);
=======
    // setData(orders);
>>>>>>> upstream/main
    setProd(products);
    dispatch(reset())
  },[])
  const getProductName = (product_id) => {
    const myProduct = products.find(prod => prod._id === product_id);
    return myProduct.name;
    }
  const getProductPrice = (product_id) => {
    const myProduct = products.find(prod => prod._id === product_id);
    return myProduct.price;
    }

  const getUserName = (user_id) => {
    const user = allUsers.find((user)=>user._id === user_id )
    return user.name
  }

  
    const columns = useMemo(
        () => [
          {
            accessorKey: "_id",
            header: "ORDER ID",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}},
            
          },
          {
            accessorKey:'product',
            header: "PRODUCT",
            muiTableHeadCellProps: { sx: { color: "rgba(47,43,61,.78)" } },
            Cell: ({ row }) => {
              return `${getProductName(row.original.product)}`
            }
          },
          {
            accessorKey:'price',
            header: "PRICE",
            muiTableHeadCellProps: { sx: { color: "rgba(47,43,61,.78)" } },
            Cell: ({ row }) => {
              return `Rs.${getProductPrice(row.original.product)}`
            }
          },
          {
            accessorKey:'status',
            header: "STATUS",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'user',
            header: "User",
            muiTableHeadCellProps: { sx: { color: "rgba(47,43,61,.78)" } },
            Cell: ({ row }) => {
              return (getUserName(row.original.user))
            }
          },
          {
            accessorKey:'action',
            header: "ACTIONS",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          }
        ],
        []
  );
    if (isLoading) {
    
    return <Spinner/>
  }
  return (
    <div className='col-12'>
        <div className='card'>
            <Header order={data.length}/>
            <MaterialReactTable columns={columns} data={orders}/>
        </div>
    </div>
  )
}

export default Ordertable
