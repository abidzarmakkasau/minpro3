import React, { useEffect, useState } from "react";
import ProtectedComponent from "../../layout/protected-component";
import { Table, Button } from "react-bootstrap";
import { getAllProducts } from "../../services/api";
import ReactLoading from "react-loading";

const DashboardAdmin = () => {
    const [dataProducts, setDataProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllProducts = async () => {
        await setIsLoading(true);
        await getAllProducts()
            .then((response) => setDataProducts(response.data))
            .catch((error) => console.log(error));
        await setIsLoading(false);
    };

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <div>
            <h1>Dashboard Admin</h1>
            <div className="d-flex justify-content-end">
                <Button variant="primary" className="my-3">
                    Add Product
                </Button>
            </div>
            {isLoading ? (
                <ReactLoading
                    type="spinningBubbles"
                    color="#0D6EFD"
                    className="m-auto mt-5"
                />
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProducts.map((product) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Button variant="warning" className="mx-1">
                                        Edit
                                    </Button>
                                    <Button variant="danger" className="mx-1">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default DashboardAdmin;
