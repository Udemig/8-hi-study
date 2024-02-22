import { Modal, Button, Form } from 'react-bootstrap';
import { addTask } from '../redux/slices/crudSlice';
import { useDispatch } from 'react-redux';

const FormModal = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // formData classından örnbek oluştur
    const formData = new FormData(e.target);

    // formdaki inputların verisni objeye çeviriyoruz
    const task = Object.fromEntries(formData.entries());

    // reducer'a veri ekleniceğini haber ver
    dispatch(addTask(task));

    // modalı kapat
    handleClose();
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>Yeni Görev Ekle</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Tanımı</Form.Label>
            <Form.Control name="title" placeholder="Navbarı Düzenle" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz</Form.Label>
            <Form.Control name="author" placeholder="ör:Ahmet" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Oluşturan</Form.Label>
            <Form.Control name="assigned_to" placeholder="ör:Mehmet" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control name="end_date" type="date" required />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              Oluştur
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
