import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class FormProfil extends React.Component {
    render() {
        return (
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control
                            value={this.props.value.nom}
                            onChange={() => { 
                                this.props.value.nom=this.refs.nomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="nomTextInput" placeholder="Nom"
                            
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={this.props.value.prenom}
                            onChange={() => { 
                                this.props.value.prenom=this.refs.prenomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="prenomTextInput" placeholder="Prénom"
                        />
                    </Col>
                </Form.Row>
                <Form.Row>  
                    <Col>
                        <Form.Control
                            value={this.props.value.adresse}
                            onChange={() => { 
                                this.props.value.adresse=this.refs.adresseTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="adresseTextInput" placeholder="Adresse"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={this.props.value.ville}
                            onChange={() => { 
                                this.props.value.ville=this.refs.villeTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="villeTextInput" placeholder="Ville"
                        />
                    </Col>
                </Form.Row>
            </Form>
        );
    }
}

export default FormProfil;