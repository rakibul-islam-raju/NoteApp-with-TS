import { useOutletContext } from "react-router-dom";
import { Note } from "../types/types";

const UseNote = () => {
	return useOutletContext<Note>();
};

export default UseNote;
