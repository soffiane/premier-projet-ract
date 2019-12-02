import React from 'react';
import './Button.css'
{/* on crée ce composant stateless pour se passer d'utiliser le bouton dans App qui change le state et le rendre
reutilisable dans d'autres components */}

const Button = ({action}) => {
    return (
        <button onClick={action}>Cliquez</button>
    );
};

export default Button;