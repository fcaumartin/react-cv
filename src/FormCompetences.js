import React, { useState } from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import FormCompetence from './FormCompetence.js'

const FormCompetences = (props) => {

    const [competence, setCompetence] = useState(""); 

        return (
            <div className="cv">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Compétence à ajouter"
                        value={competence}
                        onChange={ (evt) => setCompetence(evt.target.value)}
                    />
                    <InputGroup.Append>
                        <Button 
                            variant="outline-secondary"
                            onClick={(evt) => { props.addCompetence(evt, competence); console.log("com=" + competence) } }
                        >
                            Ajouter
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
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