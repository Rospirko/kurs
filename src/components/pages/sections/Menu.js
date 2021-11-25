import React from "react";
import {Container, Nav, Button} from "react-bootstrap"
import {Link} from "react-router-dom";

function Menu(){
    return (
        <div className="menu">
            <Container>
                <Nav
                    // activeKey="/"
                    // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-success">
                                <Link to="/">Головна</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-success">
                                <Link to="/about">Про сайт</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-success">
                                <Link to="/gallery">Галерея картинок</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-success">
                                <Link to="/news">Новини</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Button variant="outline-success">
                                <Link to="/contacts">Контакти</Link>
                            </Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    )
}
export default Menu;