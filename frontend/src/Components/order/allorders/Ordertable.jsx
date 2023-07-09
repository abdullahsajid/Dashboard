import Header from './Header'
import { useMemo,useState,useEffect } from 'react';
import { MaterialReactTable,Cell } from 'material-react-table'
import View from '../View';
import { getOrders } from '../../../features/order/orderSlice';
import { getProducts } from '../../../features/products/productSlice';

import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import { reset } from '../../../features/order/orderSlice';
const Ordertable = () => {
  const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  const {orders,isLoading,isError,isSuccess,message} = useSelector(state=>state.order)
  const {products} = useSelector(state=>state.product)
  const dispatch = useDispatch();
  useEffect(() => {
    if(isError){
      alert(message)
    }
    dispatch(getOrders())
    dispatch(getProducts())
    setData(orders);
    setProd(products);
    
    dispatch(reset())
  },[])
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
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'price',
            header: "PRICE",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'status',
            header: "STATUS",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'user',
            header: "User",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'action',
            header: "ACTIONS",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          }
        ],
        []
  );
  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className='col-12'>
        <div className='card'>
            <Header order={data.length}/>
            <MaterialReactTable columns={columns} data={data}/>
        </div>
    </div>
  )
}

export default Ordertable
