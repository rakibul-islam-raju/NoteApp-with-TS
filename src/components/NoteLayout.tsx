import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types/types";

type NoteLayoutProps = {
	notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
	const { id } = useParams();

	const note = notes.find((note) => note.id === id);

	if (note == null) return <Navigate to="/" replace />;
	return <Outlet context={note} />;
};

export default NoteLayout;
