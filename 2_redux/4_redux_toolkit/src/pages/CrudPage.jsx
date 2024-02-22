import { useState } from 'react';
import { Button, ButtonGroup, Stack, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import FormModal from '../components/FormModal';

const CrudPage = () => {
  const counterState = useSelector((store) => store.counterReducer);
  const crudState = useSelector((store) => store.crudReducer);

  const [isOpen, setIsOpen] = useState(false);

  console.log(crudState);
  return (
    <div className="px-3">
      <Stack className="align-items-end my-4">
        <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
      </Stack>

      <Table
        striped
        bordered
        hover
        responsive
        variant={counterState.isDarkTheme ? 'dark' : 'light'}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {crudState.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup size="sm">
                  <Button variant="danger">Sil</Button>
                  <Button>Düzenle</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <FormModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CrudPage;
