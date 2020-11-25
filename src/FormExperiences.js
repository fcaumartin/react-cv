import React from 'react';
import Button from 'react-bootstrap/Button';
import FormExperience from './FormExperience.js'

class FormExperiences extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    Vous pouvez gérer vos expèriences dans cette section...<br />
                    <Button 
                        size="sm"
                        onClick={(evt) => this.props.addExperience(evt)}
                    >
                        Ajouter
                    </Button>
                    <hr className="my-2"/>
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
            </div>
        );
    }
}

export default FormExperiences;