import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
import YouTube from 'react-youtube';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardColumns,
} from 'reactstrap';


export default class Blogs extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };


        return (
            <div>
                <CardColumns>
                {
                   data.videos.map(item => 
                    <Card key={item.id}>
                       {/*  <CardImg top width="100%" src={item.photo}  /> */}
                        
                        <CardBody>
                            <CardTitle><Link to={'/blog/'+item._id}>{item.name}</Link></CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>{item.caption}</CardText>
                            <Button color="primary">Button</Button>
                        </CardBody>
                    </Card>
                    
                   )
                }
                </CardColumns>

                
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

}
