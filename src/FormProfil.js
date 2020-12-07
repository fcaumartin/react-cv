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
        
        // console.log(query.rome);
        //setRome(query.rome);

        props.value.metier=query; 
        props.onProfilChange(props.value)

        // setIsLoading( true );
        // axios.get("https://test.candidatheque.com/api/metiers?libelle=" + query)
        // .then( (data) => {
        //     console.log(data);
        //     setIsLoading( false );
        //     setOptions( data.data );
        // });
        // fetch("https://test.candidatheque.com/api/metiers?libelle=" + query)
        // .then((resp) => resp.json())
        // .then((items) => {
        //     console.log(items);
        //     setOptions(items);
        //     setIsLoading(false);
        // });
        
        
    }

    const loadOptions = (evt, callback) => {
        console.log(evt);
        
        axios.get("https://test.candidatheque.com/api/metiers?libelle=" + evt)
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
                        {/* <Form.Control  className="mb-2"
                            value={this.props.value.titre}
                            onChange={() => { 
                                this.props.value.titre=this.refs.titreTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="titreTextInput" placeholder="Titre"
                        /> */}
                        {/* <AsyncTypeahead   
                            // positionFixed={true}
                            className="mb-2"
                            isLoading={isLoading}
                            id="654"
                            labelKey="libelle"
                            onChange={setMetier}
                            options={options}
                            placeholder="Métier..."
                            selected={metier}
                            // value={metier}
                            minLength={3}
                            onBlur={ (evt) => { 
                                props.value.metier=evt.target.value; 
                                props.onProfilChange(props.value)
                            } }
                            onSearch={ handleSearch }
                            renderMenuItemChildren={(option, props) => (
                                <span>{option.libelle}</span>
                            )}
                        /> */}
                        <AsyncSelect
                            defaultOptions={true}
                            className="mb-2"
                            isClearable={true}
                            loadOptions={loadOptions}
                            getOptionLabel={ (met) => { return met.libelle } }
                            // onInputChange={handleCherche}
                            placeholder="Saisissez votre métier..."
                            onChange={handleChangeMetier}
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