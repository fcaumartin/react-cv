import React from 'react';
import axios from 'axios';

import { Col, Form, Button } from 'react-bootstrap';

class FormProfil extends React.Component {

    handleUploadPhoto() {
        console.log("send");
        axios.post("https://127.0.0.1:8000/api/test", {})
        .then( (res) => {
            console.log("return");
            console.log(res);
        });
    }

    render() {
        return (
            <Form>
                <Form.Row className="mb-2">
                    <Col className="col-4">
                        <Form.Control
                            value={this.props.value.nom}
                            onChange={() => { 
                                this.props.value.nom=this.refs.nomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="nomTextInput" placeholder="Nom"
                            
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.Control
                            value={this.props.value.prenom}
                            onChange={() => { 
                                this.props.value.prenom=this.refs.prenomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="prenomTextInput" placeholder="Prénom"
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.File 
                                id="custom-file"
                                label="Photo"
                                data-browse="Choisir"
                                custom
                                // value={this.props.value.logo}
                                // onChange={(evt) => this.handleChange(evt)}
                                ref="logo"
                                placeholder="Logo"
                                onChange={ (elt) => { this.handleUploadPhoto(elt) } }
                            />
                    </Col>
                </Form.Row>
                <Form.Row className="mb-2">  
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
                <Form.Row>  
                    <Col>
                        <Form.Control  className="mb-2"
                            value={this.props.value.titre}
                            onChange={() => { 
                                this.props.value.titre=this.refs.titreTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="titreTextInput" placeholder="Titre"
                        />
                        <Form.Control
                            as="textarea"
                            value={this.props.value.description}
                            onChange={() => { 
                                this.props.value.description=this.refs.descriptionTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="descriptionTextInput" placeholder="Desciption"
                        />
                    </Col>
                </Form.Row>
            </Form>
        );
    }
}

export default FormProfil;