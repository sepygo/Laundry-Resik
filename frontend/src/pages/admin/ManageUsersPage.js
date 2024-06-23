import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { Form, FormControl, Offcanvas ,Button ,Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const ManageUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch(`${API_URL}/api/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  const handleClose = () => {
    setShow(false);
    setEditingUser(null);
    setFormData({
      username: '',
      email: '',
      password: '',
      role: '',
    });
  };

  const handleShow = () => setShow(true);

  const handleAddUser = () => {
    fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(newUserData => {
      setUsers([...users, newUserData]);
      fetchUsers();
      handleClose();
    })
    .catch(error => console.error('Error adding user:', error));
  };

  const handleUpdateUser = () => {
    fetch(`${API_URL}/api/users/${editingUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithoutPassword()), // formDataWithoutPassword for update
    })
    .then(response => response.json())
    .then(updatedUserData => {
      const updatedUsers = users.map(user =>
        user.id === updatedUserData.id ? updatedUserData : user
      );
      setUsers(updatedUsers);
      fetchUsers();
      handleClose();
    })
    .catch(error => console.error('Error updating user:', error));
  };

  const handleDelete = (userId) => {
    swal({
      title: "Yakin Dihapus?",
      text: "setelah dihapus, pengguna tidak bisa mengakses!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${API_URL}/api/users/${userId}`)
          .then(() => {
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
            swal("Yahh! pengguna telah dihapus!", {
              icon: "success",
            });
          })
          .catch(error => {
            console.error('Error deleting order:', error);
            swal("Oops! Something went wrong. Please try again later.", {
              icon: "error",
            });
          });
      } else {
        swal("Penghapusan dibatalkan!");
      }
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      role: user.role,
    });
    handleShow();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const formDataWithoutPassword = () => {
    const { password, ...dataWithoutPassword } = formData;
    return dataWithoutPassword;
  };

  return (
    <div className="px-5 pt-5 pb-0">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Kelola Akses Pengguna</h2>
        <Button className="btn btn-lg btn-primary py-3 px-4" onClick={handleShow}>+ Tambah Akses</Button>
      </div>
      <div className="d-flex justify-content-between align-items-stretch mb-3">
        <nav aria-label="breadcrumb" className='bc-admin bg-white rounded px-2 border d-flex justify-content-between align-items-center'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">Pengguna</li>
          </ol>
        </nav>
        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Cari..."
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      
      <Table bordered hover>
        <thead>
          <tr className='text-center'>
            <th className='bg-primary text-white'>ID</th>
            <th className='bg-primary text-white'>Nama User</th>
            <th className='bg-primary text-white'>Email</th>
            <th className='bg-primary text-white'>Role</th>
            <th className='bg-primary text-white'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className='text-center'>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className='text-center'>
                <Button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(user)}>
                  <FontAwesomeIcon icon={faPen} className='mx-2'/>
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  <FontAwesomeIcon icon={faTrash} className='mx-2'/>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{editingUser ? 'Edit Pengguna' : 'Tambah Pengguna'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={editingUser ? handleUpdateUser : handleAddUser}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nama Pengguna</label>
              <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            {!editingUser && (
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role Akses</label>
              <select className="form-select" id="role" value={formData.role} onChange={handleChange} required>
                <option value="" selected disabled>Pilih Akses</option>
                <option value="admin">Admin</option>
                <option value="kasir">Kasir</option>
              </select>
            </div>
            <button type="button" className="w-100 btn btn-primary" onClick={editingUser ? handleUpdateUser : handleAddUser}>
              {editingUser ? 'Simpan Perubahan' : '+ Tambah'}
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ManageUsersPage;
