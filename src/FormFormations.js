import React from 'react';
import Button from 'react-bootstrap/Button';
import FormFormation from './FormFormation.js'

class FormFormations extends React.Component {

    render() {
        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => this.props.addFormation(evt)}
                >
                    Ajouter une formation
                </Button>
                <hr />
                <div >
                    {

                        this.props.value.map((formation, i) =>
                            <FormFormation
                                value={formation}
                                onChange={(exp) => this.props.changeFormation(i, exp)}
                                delFormation={() => this.props.delFormation(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default FormFormations;