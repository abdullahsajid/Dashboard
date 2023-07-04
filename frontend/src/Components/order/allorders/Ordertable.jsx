import Header from './Header'
import { useMemo,useState } from 'react';
import { MaterialReactTable,Cell } from 'material-react-table'
import View from '../View';

const Ordertable = () => {
  const data = [
    {
        id:1,
        orderid: 123,
        name:"Hamza",
        address:'xyz islamabad',
        email:"hamza@gmail.com",
        number:31154876,
        product:"laptop hp",
        price:150000,
        description:'i7 11th gen 16gb ram',
        category:'computer',
        color:'black',
        status:'paid',
        action:<View/>
    },
    
]
    const columns = useMemo(
        () => [
          {
            accessorKey: "orderid",
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
            accessorKey:'action',
            header: "ACTIONS",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          }
        ],
        []
      );
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
