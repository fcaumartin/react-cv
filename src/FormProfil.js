import React, { useState } from 'react';
import axios from 'axios';
// import fetch from 'isomorphic-fetch';

// import { Col, Form } from 'react-bootstrap';
// import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import {AutoComplete, TextField} from '@material-ui/core';

const FormProfil = (props) => {

    const [metier, setMetier] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    

    const handleSearch = (query) => {
        setIsLoading( true );
        axios.get("https://test.candidatheque.com/api/metiers?libelle=" + query)
        .then( (data) => {
            console.log(data);
            setIsLoading( false );
            setOptions( data.data );
        });
        // fetch("https://test.candidatheque.com/api/metiers?libelle=" + query)
        // .then((resp) => resp.json())
        // .then((items) => {
        //     console.log(items);
        //     setOptions(items);
        //     setIsLoading(false);
        // });
        
        
    }
    

        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                        <TextField
                            value={props.value.nom}
                            onChange={(evt) => { 
                                props.value.nom=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Nom"
                            
                        />
                    
                        <TextField
                            value={props.value.prenom}
                            onChange={(evt) => { 
                                props.value.prenom=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Prénom"
                        />
                    </div>
                        {/* <Form.File 
                                id="custom-file"
                                label="Photo"
                                data-browse="Choisir"
                                custom
                                // value={this.props.value.logo}
                                // onChange={(evt) => this.handleChange(evt)}
                                
                                placeholder="Logo"
                                onChange={ (elt) => { this.handleUploadPhoto(elt) } }
                            /> */}
                    
                <div>
                        <TextField
                            value={props.value.adresse}
                            onChange={(evt) => { 
                                props.value.adresse=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Adresse"
                        />
                   
                        <TextField
                            value={props.value.ville}
                            onChange={(evt) => { 
                                props.value.ville=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Ville"
                        />
                    </div>
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
                        <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                        <Form.Control
                            as="textarea"
                            value={props.value.description}
                            onChange={(evt) => { 
                                props.value.description=evt.target.value; 
                                props.onProfilChange(props.value)
                            }}
                            placeholder="Desciption"
                        />
                    </Col>
                </Form.Row>
            </form>
        );
}

export default FormProfil;