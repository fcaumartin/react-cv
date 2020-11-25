import React from 'react';
import Button from 'react-bootstrap/Button';
import FormCompetence from './FormCompetence.js'

class FormCompetences extends React.Component {

    render() {
        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => this.props.addCompetence(evt)}
                >
                    Ajouter une compétence
                </Button>
                <hr />
                <div >
                    {

                        this.props.value.map((formation, i) =>
                            <FormCompetence
                                value={formation}
                                onChange={(exp) => this.props.changeCompetence(i, exp)}
                                delCompetence={() => this.props.delCompetence(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default FormCompetences;