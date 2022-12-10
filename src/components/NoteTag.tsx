import React from "react";
import { Badge } from "react-bootstrap";
import { Tag } from "../types/types";

type NoteTagProps = {
	tag: Tag;
};

const NoteTag = ({ tag }: NoteTagProps) => {
	return <Badge className="text-truncate">{tag.label}</Badge>;
};

export default NoteTag;
