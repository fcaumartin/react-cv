import React from 'react';
import FormExperiences from './FormExperiences.js';
import FormFormations from './FormFormations.js';
import FormProfil from './FormProfil.js';
import Dialog from './Dialog.js';
import Templates from './Templates.js';
import './CV.css';

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "Doe",
                prenom: "John",
                adresse: "Carnaby Street",
                ville: "London",
                phone: "+33 6 58 96 52 14",
                email: "jodo@yahoo.com",
                titre: "Développeur Web",
                description: "bla bla bla"
            },
            experiences: [
                { 
                    dateDebut: "juillet 2001", 
                    dateFin: "2005", 
                    titre: "stage de découverte", 
                    entreprise: "Aurior", 
                    logo:"image.png", 
                    desciption: "" 
                }
            ],
            formations: [
                { 
                    dateDebut: "1995", 
                    dateFin: "2005", 
                    ecole: "Ecole de le dernière chance",
                    niveau: "6",
                    diplome: "Master Communication",
                    description: ""

                }
            ],
            competences: [
                { libelle: "Javascript", niveau: "2" },
                { libelle: "PHP", niveau: "2" },
                { libelle: "Javascript", niveau: "2" },
                { libelle: "Javascript", niveau: "2" },
            ],
            langues: [
                
            ],
            reseaux: [
                
            ],
        }
    }
    handleProfilChange(pro) {
        this.setState({ profil: pro });
    }
    handleAddExperience(evt) {
        let experiences = this.state.experiences;
        experiences.push({ date: "2020-10-03", mission: "bla bla bla22" });
        this.setState({ experiences });
    }
    handleDelExperience(i) {
        let experiences = this.state.experiences;
        experiences.splice(i, 1);
        this.setState({ experiences });
    }
    handleChangeExperience(i, exp) {
        let experiences = this.state.experiences;
        experiences[i] = exp;
        this.setState({ experiences });
    }
    handleDelFormation(i) {
        let formations = this.state.formations;
        formations.splice(i, 1);
        this.setState({ formations });
    }
    handleChangeFormation(i, exp) {
        let formations = this.state.formations;
        formations[i] = exp;
        this.setState({ formations });
    }
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <Dialog />
                </div>
                <div className="col-6 text-right">
                    <Templates />
                </div>
                
                <div className="col-sm-6">
                    <h1>Module de création de CV.</h1>
                    Cliquez sur les onglets ci-dessous pour compléter les différentes rubriques de votre CV

                        <div className="accordion mt-5" id="accordion1">
                            <div className="card">
                                <div className="card-header" id="heading1">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse1" >
                                            Informations personnelles                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse1" className="collapse show" data-parent="#accordion1">
                                    <div className="card-body">
                                        <FormProfil
                                            value={this.state.profil}
                                            onProfilChange={(evt) => this.handleProfilChange(evt)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="heading2">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse2" >
                                            Experiences                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse2" class="collapse " data-parent="#accordion1">
                                    <div class="card-body">
                                    <FormExperiences
                                        value={this.state.experiences}
                                        addExperience={(evt) => this.handleAddExperience(evt)}
                                        delExperience={(i) => this.handleDelExperience(i)}
                                        changeExperience={(i, exp) => this.handleChangeExperience(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="heading2">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse3" >
                                            Formation                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse3" class="collapse " data-parent="#accordion1">
                                    <div class="card-body">
                                    <FormFormations
                                        value={this.state.formations}
                                        addFormation={(evt) => this.handleAddFormation(evt)}
                                        delFormation={(i) => this.handleDelFormation(i)}
                                        changeFormation={(i, exp) => this.handleChangeFormation(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                </div>

                <div  className="col-sm-6 paper-container">

                    <div className="paper">
                        <section className="identite">
                            <div className="nom">{this.state.profil.prenom} {this.state.profil.nom}</div>
                        </section>
                        <section className="photo">
                            <div className="portrait"></div>
                        </section>
                        <section className="profil">
                            <header>Contact</header>
                            <div className="adresse">{this.state.profil.adresse}</div>
                            <div className="ville">{this.state.profil.ville}</div>
                            <div className="phone">{this.state.profil.phone}</div>
                            <div className="email">{this.state.profil.email}</div>
                        </section>
                        <section className="titre">
                            <div className="poste">{this.state.profil.titre}</div>
                        </section>
                        <section className="intro">
                            <header>Profil</header>
                            <div className="text">{this.state.profil.description}</div>
                        </section>
                        <section className="experiences">
                            <header>Experiences</header>
                            <div >
                                {
                                    this.state.experiences.map((experience) =>
                                        <div className="experience">
                                            <div class="date-debut">{experience.dateDebut}</div>
                                            <div class="date-fin">{experience.dateFin}</div>
                                            <div class="entreprise">{experience.entreprise}</div>
                                            <div class="ville">{experience.ville}</div>
                                            <div class="logo">{experience.logo}</div>
                                            <div class="titre">{experience.titre}</div>
                                            <div class="desciption">{experience.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {
                                    this.state.formations.map((formation) =>
                                        <div className="formation">
                                            <div class="date-debut">{formation.dateDebut}</div>
                                            <div class="date-fin">{formation.dateFin}</div>
                                            <div class="ecole">{formation.entreprise}</div>
                                            <div class="titre">{formation.titre}</div>
                                            <div class="desciption">{formation.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    this.state.competences.map((competence) =>
                                        <div className="competence">
                                            <div class="date-debut">{competence.dateDebut}</div>
                                            <div class="date-fin">{competence.dateFin}</div>
                                            <div class="entreprise">{competence.entreprise}</div>
                                            <div class="ville">{competence.ville}</div>
                                            <div class="logo">{competence.logo}</div>
                                            <div class="titre">{competence.titre}</div>
                                            <div class="desciption">{competence.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="langues">
                            <header>Langues</header>
                            <div >
                                {
                                    this.state.langues.map((langue) =>
                                        <div className="langue">
                                            <div class="date-debut">{langue.dateDebut}</div>
                                            <div class="date-fin">{langue.dateFin}</div>
                                            <div class="entreprise">{langue.entreprise}</div>
                                            <div class="ville">{langue.ville}</div>
                                            <div class="logo">{langue.logo}</div>
                                            <div class="titre">{langue.titre}</div>
                                            <div class="desciption">{langue.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="reseaux">
                            <header>Réseaux</header>
                            <div >
                                {
                                    this.state.reseaux.map((reseau) =>
                                        <div className="reseau">
                                            <div class="date-debut">{reseau.dateDebut}</div>
                                            <div class="date-fin">{reseau.dateFin}</div>
                                            <div class="entreprise">{reseau.entreprise}</div>
                                            <div class="ville">{reseau.ville}</div>
                                            <div class="logo">{reseau.logo}</div>
                                            <div class="titre">{reseau.titre}</div>
                                            <div class="desciption">{reseau.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        );
    }
}

export default CV;