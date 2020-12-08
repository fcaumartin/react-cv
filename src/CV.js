import React from 'react';
import { Button } from 'react-bootstrap';

import FormExperiences from './FormExperiences.js';
import FormFormations from './FormFormations.js';
import FormProfil from './FormProfil.js';
import Dialog from './Dialog.js';
import Templates from './Templates.js';
import FormCompetences from './FormCompetences.js';
import FormLangues from './FormLangues.js';
import FormReseaux from './FormReseaux.js';

import './CV.css';

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "Wong",
                prenom: "Kar-wai",
                adresse: "Carnaby Street",
                ville: "London",
                phone: "+33 6 58 96 52 14",
                email: "jodo@yahoo.com",
                titre: "Développeur Web",
                description: "Après une thèse de biochimie et un post-doc en chimiométrie pendant lesquels j'avais développé un certain nombre d'outils informatiques...",
                photo: "http://test.candidatheque.com/assets/photos/profil4.png",
                metier: {}
            },
            experiences: [
                { 
                    dateDebut: "2018", 
                    dateFin: "maintenant", 
                    titre: "Lead developer", 
                    entreprise: "TheBox", 
                    logo:"http://test.candidatheque.com/assets/photos/logo1.png", 
                    description: "azeazeaze" 
                },
                { 
                    dateDebut: "2012", 
                    dateFin: "2018", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    logo:"http://test.candidatheque.com/assets/photos/logo2.png", 
                    description: "dfgdfgdfg" 
                },
                { 
                    dateDebut: "2005", 
                    dateFin: "2012", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    logo:"http://test.candidatheque.com/assets/photos/logo3.png", 
                    description: "uiouiouio" 
                }
            ],
            formations: [
                { 
                    dateDebut: "2003", 
                    dateFin: "2004", 
                    ecole: "BTS - Chimie des particules",
                    niveau: "3",
                    diplome: "",
                    description: "La raison que je donnais maintenant dans mes lettres à Gilberte, de mon refus de la voir, c'était une allusion à quelque mystérieux malentendu, parfaitement fictif, qu'il y aurait eu entre elle et moi."

                },
                { 
                    dateDebut: "2004", 
                    dateFin: "2005", 
                    ecole: "Ecole de le dernière chance",
                    niveau: "2",
                    diplome: "Master Communication",
                    description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."

                }
            ],
            competences: [
                { libelle: "Javascript", niveau: "5" },
                { libelle: "PHP", niveau: "2" },
                { libelle: "Symfony", niveau: "1" },
                { libelle: "React", niveau: "3" },
            ],
            langues: [
                { libelle: "Anglais", niveau: "5" },
                { libelle: "Allemand", niveau: "2" }
            ],
            reseaux: [
                { type: "LinkedIn", url: "https://linkedin.com/..." },
                { type: "GitHub", url: "https://github.com/..." }
            ],
        }
    }
    handleSaveLocal() {
        localStorage.setItem('be4web_cv', JSON.stringify(this.state));
    }
    handleLoadLocal() {
        this.setState(JSON.parse(localStorage.getItem('be4web_cv')));
    }
    handleProfilChange(pro) {
        this.setState({ profil: pro });
        this.handleSaveLocal();
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
        formations.push({ dateDebut: "", dateFin: "", ecole: "", niveau: "", diplome: "", description: "" });
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
    handleAddCompetence(evt, com) {
        console.log("+++++++++++++++++++");
        console.log(com);
        console.log("-----------------");
        let competences = this.state.competences;
        competences.push({ libelle: com, niveau: "5"});
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
    //////////////////////////////////////////////////////////////
    handleAddLangue(evt) {
        let langues = this.state.langues;
        langues.push({ libelle: "", niveau: ""});
        this.setState({ langues });
    }
    handleDelLangue(i) {
        let langues = this.state.langues;
        langues.splice(i, 1);
        this.setState({ langues });
    }
    handleChangeLangue(i, exp) {
        let langues = this.state.langues;
        langues[i] = exp;
        this.setState({ langues });
    }
    //////////////////////////////////////////////////////////////
    handleAddReseau(evt) {
        let reseaux = this.state.reseaux;
        reseaux.push({ type: "", url: ""});
        this.setState({ reseaux });
    }
    handleDelReseau(i) {
        let reseaux = this.state.reseaux;
        reseaux.splice(i, 1);
        this.setState({ reseaux });
    }
    handleChangeReseau(i, exp) {
        let reseaux = this.state.reseaux;
        reseaux[i] = exp;
        this.setState({ reseaux });
    }
    render() {
        return (
            <div className="row">
                <div className="col-6 no-print">
                    {/* <Dialog /> */}
                </div>
                <div className="col-6 text-right no-print mt-5">
                    <Templates />
                </div>
                
                <div className="col-sm-6 no-print">
                    <div className="row">
                        <div className="col-9">
                            <h1>Module de création de CV.</h1>
                        </div>
                        {/* <div className="col-3 text-right">
                        <Button variant="secondary" onClick={ () => { this.handleSaveLocal(); } }>Save</Button>&nbsp;
                        <Button variant="secondary" onClick={ () => { this.handleLoadLocal(); } }>Load</Button>
                        </div> */}
                    </div>
                    
                    Cliquez sur les onglets ci-dessous pour compléter les différentes rubriques de votre CV

                        <div className="accordion mt-5" id="accordion1">
                            <div className="card" style={{overflow: 'visible'}}>
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
                            <div className="card"  style={{overflow: 'visible'}}>
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
                                        metier={this.state.profil.metier}
                                        addCompetence={(evt, com) => this.handleAddCompetence(evt, com)}
                                        delCompetence={(i) => this.handleDelCompetence(i)}
                                        changeCompetence={(i, exp) => this.handleChangeCompetence(i, exp)}
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
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse5" >
                                            Langues                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse5" className="collapse " data-parent="#accordion1">
                                    <div className="card-body">
                                    <FormLangues
                                        value={this.state.langues}
                                        addLangue={(evt) => this.handleAddLangue(evt)}
                                        delLangue={(i) => this.handleDelLangue(i)}
                                        changeLangue={(i, exp) => this.handleChangeLangue(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="heading2">
                                    <h2 className="mb-0">
                                        <button className="btn btn-block btn-sm text-left font-weight-bold" type="button" data-toggle="collapse" data-target="#collapse6" >
                                            Réseaux sociaux                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse6" className="collapse " data-parent="#accordion1">
                                    <div className="card-body">
                                    <FormReseaux
                                        value={this.state.reseaux}
                                        addReseau={(evt) => this.handleAddReseau(evt)}
                                        delReseau={(i) => this.handleDelReseau(i)}
                                        changeReseau={(i, exp) => this.handleChangeReseau(i, exp)}
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
                            <div className="portrait"><img src={this.state.profil.photo}/></div>
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
                                            <div className="logo"><img alt="image" src={experience.logo}/></div>
                                            <div className="titre">{experience.titre}</div>
                                            <div className="description">{experience.description}</div>
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
                                            <div className="ecole">{formation.ecole}</div>
                                            <div className="titre">{formation.diplome}</div>
                                            <div className="niveau">{formation.niveau}</div>
                                            <div className="description">{formation.description}</div>
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
                                            <div className={"niveau niveau-" + competence.niveau}>{competence.niveau}</div>
                                            <meter max="5" value={competence.niveau}></meter>
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
                                            <div className="libelle">{langue.libelle}</div>
                                            <div className="niveau">{langue.niveau}</div>
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
                                            <div className="libelle no-screen">{reseau.type}</div>
                                            <div className="libelle no-screen">{reseau.url}</div>
                                            <div className="niveau no-print">
                                                <a href="{reseau.url}">{reseau.type}</a>
                                            </div>
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