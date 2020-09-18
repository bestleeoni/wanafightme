import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class Contact extends Component {
    render() {
        const photo = "./images/chakkrit.jpg";
        return (
            <div>
                <Card style={{width:"50%", height:"50%"}}>
                    <CardImg top width="10%" src={photo} alt="Card image cap" />
                    <CardBody>
                        <h1>จักกฤช กิตติกองวงษ์</h1>
                    </CardBody>
                </Card>
                <Card >
                <CardTitle>CHAKKRIT KITTIKONGWONG
                    
                </CardTitle>
                
                </Card>
            </div>
        )
    }
}
