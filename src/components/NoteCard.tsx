import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Note } from "../types/types";
import styles from "../assets/css/NoteCard.module.css";
import NoteTag from "./NoteTag";

export const NoteCard = ({ id, title, tags, markdown }: Note) => {
	return (
		<Card
			as={Link}
			to={`/${id}`}
			className={`h-100 text-reset text-decoration-none ${styles.card}`}
		>
			<Card.Body>
				<Stack
					gap={2}
					className="justify-content-center align-items-center h-100"
				>
					<span className="fs-4">{title}</span>
					<Stack
						direction="horizontal"
						gap={2}
						className="justify-content-center flex-wrap"
					>
						{tags?.map((tag) => (
							<NoteTag key={tag.id} tag={tag} />
						))}
					</Stack>
				</Stack>
			</Card.Body>
		</Card>
	);
};
