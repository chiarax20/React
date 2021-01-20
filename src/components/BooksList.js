import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const BooksList = ({title, authors,image, id}) => {


    return (
/*visualizza i risultati della chiamata API*/
/*con routerlink reinderizzo l'utente sulla nuova path al momento del click*/
        <div className='BooksList'>
            <h1>"{title}"</h1>
            <img src={image} alt='' />
            <h2>Autore:</h2>
            <h3>{authors}</h3>
            <Link to={`/${id}`}>
            <a className="Link">View Details</a>
            </Link>
        </div>
         
    )
}
export default  BooksList;
