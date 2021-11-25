import React from 'react';
import {Card, Container} from 'react-bootstrap';
import {inject} from "mobx-react";


@inject('store')
class News extends React.Component {
    render() {
        const { getAllNews } = this.props.store;

        return(
            <Container>
                <h1>Новини</h1>
                <div className="news-container">
                    {getAllNews.map(item=>(
                        <Card key={item.id} style={{ maxWidth: '30rem' }}>
                            <Card.Header as="h5">{item.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        )
    }

}

export default News;