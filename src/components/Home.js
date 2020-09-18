import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Carousel,


} from 'reactstrap';
import Slides from './Slides';

export default class Home extends Component {

    render() {
        const photo = "./images/MMA1.jpg";

        return (
            <div>
                <Slides/>
                <Card style={{width:"30%", height:"10%"}}>
                    <CardImg width="50%" src={photo} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>MMA</CardTitle>
                        <CardSubtitle>What is MMA ?</CardSubtitle>
                        <CardText>MMA is Mixed martial art combat sport</CardText>
                        <Button>Read more</Button>
                    </CardBody>
                </Card>

            </div >
            
        )
    }
}
