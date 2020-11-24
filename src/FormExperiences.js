import React from 'react';
import Button from 'react-bootstrap/Button';
import FormExperience from './FormExperience.js'

class FormExperiences extends React.Component {

    render() {
        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => this.props.addExperience(evt)}
                >
                    Ajouter une expérience
                </Button>
                <hr />
                <div >
                    {

                        this.props.value.map((experience, i) =>
                            <FormExperience
                                value={experience}
                                onChange={(exp) => this.props.changeExperience(i, exp)}
                                delExperience={() => this.props.delExperience(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

export default FormExperiences;