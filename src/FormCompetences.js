import React, { useState } from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import FormCompetence from './FormCompetence.js'

const FormCompetences = (props) => {

    const [competence, setCompetence] = useState(""); 

    const loadOptions = (evt, callback) => {
        console.log("loading react-select async for competences")
        console.log(props.metier);

        // if ('rome' in props.metier && 'competences' in props.metier.rome) {
        //     let data = props.metier.rome.competences.filter( c => c.libelle.toLowerCase().includes(evt) );
        //     console.log(data);
        //     callback(data);
        // }
        let id_metier = props.metier.id;
        console.log(id_metier);
        axios.get("https://127.0.0.1:8000/api/cv/competences/" + id_metier + "/" + evt )
        .then( (data) => {
            console.log(data);
             
            callback(data.data);
        });
    }

    const handleSelect = (evt) => {
        console.log(evt);
        if (evt)
            setCompetence(evt.libelle);
    }

    return (
        <div className="cv">
            <Form.Row className="mb-2">
                <Col className="col-4" md={12}>
                    { props.metier?props.metier.libelle:'vous pouvez selectionner dans la rubrique Informations personnelles (ci-dessus)' }
                </Col>
                <Col className="col-4" md={10}>
                    <AsyncSelect
                        cacheOptions
                        defaultOptions={loadOptions}
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
                        <FontAwesomeIcon icon={faPlus} />
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