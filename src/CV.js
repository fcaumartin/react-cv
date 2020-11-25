import React from 'react';
import FormExperiences from './FormExperiences.js';
import FormFormations from './FormFormations.js';
import FormProfil from './FormProfil.js';
import Dialog from './Dialog.js';
import Templates from './Templates.js';
import './CV.css';
import FormCompetences from './FormCompetences.js';

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
                { libelle: "Javascript", niveau: "5" },
                { libelle: "PHP", niveau: "2" },
                { libelle: "Symfony", niveau: "1" },
                { libelle: "React", niveau: "3" },
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
    //////////////////////////////////////////////////////////////
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
    //////////////////////////////////////////////////////////////
    handleAddFormation(evt) {
        let formations = this.state.formations;
        formations.push({ dateDebut: "", dateFin: "", ecole: "", niveau: "", diplome: "", desciption: "" });
        this.setState({ formations });
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
    //////////////////////////////////////////////////////////////
    handleAddCompetence(evt) {
        let competences = this.state.competences;
        competences.push({ dateDebut: "", dateFin: "", ecole: "", niveau: "", diplome: "", desciption: "" });
        this.setState({ competences });
    }
    handleDelCompetence(i) {
        let competences = this.state.competences;
        competences.splice(i, 1);
        this.setState({ competences });
    }
    handleChangeCompetence(i, exp) {
        let competences = this.state.competences;
        competences[i] = exp;
        this.setState({ competences });
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
                                <div id="collapse2" className="collapse " data-parent="#accordion1">
                                    <div className="card-body">
                                    <FormExperiences
                                        value={this.state.experiences}
                                        addExperience={(evt) => this.handleAddExperience(evt)}
                                        delExperience={(i) => this.handleDelExperience(i)}
                                        changeExperience={(i, exp) => this.handleChangeExperience(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="heading2">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse3" >
                                            Formation                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse3" className="collapse " data-parent="#accordion1">
                                    <div className="card-body">
                                    <FormFormations
                                        value={this.state.formations}
                                        addFormation={(evt) => this.handleAddFormation(evt)}
                                        delFormation={(i) => this.handleDelFormation(i)}
                                        changeFormation={(i, exp) => this.handleChangeFormation(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="heading2">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse4" >
                                            Competences                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse4" className="collapse " data-parent="#accordion1">
                                    <div className="card-body">
                                    <FormCompetences
                                        value={this.state.competences}
                                        addCompetence={(evt) => this.handleAddCompetence(evt)}
                                        delCompetence={(i) => this.handleDelCompetence(i)}
                                        changeCompetence={(i, exp) => this.handleChangeCompetence(i, exp)}
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
                                    this.state.experiences.map((experience, index) =>
                                        <div className="experience"  key={index}>
                                            <div className="date-debut">{experience.dateDebut}</div>
                                            <div className="date-fin">{experience.dateFin}</div>
                                            <div className="entreprise">{experience.entreprise}</div>
                                            <div className="ville">{experience.ville}</div>
                                            <div className="logo">{experience.logo}</div>
                                            <div className="titre">{experience.titre}</div>
                                            <div className="desciption">{experience.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {
                                    this.state.formations.map((formation, index) =>
                                        <div className="formation"  key={index}>
                                            <div className="date-debut">{formation.dateDebut}</div>
                                            <div className="date-fin">{formation.dateFin}</div>
                                            <div className="ecole">{formation.entreprise}</div>
                                            <div className="titre">{formation.titre}</div>
                                            <div className="desciption">{formation.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    this.state.competences.map((competence, index) =>
                                        <div className="competence"  key={index}>
                                            <div className="libelle">{competence.libelle}</div>
                                            <div className="niveau">{competence.niveau}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="langues">
                            <header>Langues</header>
                            <div >
                                {
                                    this.state.langues.map((langue, index) =>
                                        <div className="langue"  key={index}>
                                            <div className="date-debut">{langue.dateDebut}</div>
                                            <div className="date-fin">{langue.dateFin}</div>
                                            <div className="entreprise">{langue.entreprise}</div>
                                            <div className="ville">{langue.ville}</div>
                                            <div className="logo">{langue.logo}</div>
                                            <div className="titre">{langue.titre}</div>
                                            <div className="desciption">{langue.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="reseaux">
                            <header>Réseaux</header>
                            <div >
                                {
                                    this.state.reseaux.map((reseau, index) =>
                                        <div className="reseau"  key={index}>
                                            <div className="date-debut">{reseau.dateDebut}</div>
                                            <div className="date-fin">{reseau.dateFin}</div>
                                            <div className="entreprise">{reseau.entreprise}</div>
                                            <div className="ville">{reseau.ville}</div>
                                            <div className="logo">{reseau.logo}</div>
                                            <div className="titre">{reseau.titre}</div>
                                            <div className="desciption">{reseau.description}</div>
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