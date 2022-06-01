import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllProducts } from "../../services/api";
import CardComponent from "../../components/card/card-component";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Home = () => {
    const [dataProducts, setDataProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchGetAllProduct = async () => {
        await setIsLoading(true);
        await getAllProducts()
            .then((response) => setDataProducts(response.data))
            .catch((error) => {
                console.log(error);
            });
        await setIsLoading(false);
    };

    useEffect(() => {
        fetchGetAllProduct();
    }, []);

    return (
        <div>
            {isLoading ? (
                <ReactLoading type="spinningBubbles" color="#0D6EFD" className="m-auto mt-5"/>
            ) : (
                <Container className="mt-5">
                    <div className="d-flex flex-wrap">
                        {dataProducts.map((product) => (
                            <Link
                                to={`/detail-product/${product.id}`}
                                className="text-decoration-none"
                            >
                                <CardComponent
                                    title={product.name}
                                    price={product.price}
                                    image={product.image}
                                />
                            </Link>
                        ))}
                    </div>
                </Container>
            )}
        </div>
    );
};

export default Home;
