import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { register } from "../../services/api";


const Register = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const submitRegister = async (e) => {
        e.preventDefault();
        await register(name, address, phoneNumber, password)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    };

    const [toggleShow, setToggleShow] = useState(false);

    return (

        <section class="vh-100">
            <div class="container py-5 h-100">
                <div class="row d-flex align-items-center justify-content-center h-100">
                    <div class="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            class="img-fluid" alt="phone" />
                    </div>
                    <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        
                        <Form onSubmit={submitRegister}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter phone number"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type={toggleShow ? "text" : "password"}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>

                            <div class="d-flex justify-content-start align-items-center mb-3">
                                <input
                                    style={{ marginRight: "10px" }}
                                    type="checkbox"
                                    onChange={(e) => setToggleShow(e.target.checked)}
                                /> Show Password
                            </div>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Register;
