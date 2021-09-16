import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export default class TeamCard extends Component {

    constructor(){
        super();
        this.state={
            clicked:false
        }
    }

    
    render() {
        return (
            <Col>

                {this.state.clicked ? <Redirect to={`/teams${this.props.team.team_id}`}/>:''}
                <Card style={{ width: '150px', marginBottom:"25px" }}>
                    <Card.Img variant="top" style={{height:"100px", objectFit:"contain"}} alt={this.props.team.name} 
                            src={'https://res.cloudinary.com/dfoa3zymg/image/upload/v1631698572/unavailable-image_gytmn8.jpg '} />
                    <Card.Body>
                        <Card.Title>{this.props.team.name}</Card.Title>
                        <Card.Subtitle className="float-end">${this.props.team.wins}</Card.Subtitle><br/>
                        <Card.Subtitle className="float-end">${this.props.team.losses}</Card.Subtitle><br/>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}