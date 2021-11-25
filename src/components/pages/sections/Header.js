import React from "react";
import {Container} from "react-bootstrap"

function Header(){
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo">
                    <Container className="logo-container">
                        <img className="logotip" src="https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-8e9bbbe7ab284ff43616182720496972.png" alt=""/>
                        <h1>Новинний військовий портал Національної Гвардії України</h1>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Header;