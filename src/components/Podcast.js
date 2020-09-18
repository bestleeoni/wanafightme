import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import data from '../data';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardColumns,
} from 'reactstrap';

export default class Podcast extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {

                
            },
        };


        return (
            <div>
                <CardColumns>
                    {
                        data.audio.map(item =>
                            <Card key={item.id}>
                                {/*  <CardImg top width="100%" src={item.photo}  /> */}

                                <CardBody>
                                    
                                    <CardTitle>Podcast</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <AudioPlayer
                                        
                                        src="./audio/podcast.m4a"
                                        onPlay={e => console.log("onPlay")}
                                    // other props here
                                    />

                                    <CardText>บ่นๆจนได้เรื่อง</CardText>
                                    <Button color="primary">ฟัง Podcast</Button>
                                </CardBody>
                            </Card>
                        )



                    }
                </CardColumns>






            </div>
        )
    }
}
