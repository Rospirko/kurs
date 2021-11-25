import React from "react";
import {Container, Figure} from 'react-bootstrap';
import {inject} from 'mobx-react';

@inject('store')
class GalleryPage extends React.Component{
    render() {
        const {getAllImages} = this.props.store;

        return(
            <Container>
                <h1>Галерея</h1>
                <div>
                    {getAllImages.map(item=>(
                        // <Image className="img" src={item.imageUrl} fluid />
                        <Figure key={item.id} >
                        <Figure.Image
                        src={item.imageUrl}
                        />
                        <Figure.Caption>
                            {item.description}
                        </Figure.Caption>
                        </Figure>
                    ))}
                </div>
            </Container>
        )
    }

}
export default GalleryPage;