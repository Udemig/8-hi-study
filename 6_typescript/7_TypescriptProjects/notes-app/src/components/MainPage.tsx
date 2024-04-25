import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import NoteCard from "./Form /NoteCard";
import { Note, Tag } from "../types";
import { useMemo, useState } from "react";
type MainProps = {
  notes: Note[];
  availableTags: Tag[];
};
const MainPage = ({ availableTags, notes }: MainProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  const filtredNotes = useMemo(
    () =>
      notes.filter((note) => {
        return (
          // notun başlığını arattığım metin içeriyorsa notları dönderir
          (note.title == "" ||
            note.title.toLowerCase().includes(title.toLowerCase())) &&
          (selectedTags.length === 0 ||
            selectedTags.every((tag) =>
              note.tags.some((noteTag) => tag.id == noteTag.id)
            ))
        );
      }),

    [title, selectedTags, notes]
  );

  return (
    <div className="container py-5">
      <Stack direction="horizontal" className="justify-content-between">
        <h1>Notlar</h1>
        <Link to={"/new"}>
          <Button>Oluştur</Button>
        </Link>
      </Stack>
      {/* Fitreleme Alanı */}
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <Form.Control
                className="shadow"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Başlığa Göre Ara</Form.Label>
              <ReactSelect
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => ({
                      label: tag.label,
                      id: tag.value,
                    }))
                  );
                }}
                // daha önceden oluşturulanları listeleme
                options={availableTags.map((item) => ({
                  label: item.label,
                  value: item.id,
                }))}
                isMulti
                className="shadow"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      {/* Notlar */}
      <Row xs={1} sm={2} lg={3} xl={4} className="g-3 mt-4">
        {filtredNotes.map((note) => (
          <Col key={note.id}>
            <NoteCard note={note} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MainPage;

// every:Dizideki bütün elemanlar koşula uyarsa true dönderir
// some:Dİzideki bir tane eleman bile şarta uyarsa true dönderir
// const numbers = [2, 4, 6, 8, 11, 10];
// const isEven = numbers.every((num) => num % 2 === 0);
// console.log(isEven);
// const ages = [2, 17, 5, 3, 4, 53];
// const isAdult = ages.some((age) => age >= 18);
// console.log(isAdult);
