import React, { Component } from "react";
import { Carousel} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Images } from "../../theme"



export default class ImageSlider extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Images.workSpace}
                        alt="Work Space"
                        />
                    <Carousel.Caption>
                        <h3>Work Space</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Images.team}
                        alt="Our Team"
                        />

                    <Carousel.Caption>
                        <h3>Our Team</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Images.leadership}
                        alt="Leadership"
                    />

                    <Carousel.Caption>
                        <h3>Leadership</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}


