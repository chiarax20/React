import '../App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const BooksCard= (props) => {
    useEffect(() => {
        BooksId()
    },[]);

  const id = props.match.params.id;
  const ApiKey= 'AIzaSyDP8PvT-lidNAQs6BT97a2V3RMYgBKmATI';
  const [Book, setBook] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = useHistory()
 
  /*tasto per tornare indietro*/
  function onClick(e) {
    history.goBack()
  }
  /*chiamata API con parametro id*/
  function BooksId() {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${ApiKey}`)
      .then((data) => {
        setBook(data.data);
        console.log(data, 'console log data');
        setLoading(false);
      });
  }
  /*attende la risposta della chiamata API per caricare l'html*/
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
          
  return(

  /*visualizza la sezione dettagli*/
    <div className="BooksCard">
      <div className='BookCard'>
        <h1>"{Book.volumeInfo.title}"</h1>
        <img src={Book.volumeInfo.imageLinks.thumbnail} alt='' />
        <h2>Autore:</h2>
        <h3> {Book.volumeInfo.authors}</h3>
      </div>
            
      <div className="BooksDetail">
        <p>Lingua: {Book.volumeInfo.language}</p>
        <p>Pagine: {Book.volumeInfo.pageCount}</p>
        <p>Pubblicazione: {Book.volumeInfo.publishedDate}</p>
        <p>Editore:  {Book.volumeInfo.publisher}</p>
        <p>Categoria:  {Book.volumeInfo.categories[0]}</p>                     
        <button className="Back" onClick={onClick}>Back</button>                    
      </div>

    </div>
  )
}
      

export default  BooksCard;