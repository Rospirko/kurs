import React from "react";
import {Container, Accordion} from "react-bootstrap";

function Contacts (){
    return(
        <Container>
            <h1>Контакти</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Номер телефону</Accordion.Header>
                    <Accordion.Body>
                        (044) 226-22-52
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Веб-сайт</Accordion.Header>
                    <Accordion.Body>
                        <a href="https://ngu.gov.ua/">НАЦІОНАЛЬНА ГВАРДІЯ УКРАЇНИ</a>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Карта Google</Accordion.Header>
                    <Accordion.Body>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81333.84700714888!2d30.479116579836443!3d50.4283828120646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceb5378f25dd%3A0x4829cbb8ca973c42!2sHolovne%20Upravlinnya%20Natsional%CA%B9noyi%20Hvardiyi%20Ukrayiny!5e0!3m2!1sru!2sua!4v1637155689329!5m2!1sru!2sua"
                            width="800px" height="600px"
                        >

                        </iframe>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p></p>
        </Container>
    )
}
export default Contacts;