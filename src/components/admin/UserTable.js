import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const UserTable = () => {
  return (
    <Table bordered hover>
      <thead>
        <tr className='text-center'>
          <th className='bg-primary text-white'>User Id</th>
          <th className='bg-primary text-white'>Nama User</th>
          <th className='bg-primary text-white'>Email</th>
          <th className='bg-primary text-white'>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>1</td>
          <td>Administrator</td>
          <td>administrator@laundryresik.id</td>
          <td className='text-center'>
            <Button variant="primary" size="sm" className="me-2"><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
            <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
          </td>
        </tr>
        <tr>
          <td className='text-center'>2</td>
          <td>Arin</td>
          <td>arinku@gmail.com</td>
          <td className='text-center'>
            <Button variant="primary" size="sm" className="me-2"><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
            <Button variant="danger" size="sm"><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserTable;
