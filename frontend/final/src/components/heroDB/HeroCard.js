import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export default class HeroCard extends Component {

    constructor(){
        super();
        this.state={
            clicked:false
        }
    }

    
    render() {
        return (
            <Col>

                {this.state.clicked ? <Redirect to={`/heroes${this.props.hero.id}`}/>:''}
                <Card style={{ width: '150px', marginBottom:"25px" }}>
                    <Card.Img variant="top" style={{height:"100px", objectFit:"contain"}} alt={this.props.hero.localized_name} 
                            src={'https://res.cloudinary.com/dfoa3zymg/image/upload/v1631698572/unavailable-image_gytmn8.jpg '} />
                    <Card.Body>
                        <Card.Title>{this.props.hero.localized_name}</Card.Title>
                        <Card.Subtitle className="float-end">${this.props.hero.primary_attr}</Card.Subtitle><br/>
                        <Card.Subtitle className="float-end">${this.props.hero.attack_type}</Card.Subtitle><br/>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}