import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllProducts } from "../../services/api";
import CardComponent from "../../components/card/card-component";
import { Link } from 'react-router-dom'

const Home = () => {
    const [dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((response) => setDataProducts(response.data))
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Container className="mt-5">
                <div className="d-flex flex-wrap">
                    {dataProducts.map((product) => (
                        <Link to="/detail-product" className="text-decoration-none">
                            <CardComponent
                                title={product.name}
                                price={product.price}
                            />
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Home;
