import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class FormFormation extends React.Component {

    handleChange(evt) {
        //console.log(this);
        let formation = {
            dateDebut: this.refs.dateDebut.value,
            dateFin: this.refs.dateFin.value,
            ecole: this.refs.ecole.value,
            description: this.refs.description.value,
            diplome: this.refs.diplome.value,
            niveau: this.refs.niveau.value
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
                                value={this.props.value.ecole}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="ecole" 
                                placeholder="Ecole"
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
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={this.props.value.diplome}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="diplome"
                                placeholder="Diplome"
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                value={this.props.value.niveau}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="niveau"
                                placeholder="Niveau"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Button size="sm" onClick={() => this.props.delFormation(this)} >Supprimer</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FormFormation;