import React, { useEffect, useState } from "react";
import ProtectedComponent from "../../layout/protected-component";
import { Table, Button } from "react-bootstrap";
import { getAllProducts, deleteProduct } from "../../services/api";
import ReactLoading from "react-loading";
import swal from "sweetalert";
import AddModalProduct from "../../components/modal/add-product-modal";

const DashboardAdmin = () => {
    const [dataProducts, setDataProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [show, setShow] = useState(false);

    const fetchAllProducts = async () => {
        await setIsLoading(true);
        await getAllProducts()
            .then((response) => setDataProducts(response.data))
            .catch((error) => console.log(error));
        await setIsLoading(false);
    };

    const deleteProductById = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                await deleteProduct(id)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.log(error));
                setRefresh(!refresh);
            }
        });
    };

    useEffect(() => {
        fetchAllProducts();
    }, [refresh]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <AddModalProduct
                show={show}
                handleClose={handleClose}
                setRefresh={setRefresh}
                refresh={refresh}
            />
            <h1>Dashboard Admin</h1>
            <div className="d-flex justify-content-end">
                <Button variant="primary" className="my-3" onClick={handleShow}>
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
                                    <Button
                                        variant="danger"
                                        className="mx-1"
                                        onClick={() =>
                                            deleteProductById(product.id)
                                        }
                                    >
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
