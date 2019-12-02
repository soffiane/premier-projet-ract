import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Anthony',
    age: 27,
    hobby: 'Crossfit'
  },
  membre2: {
    nom: 'Soffiane',
    age: 33,
    hobby: 'Crossfit'
  },
  membre3: {
    nom: 'Eleanor',
    age: 1,
    hobby: 'Crossfit'
  },
  membre4: {
    nom: 'Mocha',
    age: 2,
    hobby: 'Crossfit'
  },
}

class App extends Component {
  state = {
    famille
  }
  handleClick = (num) => {
    {/* on ne peut pas modifier le state en l'appelant directement this.state.file.name = 'pouet': i lfaut utiliser setState()*/ }
    const famille = { ...this.state.famille }
    famille.membre3.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }
  render() {
    const { titre } = this.props;
    const { famille } = this.state;
    return (
      //cette balise sert juste a envelopper le html sans polluer avec du code html en plus
      <Fragment>
        {/*ce n'est pas du vrai HTML mais du JSX : JSX -> Javascript -> HTML (deux conversions) */}
        <div className="App">
          {/*parametre titre passé dans index.js */}
          <h1>{titre}</h1>
          <p>pouet pouet pouet</p>
          {/* input va mettre a jour le state et se baser sur le state pour afficher la valeur*/}
          <input value={famille.membre1.nom} onChange={this.handleChange} type='text'/>
          {/* on appelle le composant membre : attribut name est un PROPS,ca marche comme un attribut de focntion */}
          <Membre nom={famille.membre1.nom}
          age={famille.membre1.age}
          hobby={famille.membre1.hobby}/>
          <Membre
            nom={famille.membre2.nom}
            age={famille.membre2.age}
            hobby={famille.membre2.hobby}/>
          <Membre
            nom={famille.membre3.nom}
            age={famille.membre3.age}
            hobby={famille.membre3.hobby}
          />
          <Membre
            nom={famille.membre4.nom}
            age={famille.membre4.age}
            hobby={famille.membre4.hobby}
          />
          <Membre nom='Robert'>
            {/* la props Children */}
            contenu Children
          </Membre>
        </div>
        {/*ici, si je met la balise h2 en dehors du div, erreur car il faut tout mettre dans un grand ensemble
      //pour cela on utilise la balise Fragment*/}
        <h2>Pouet deuxieme titre</h2>
        {/*//React.createElement permet de creer des balises html : ici une div et un h1
      //on pourrait ecrire tout le code comme ca mais c'est pas pratique d'ou le JSX
      //React.createElement('div',{className: 'App'},React.createElement('h1',null,'React app'))*/}
        <Button action={() => this.handleClick(2)}>Vieillir</Button>
      </Fragment>
    );
  }
}

//exporter le composant App permet de l'importer dans index.js
export default App;
