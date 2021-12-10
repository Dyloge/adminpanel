import './userList.css';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteRoundedIcon fontSize='large' className='userListDelete' />
          </>
        );
      },
    },
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{ color: 'white' }}
      />
    </div>
  );
};

export default UserList;
