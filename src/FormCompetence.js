import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class FormCompetence extends React.Component {

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
                        <Col xs={10}>
                            <Form.Control
                                value={this.props.value.libelle}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="libelle" 
                                placeholder="Libelle"
                            />
                        </Col>
                        <Col xs={2}>
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
                            <Button size="sm" onClick={() => this.props.delCompetence(this)} >Supprimer</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default FormCompetence;