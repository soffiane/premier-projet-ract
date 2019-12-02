import React, { Fragment } from 'react'

//composant stateless : on peut enlever le return comme en programmation fonctionnelle /*props*/
//on va decorer ce component avec du CSS INLINE attribut style de la balise h2 : on peut faire du css conditionnel
const Membre = ({ nom, age, hobby, children }) => {
    /*const name = props.name*/
    //console.log(props)
    return (
        <Fragment>
            <h2 style={{ backgroundColor: age < 10 ? 'yellow' : 'red', color: 'blue' }}>{nom.toUpperCase()} : {age} : {hobby}</h2>
            {children ? <p> {children} </p> : <Fragment />}
        </Fragment>
    )


}

export default Membre