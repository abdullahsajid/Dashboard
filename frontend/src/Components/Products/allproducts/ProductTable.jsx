import { useMemo,useState } from 'react';
import { MaterialReactTable } from 'material-react-table'
import UpdateorDel from '../../User/Userlist/UpdateorDel';
import Header from './Header';
const data = [
    {
        id:1,
        name:'Laptop hp',
        price:2000,
        description:'i7 11th gen 16gb ram',
        category:'computer',
        color:'black',
        action:<UpdateorDel/>
    },
    
]

const ProductTable = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: "name",
            header: "NAME",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'price',
            header: "PRICE",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'description',
            header: "DESCRIPTION",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'category',
            header: "CATEGORY",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'color',
            header: "COLOR",
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
    <div>
      <Header stock={data.length}/>
      <MaterialReactTable columns={columns} data={data}/>
    </div>
  )
}

export default ProductTable

