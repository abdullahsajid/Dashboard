import { useMemo,useState } from 'react';
import { MaterialReactTable } from 'material-react-table'
import './user.css'
import UserNav from './UserNav';
const data = [
    {
        user:"Abdullah",
        role:"user",
        action:""
    },
    {
        user:"Ali",
        role:"admin",
        action:""
    },
    {
        user:"Ahmad",
        role:"admin",
        action:""
    },
    {
        user:"hamza",
        role:"super admin",
        action:""
    },
  ];
const List = () => {
    const columns = useMemo(
        () => [
          {
            accessorKey: "user",
            header: "USER",
            muiTableHeadCellProps: {sx:{color:"rgba(47,43,61,.78)"}}
          },
          {
            accessorKey:'role',
            header: "ROLE",
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
      const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='layout-content'>
        <div>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='d-flex align-items-center flex-wrap gap-4 p-3'>
                            <div className='d-flex gap-3'>
                                <a className='create-invoice-btn' onClick={toggleSidebar} style={{cursor:"pointer"}}>
                                    <span className='btn-prepend'>
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" tag="i" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v14m-7-7h14"></path>
                                        </svg>
                                    </span>
                                    <span className='btn-content'>Add New User</span>
                                </a>
                            </div>
                        </div>
                        <MaterialReactTable columns={columns} data={data}/>
                    </div>
                    <UserNav isOpen={isOpen} toggle={toggleSidebar}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List
