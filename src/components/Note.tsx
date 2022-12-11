import { Button, Col, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useNote from "../hooks/useNote";
import NoteTag from "./NoteTag";
import ReactMarkdown from "react-markdown";

type NoteProps = {
	onDelete: (id: string) => void;
};

const Note = ({ onDelete }: NoteProps) => {
	const navigate = useNavigate();
	const note = useNote();

	const handleDelete = () => {
		window.alert("");
		const ans = window.confirm("Are you sure to delete this note?");
		if (ans) {
			onDelete(note.id);
			navigate("/");
		}
	};

	return (
		<>
			<Row className="mb-5">
				<Col>
					<h1>{note?.title}</h1>
					{note?.tags.length > 0 && (
						<Stack direction="horizontal" gap={2} className="flex-wrap">
							{note?.tags?.map((tag) => (
								<NoteTag key={tag.id} tag={tag} />
							))}
						</Stack>
					)}
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
						<Button
							variant="outline-primary"
							type="button"
							onClick={() => navigate(`/${note?.id}/edit`)}
						>
							Edit
						</Button>
						<Button
							variant="outline-danger"
							type="button"
							onClick={handleDelete}
						>
							Delete
						</Button>
					</Stack>
				</Col>
			</Row>

			<ReactMarkdown>{note?.markdown}</ReactMarkdown>
		</>
	);
};

export default Note;
