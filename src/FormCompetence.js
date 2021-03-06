import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class FormCompetence extends React.Component {

    handleChange(evt) {
        //console.log(this);
        let competence = {
            libelle: this.refs.libelle.value,
            niveau: this.refs.niveau.value
        };
        this.props.onChange(competence);
    }

    render() {
        return (
            <div >
                <Form >
                <Form.Row className="mb-2">
                        <Col xs={9}>
                            <Form.Control
                                value={this.props.value.libelle}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="libelle" 
                                placeholder="Libelle"
                            />
                        </Col>
                        <Col xs={2}>
                            <Form.Control
                                custom 
                                value={this.props.value.niveau}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="niveau"
                                type="range"
                                min="1"
                                max="5"
                                placeholder="Niveau"

                            />
                        </Col>
                        
                    
                        <Col xs={1}>
                            <Button  onClick={() => this.props.delCompetence(this)} title={'Supprimer cet compétence'}>
                            <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Col>
                    </Form.Row>
                    
                </Form>
            </div>
        );
    }
}

export default FormCompetence;