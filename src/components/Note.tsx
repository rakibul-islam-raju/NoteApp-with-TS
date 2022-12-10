import { Button, Col, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UseNote from "../hooks/UseNote";
import NoteTag from "./NoteTag";
import ReactMarkdown from "react-markdown";

const Note = () => {
	const navigate = useNavigate();
	const note = UseNote();

	return (
		<>
			<Row className="mb-5">
				<Col>
					<h1>{note.title}</h1>
					<Stack direction="horizontal" gap={2} className="flex-wrap">
						{note.tags?.map((tag) => (
							<NoteTag key={tag.id} tag={tag} />
						))}
					</Stack>
				</Col>
				<Col xs="auto">
					<Stack gap={2} direction="horizontal">
						<Button
							type="button"
							variant="secondary"
							onClick={() => navigate(-1)}
						>
							Back
						</Button>
						<Button variant="outline-primary" type="button" onClick={() => {}}>
							Edit
						</Button>
						<Button variant="outline-danger" type="button" onClick={() => {}}>
							Delete
						</Button>
					</Stack>
				</Col>
			</Row>

			<ReactMarkdown>{note.markdown}</ReactMarkdown>
		</>
	);
};

export default Note;
