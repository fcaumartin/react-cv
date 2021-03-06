import React from 'react';
import axios from 'axios';
// import fetch from 'isomorphic-fetch';

import { Col, Form } from 'react-bootstrap';
// import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import AsyncSelect from 'react-select/async';

const FormProfil = (props) => {

    // const [rome, setRome] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [options, setOptions] = useState([]);

    

    const handleChangeMetier = (query) => {
        
        console.log(query);
        //setRome(query.rome);
        if (query) {
            props.value.metier=query; 
            props.value.titre = query.libelle;
            props.onProfilChange(props.value);
        }

    }

    const loadOptions = (evt, callback) => {
        console.log(evt);
        
        axios.get("https:/127.0.0.1:8000/api/cv/metiers/" + evt)
        .then( (data) => {
            //console.log(data);
            callback(data.data);
        });
    }
    

        return (
            <Form>
                <Form.Row className="mb-2">
                    <Col className="col-4">
                        <Form.Control
                            value={props.value.nom}
                            onChange={(evt) => { 
                                props.value.nom=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Nom"
                            
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.Control
                            value={props.value.prenom}
                            onChange={(evt) => { 
                                props.value.prenom=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Prénom"
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.File 
                                // id="custom-file"
                                label="Photo"
                                data-browse="Choisir"
                                custom
                                // value={this.props.value.logo}
                                // onChange={(evt) => this.handleChange(evt)}
                                
                                placeholder="Logo"
                                onChange={ (elt) => { this.handleUploadPhoto(elt) } }
                            />
                    </Col>
                </Form.Row>
                <Form.Row className="mb-2">  
                    <Col>
                        <Form.Control
                            value={props.value.adresse}
                            onChange={(evt) => { 
                                props.value.adresse=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Adresse"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={props.value.ville}
                            onChange={(evt) => { 
                                props.value.ville=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Ville"
                        />
                    </Col>
                </Form.Row>
                <Form.Row>  
                    <Col>
                        <AsyncSelect
                            defaultOptions={true}
                            className="mb-2"
                            isClearable={true}
                            loadOptions={loadOptions}
                            getOptionLabel={ (met) => { return met.libelle } }
                            getOptionValue={ (met) => { return met.id } }
                            placeholder="Saisissez votre métier..."
                            onChange={handleChangeMetier}
                        />
                        <Form.Control
                            className="mb-2"
                            value={props.value.titre}
                            onChange={(evt) => { 
                                props.value.titre=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Ville"
                        />
                        <Form.Control
                            as="textarea"
                            rows="5"
                            value={props.value.description}
                            onChange={(evt) => { 
                                props.value.description=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Description"
                        />
                    </Col>
                </Form.Row>
            </Form>
        );
}

export default FormProfil;