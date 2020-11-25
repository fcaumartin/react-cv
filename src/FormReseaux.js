import React from 'react';
import Button from 'react-bootstrap/Button';
import FormReseau from './FormReseau.js'

class FormReseaux extends React.Component {

    render() {
        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => this.props.addReseau(evt)}
                >
                    Ajouter une réseau social
                </Button>
                <hr />
                <div >
                    {

                        this.props.value.map((reseau, i) =>
                            <FormReseau
                                value={reseau}
                                onChange={(exp) => this.props.changeReseau(i, exp)}
                                delReseau={() => this.props.delReseau(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default FormReseaux;