import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { addProduct } from "../../services/api";

const AddModalProduct = (props) => {
    const { show, handleClose, setRefresh, refresh } = props;
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const addNewProduct = async () => {
        await addProduct(name, quantity, price, imageUrl)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        handleClose();
        setRefresh(!refresh)
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Input product name ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            type="number"
                            placeholder="Input product quantity ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            placeholder="Input product price ..."
                            autoFocus
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            type="text"
                            placeholder="Input product image url ..."
                            autoFocus
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={addNewProduct}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddModalProduct;
