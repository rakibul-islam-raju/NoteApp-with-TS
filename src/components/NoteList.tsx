import { useMemo, useRef, useState } from "react";
import { Button, Col, Row, Stack, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import { Note, Tag } from "../types/types";
import EditTagModal from "./EditTagModal";
import { NoteCard } from "./NoteCard";

type NoteListProps = {
	availableTags: Tag[];
	notes: Note[];
	onDeleteTag: (id: string) => void;
	onUpdateTag: (id: string, label: string) => void;
};

const NoteList = ({
	availableTags,
	notes,
	onDeleteTag,
	onUpdateTag,
}: NoteListProps) => {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [show, setShow] = useState(false);

	const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

	const filteredNotes = useMemo(() => {
		return notes?.filter((note) => {
			return (
				(title === "" ||
					note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())) &&
				(selectedTags.length === 0 ||
					selectedTags.every((tag) =>
						note.tags.some((noteTag) => noteTag.id === tag.id)
					))
			);
		});
	}, [title, selectedTags, notes]);

	return (
		<>
			<Row className="align-items-center mb-5">
				<Col>
					<h1>Notes</h1>
				</Col>
				<Col xs="auto">
					<Stack gap={2} direction="horizontal">
						<Button type="button" onClick={() => navigate("/new")}>
							Create
						</Button>
						<Button
							variant="outline-secondary"
							type="button"
							onClick={() => setShow(true)}
						>
							Edit Tags
						</Button>
					</Stack>
				</Col>
			</Row>

			<Form className="mb-5">
				<Row>
					<Col>
						<Form.Group controlId="title">
							<Form.Label>Title</Form.Label>
							<Form.Control
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								required
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="tags">
							<Form.Label>Tags</Form.Label>
							<ReactSelect
								isMulti
								value={selectedTags?.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
								options={availableTags?.map((tag) => {
									return { label: tag.label, value: tag.id };
								})}
								onChange={(tags) => {
									setSelectedTags(
										tags.map((tag) => {
											return { label: tag.label, id: tag.value };
										})
									);
								}}
							/>
						</Form.Group>
					</Col>
				</Row>
			</Form>

			<Row xs={1} sm={2} lg={3} xl={4} className="g-3">
				{filteredNotes?.map((note) => (
					<Col key={note.id}>
						<NoteCard
							id={note.id}
							title={note.title}
							tags={note.tags}
							markdown={note.markdown}
						/>
					</Col>
				))}
			</Row>

			<EditTagModal
				show={show}
				handleClose={() => setShow(false)}
				availableTags={availableTags}
				onDeleteTag={onDeleteTag}
				onUpdateTag={onUpdateTag}
			/>
		</>
	);
};

export default NoteList;
