import React, { useState } from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

import FormCompetence from './FormCompetence.js'

const FormCompetences = (props) => {

    const [competence, setCompetence] = useState(""); 

    const loadOptions = (evt, callback) => {
        console.log(evt);
        let id_rome = props.metier.rome.split("/")[3];
        console.log(id_rome);
        axios.get("https://127.0.0.1:8000/api/cv/competences/" + id_rome + "/" + evt )
        .then( (data) => {
            console.log(data);
             
            callback(data.data);
        });
    }

    const handleSelect = (evt) => {
        console.log(evt);
        setCompetence(evt.libelle);
    }

    return (
        <div className="cv">
            <Form.Row className="mb-2">
                <Col className="col-4" md={12}>
                    { props.metier.libelle }
                </Col>
                <Col className="col-4" md={10}>
                    <AsyncSelect
                        loadOptions={loadOptions}
                        getOptionLabel={ (met) => { return met.libelle } }
                        // onInputChange={handleCherche}
                        placeholder="Saisissez une compétence..."
                        onChange={handleSelect}
                        isClearable={true}
                        
                    />
                </Col>
                <Col className="col-4"  md={2}>
                    <Button 
                        variant="primary w-100"
                        onClick={(evt) => { props.addCompetence(evt, competence); console.log("com=" + competence) } }
                    >
                        Ajouter
                    </Button>
                </Col>
            </Form.Row>
            <hr />
            <div >
                {

                    props.value.map((formation, i) =>
                        <FormCompetence
                            value={formation}
                            onChange={(exp) => props.changeCompetence(i, exp)}
                            delCompetence={() => props.delCompetence(i)}
                            key={i}
                        />

                    )
                }
            </div>
        </div>
    );
}

export default FormCompetences;