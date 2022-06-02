import "./assets/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from './pages/home/home'
import DetailProduct from './pages/detail-product/detail-product'
import DashboardAdmin from './pages/dashboard-admin/dashboard-admin';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail-product/:id" element={<DetailProduct />} />
                    <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
