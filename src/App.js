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
    famille,
    isShown: false
  }
  handleClick = (num) => {
    {/* on ne peut pas modifier le state en l'appelant directement this.state.file.name = 'pouet': i lfaut utiliser setState()*/ }
    const famille = { ...this.state.famille }
    famille.membre3.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }


  hideName = (id) => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  handleShowChildren = () => {
    const isShown = !this.state.isShown
    this.setState({ isShown })
  }
  render() {
    const { titre } = this.props;
    const { famille, isShown } = this.state;

    /*dans le render on peut ecrire des if else*/
    /*le rendu conditionnel est declaré dans une variable dans le render, ce qui est plus propre que d'utiliser un ternaire dans le JSX*/
    /*let permet de declarer une variable*/
    let description = null
    if(isShown){
      description = <strong>contenu Children</strong>
    }

    /* fabriquer une liste pour pouvoir boucler dessus : on va creer une balise Membre pour chaque clé de la liste famille*/
    /*on ajoute une fonction a la classe Membre que l'on passe en parametre lors de la creation du membre*/
    /* la cle key (unique) permet d'aider react a identifier des components isolé au lieu de recharger toute la liste a chaque modif (pour des soucis de perf): alerte console*/
    /*key n'est pas une props */
    const liste = Object.keys(famille).map(membre => (
      <Membre 
      key={membre}
      age={famille[membre].age} 
      nom={famille[membre].nom}
      handleChange={event => this.handleChange(event,membre)}
      hideName={() => this.hideName(membre)}/>
    ))

    return (
      //cette balise sert juste a envelopper le html sans polluer avec du code html en plus
      <Fragment>
        {/*ce n'est pas du vrai HTML mais du JSX : JSX -> Javascript -> HTML (deux conversions) */}
        {/*//React.createElement permet de creer des balises html : ici une div et un h1
      //on pourrait ecrire tout le code comme ca mais c'est pas pratique d'ou le JSX
      //React.createElement('div',{className: 'App'},React.createElement('h1',null,'React app'))*/}
        <div className="App">
          {/*parametre titre passé dans index.js */}
          <h1>{titre}</h1>
          <p>pouet pouet pouet</p>
          {/* on appelle le composant membre : attribut name est un PROPS,ca marche comme un attribut de focntion */}
          {liste}
          {/*<Membre nom={famille.membre1.nom}
            age={famille.membre1.age}
            hobby={famille.membre1.hobby} />
          <Membre
            nom={famille.membre2.nom}
            age={famille.membre2.age}
            hobby={famille.membre2.hobby} />
          <Membre
            nom={famille.membre3.nom}
            age={famille.membre3.age}
            hobby={famille.membre3.hobby}
          />
          <Membre
            nom={famille.membre4.nom}
            age={famille.membre4.age}
            hobby={famille.membre4.hobby}
          /> */}
          <Membre nom='Robert'>
            {/* ce bouton va afficher/masquer la props children en fonction d'un boolean isShown */}
            <button onClick={this.handleShowChildren}>
              {
                /*ternaire bien pour les cas simples mais pas pour les compliqué */
                isShown ? 'Masquer' : 'Montrer'
              }</button>
            {/* la props Children */}
            {description}
          </Membre>
        </div>
        {/*ici, si je met la balise h2 en dehors du div, erreur car il faut tout mettre dans un grand ensemble
      //pour cela on utilise la balise Fragment*/}
        <h2>Pouet deuxieme titre</h2>
        <Button action={() => this.handleClick(2)}>Vieillir</Button>
      </Fragment>
    );
  }
}

//exporter le composant App permet de l'importer dans index.js
export default App;
