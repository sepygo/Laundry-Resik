import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { NavLink } from 'react-router-dom';
import { Form, FormControl, Table, Button, Col, Nav, Row, Tab, Modal } from 'react-bootstrap';
import swal from 'sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const TrackingCodePage = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [serviceForm, setServiceForm] = useState({ id: null, name: '', description: '', price: '', unit: '', category_id: '' });
  const [categoryForm, setCategoryForm] = useState({ id: null, name: '', description: '' });

  const handleCloseServiceModal = () => setShowServiceModal(false);
  const handleShowServiceModal = (service = null) => {
    if (service) {
      setServiceForm(service);
    } else {
      setServiceForm({ id: null, name: '', description: '', price: '', unit: '', category_id: activeCategory });
    }
    setShowServiceModal(true);
  };

  const handleCloseCategoryModal = () => setShowCategoryModal(false);
  const handleShowCategoryModal = (category = null) => {
    if (category) {
      setCategoryForm(category);
    } else {
      setCategoryForm({ id: null, name: '', description: '' });
    }
    setShowCategoryModal(true);
  };

  useEffect(() => {
    fetchCategories();
    fetchServices();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/categories`);
      setCategories(response.data);
      if (response.data.length > 0) {
        setActiveCategory(response.data[0].id);
      }
    } catch (error) {
      console.error("There was an error fetching the categories!", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/services`);
      setServices(response.data);
    } catch (error) {
      console.error("There was an error fetching the services!", error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    swal({
      title: "Yakin Dihapus?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${API_URL}/api/categories/${categoryId}`)
          .then(() => {
            fetchCategories();
            swal("Yahh! kategori telah dihapus!", {
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

  const handleDeleteService = async (serviceId) => {
    swal({
      title: "Yakin Dihapus?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${API_URL}/api/services/${serviceId}`)
          .then(() => {
            fetchServices();
            swal("Yahh! layanan telah dihapus!", {
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

  const handleServiceFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (serviceForm.id) {
        await axios.put(`${API_URL}/api/services/${serviceForm.id}`, serviceForm);
      } else {
        await axios.post(`${API_URL}/api/services`, serviceForm);
      }
      fetchServices();
      handleCloseServiceModal();
    } catch (error) {
      console.error("There was an error saving the service!", error);
    }
  };

  const handleCategoryFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (categoryForm.id) {
        await axios.put(`${API_URL}/api/categories/${categoryForm.id}`, categoryForm);
      } else {
        await axios.post(`${API_URL}/api/categories`, categoryForm);
      }
      fetchCategories();
      handleCloseCategoryModal();
    } catch (error) {
      console.error("There was an error saving the category!", error);
    }
  };

  const renderServices = (categoryId) => {
    return services.filter(service => service.category_id === categoryId).map(service => (
      <tr key={service.id}>
        <td className='text-center'>{service.name}</td>
        <td>{service.description}</td>
        <td>{service.price}</td>
        <td className='text-center'>{service.unit}</td>
        <td className='text-center'>
          <Button className="btn btn-sm btn-primary me-2" onClick={() => handleShowServiceModal(service)}><FontAwesomeIcon icon={faPen} className='mx-2'/></Button>
          <Button variant="danger" size="sm" onClick={() => handleDeleteService(service.id)}><FontAwesomeIcon icon={faTrash} className='mx-2'/></Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="mb-0">Kelola Layanan</h2>
      </div>
      <div className="d-flex justify-content-between align-items-stretch mb-3">
        <nav aria-label="breadcrumb" className='bc-admin bg-white rounded px-2 border d-flex justify-content-between align-items-center'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
            <li className="breadcrumb-item active" aria-current="page">Layanan</li>
          </ol>
        </nav>
        <Form className="d-flex ms-auto" style={{opacity:'0'}}>
          <FormControl
            type="search"
            placeholder="Cari..."
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>
      
      <Tab.Container id="left-tabs-example" activeKey={activeCategory} onSelect={k => setActiveCategory(k)}>
        <Row className='border rounded bg-white'>
          <Col sm={3} className='pt-3 border-end'>
            <h3 className='text-center'>Kategori</h3>
          </Col>
          <Col sm={9} className='pt-3'>
            <h3 className='text-center'>Layanan</h3>
          </Col>
          <Col sm={3} className='p-3 border-end'>
            <Nav variant="pills" className="flex-column">
              {categories.map((category) => (
                <Nav.Item key={category.id}>
                  <Nav.Link eventKey={category.id} className='border mb-3 d-flex align-items-center justify-content-between'>
                    {category.name}
                  <div>
                    <Button variant="light" size="sm" className='mx-1 border-0 bg-white text-primary' onClick={() => handleShowCategoryModal(category)}><FontAwesomeIcon icon={faPen} /></Button>
                    <Button variant="light" size="sm" className='mx-1 border-0 bg-white text-danger' onClick={() => handleDeleteCategory(category.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                  </div>
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Button variant="warning" className='mt-3' onClick={() => handleShowCategoryModal(null)}>+ Kategori</Button>
            </Nav>
          </Col>
          <Col sm={9} className='p-3'>
            <Tab.Content>
              {categories.map((category) => (
                <Tab.Pane eventKey={category.id} key={category.id}>
                  <Table bordered hover className='manage-service-table'>
                    <tbody>
                      {renderServices(category.id)}
                    </tbody>
                  </Table>
                  <Button variant="warning" className='w-100' onClick={() => handleShowServiceModal(null)}>+ Layanan</Button>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <Modal show={showServiceModal} onHide={handleCloseServiceModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{serviceForm.id ? 'Edit Layanan' : 'Tambah Layanan'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleServiceFormSubmit}>
            <Form.Group controlId="formServiceCode">
              <Form.Label>Kode</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan kode layanan" 
                value={serviceForm.name} 
                onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formServiceName" className="mt-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan nama layanan" 
                value={serviceForm.description} 
                onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formServicePrice" className="mt-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Masukkan harga layanan" 
                value={serviceForm.price} 
                onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formServiceUnit" className="mt-3">
              <Form.Label>Unit</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan unit layanan" 
                value={serviceForm.unit} 
                onChange={(e) => setServiceForm({ ...serviceForm, unit: e.target.value })} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showCategoryModal} onHide={handleCloseCategoryModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{categoryForm.id ? 'Edit Kategori' : 'Tambah Kategori'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCategoryFormSubmit}>
            <Form.Group controlId="formCategoryName">
              <Form.Label>Nama</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan nama kategori" 
                value={categoryForm.name} 
                onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formCategoryDescription" className="mt-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Masukkan deskripsi kategori" 
                value={categoryForm.description} 
                onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4">
              Simpan
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TrackingCodePage;
