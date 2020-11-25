import React from 'react';
import Button from 'react-bootstrap/Button';
import FormLangue from './FormLangue.js'

class FormLangues extends React.Component {

    render() {
        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => this.props.addLangue(evt)}
                >
                    Ajouter une langue
                </Button>
                <hr />
                <div >
                    {

                        this.props.value.map((formation, i) =>
                            <FormLangue
                                value={formation}
                                onChange={(exp) => this.props.changeLangue(i, exp)}
                                delLangue={() => this.props.delLangue(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default FormLangues;