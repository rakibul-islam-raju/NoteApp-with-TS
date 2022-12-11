import { FormEvent } from "react";
import { Button, Col, Modal, Row, Stack, Form } from "react-bootstrap";
import { Tag } from "../types/types";

type TagEditModalProps = {
	availableTags: Tag[];
	show: boolean;
	handleClose: () => void;
	onDeleteTag: (id: string) => void;
	onUpdateTag: (id: string, label: string) => void;
};

const EditTagModal = ({
	availableTags,
	show,
	handleClose,
	onDeleteTag,
	onUpdateTag,
}: TagEditModalProps) => {
	const handleChange = (id: string, label: string) => {
		onUpdateTag(id, label);
	};

	const handleDelete = (id: string) => {
		const ans = window.confirm("Are you sure to delete this tag?");
		if (ans) {
			onDeleteTag(id);
		}
	};

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>Edit Tags</Modal.Header>
			<Modal.Body>
				<Form>
					<Stack gap={2}>
						{availableTags?.map((tag) => (
							<Row key={tag.id}>
								<Col>
									<Form.Control
										type="text"
										value={tag.label}
										onChange={(e) => handleChange(tag.id, e.target.value)}
									/>
								</Col>
								<Col xs="auto">
									<Button
										variant="outline-danger"
										type="button"
										onClick={() => handleDelete(tag.id)}
									>
										&times;
									</Button>
								</Col>
							</Row>
						))}
					</Stack>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default EditTagModal;
