import React, { useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../../services/api";
import Checkbox from './Checkbox';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault();
        await login(name, password)
            .then((response) => {
                Cookies.set("token", response.data.access_token);
                navigate("/dashboard-admin");
            })
            .catch((error) => console.log(error));
    };

    const languageList = [
        { value: 'rememberme', label: 'Remember Me' },   
    ];

    const [form, setForm] = useState({
        lang: [],
    });

    const onValidate = (value, name) => {
        setError((prev) => ({
            ...prev,
            [name]: { ...prev[name], errorMsg: value },
        }));
    };

    const [error, setError] = useState({
        lang: {
            isReq: true,
            errorMsg: '',
            onValidateFunc: onValidate,
        }
    });

    const onHandleChange = useCallback((value, name) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }, []);

    const validateForm = () => {
        let isInvalid = false;
        Object.keys(error).forEach((x) => {
            const errObj = error[x];
            if (errObj.errorMsg) {
                isInvalid = true;
            } else if (
                errObj.isReq &&
                (Array.isArray(form[x]) ? !form[x].length : !form[x])
            ) {
                isInvalid = true;
                onValidate(true, x);
            }
        });
        return !isInvalid;
    };

    const handleSubmit = () => {
        const isValid = validateForm();
        if (!isValid) {
            console.error('Invalid Form!');
            return false;
        }

        console.log('Data:', form);
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
                        <Form onSubmit={submitLogin}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type={toggleShow ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
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

                            <div class="d-flex justify-content-around align-items-center mb-4">
                                <div class="form">

                                    <Checkbox
                                        name="lang"
                                        value={form.lang}
                                        options={languageList}
                                        onChangeFunc={onHandleChange}
                                        {...error.lang}
                                    />

                                </div>
                                <a href="#!" style={{ textDecoration: 'none' }}>Forgot password?</a>
                            </div>

                            <Button type="submit" class="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Sign in</Button>

                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <div className="d-grid">
                                <a class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#3b5998" }} href="#!"
                                    role="button">
                                    <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
                                </a>
                                <br />
                                <a class="btn btn-primary btn-lg btn-block" style={{ backgroundColor: "#55acee" }} href="#!"
                                    role="button">
                                    <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;
