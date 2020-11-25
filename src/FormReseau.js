import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

class FormLangue extends React.Component {

    handleChange(evt) {
        //console.log(this);
        let reseau = {
            type: this.refs.type.value,
            url: this.refs.url.value
        };
        this.props.onChange(reseau);
    }

    render() {
        return (
            <div >
                <Form >
                <Form.Row className="mb-2">
                        <Col xs={2}>
                            <Form.Control
                                value={this.props.value.type}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="type" 
                                placeholder="Nom"
                            />
                        </Col>
                        <Col xs={9}>
                            <Form.Control
                                value={this.props.value.url}
                                onChange={(evt) => this.handleChange(evt)}
                                ref="url"
                                placeholder="Adresse du profil"
                            />
                        </Col>
                        
                    
                        <Col xs={1}>
                            <Button  onClick={() => this.props.delReseau(this)} >X</Button>
                        </Col>
                    </Form.Row>
                    
                </Form>
            </div>
        );
    }
}

export default FormLangue;