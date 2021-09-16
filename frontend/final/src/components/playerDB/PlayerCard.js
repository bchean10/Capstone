import React, { Component } from 'react'
import {Card, Col} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export default class PlayerCard extends Component {

    constructor(){
        super();
        this.state={
            clicked:false
        }
    }

    
    render() {
        return (
            <Col>

                {this.state.clicked ? <Redirect to={`/players${this.props.player.account_id}`}/>:''}
                <Card style={{ width: '150px', marginBottom:"25px" }}>
                    <Card.Img variant="top" style={{height:"100px", objectFit:"contain"}} alt={this.props.player.name} 
                            src={this.props.player.avatar} />
                    <Card.Body>
                        <Card.Title>{this.props.players.name}</Card.Title>
                        <Card.Subtitle className="float-end">${this.props.player.personaname}</Card.Subtitle><br/>
                        <Card.Subtitle className="float-end">${this.props.player.loccountrycode}</Card.Subtitle><br/>
						<Card.Subtitle className="float-end">${this.props.player.team_name}</Card.Subtitle><br/>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}