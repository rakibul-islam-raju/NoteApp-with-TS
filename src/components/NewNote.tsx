import { NoteData, Tag } from "../types/types";
import NoteForm from "./NoteForm";

type NewNoteProps = {
	onSubmit: (data: NoteData) => void;
	onAddTag: (data: Tag) => void;
	availableTags: Tag[];
};

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
	return (
		<>
			<h4>Create New Note</h4>
			<NoteForm
				onSubmit={onSubmit}
				onAddTag={onAddTag}
				availableTags={availableTags}
			/>
		</>
	);
};

export default NewNote;
