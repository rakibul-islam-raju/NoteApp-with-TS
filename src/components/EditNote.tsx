import useNote from "../hooks/useNote";
import { NoteData, Tag } from "../types/types";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

type EditNoteProps = {
	onSubmit: (id: string, data: NoteData) => void;
	onAddTag: (data: Tag) => void;
	availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
	const note = useNote();

	return (
		<>
			<h4>Edit Note</h4>
			<NoteForm
				title={note?.title}
				markdown={note?.markdown}
				tags={note?.tags}
				onSubmit={(data) => onSubmit(note.id, data)}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
};

export default EditNote;
