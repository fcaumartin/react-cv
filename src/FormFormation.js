import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class FormFormation extends React.Component {

    handleChange(evt) {
        //console.log(this);
        let formation = {
            dateDebut: this.refs.dateDebut.value,
            description: this.refs.description.value
        };
        this.props.onChange(formation);
    }

    render() {
        return (
            <div >
                <Form >
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={this.props.value.dateDebut}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="dateDebut"
                                placeholder="Date de début"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                value={this.props.value.dateFin}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="dateFin"
                                placeholder="Date de fin"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={this.props.value.titre}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="titre" 
                                placeholder="Titre"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={this.props.value.entreprise}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="entreprise" 
                                placeholder="Entreprise"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={this.props.value.ville}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="ville"
                                placeholder="Ville"
                            />
                        </Col>
                        <Col>
                            <Form.File 
                                id="custom-file"
                                label="Logo"
                                custom
                                // value={this.props.value.logo}
                                // onChange={(evt) => this.handleChange(evt)}
                                ref="logo"
                                placeholder="Logo"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                as="textarea"
                                value={this.props.value.description}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="description" 
                                placeholder="Description"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Button onClick={() => this.props.delFormation(this)} >Supprimer</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FormFormation;