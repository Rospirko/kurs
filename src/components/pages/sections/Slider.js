import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Container, Carousel} from 'react-bootstrap';
import {inject} from 'mobx-react';
import styled from 'styled-components';
import "../../../img/aviasvit1.jpg";

const Item = styled.div`
background-image: url('${props => props.imageUrl}') !important;
  height: 190px;
  //width: 180px;
`;

@inject('store')
class Slider extends React.Component {
    render() {
        const { getAllImages } = this.props.store;

        return(
            <Container>
                <Carousel>
                    {getAllImages.slice(0,3).map(item=>(
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100"
                                src={item.imageUrl}
                                alt={item.description}
                            />
                            <Carousel.Caption>
                                <h3>{item.description}</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>


            </Container>
        )
    }
}

export default Slider;