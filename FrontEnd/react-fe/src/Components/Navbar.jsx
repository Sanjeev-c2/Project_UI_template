import React from 'react';
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import '../Styles/Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar1 = () => {
    const data = JSON.parse(localStorage.getItem("userDetails"));
    
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/");
    }

    return (
        <Navbar variant="dark" expand="lg" className="navbar">
            <Container fluid className="container">
                <Navbar.Brand className="logo">
                    <h4>Code<span style={{ color: 'red' }}>n</span>trix</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav className="mx-auto">
                        <NavDropdown title="Title1" id="nav-dropdown-dark-example">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title2" id="nav-dropdown-dark-example">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title3" id="nav-dropdown-dark-example" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title4" id="nav-dropdown-dark-example" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title5" id="nav-dropdown-dark-example" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title6" id="nav-dropdown-dark-example" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Title7" id="nav-dropdown-dark-example" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <div className="profile">
                    <NavDropdown
                        title={<ManageAccountsIcon className="custom-icon" />}
                        id="profile-dropdown"
                        align="end"
                        className="custom-dropdown"
                    >
                        <NavDropdown.ItemText>
                            <p>Username: {data.user.username}</p>
                        </NavDropdown.ItemText>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Container>
        </Navbar>
    );
};

export default Navbar1;
