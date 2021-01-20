import React, {useState} from 'react';
import '../App.css';
import BooksList from './BooksList';
import axios from "axios";

function Books () {
 
    const ApiKey= 'AIzaSyDP8PvT-lidNAQs6BT97a2V3RMYgBKmATI';
    const [Search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    /*la funzione assegna alla variabile il valore della stringa inserita nella barra di ricerca*/
    function searchBook(e) {
        const Search = e.target.value;
        setSearch(Search);
    }

    /*la funzione esegue la chiamata API passando la variabile Search come parametro*/
    function handleSubmit(e) {
        e.preventDefault();
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?api_key=${ApiKey}&q=${Search}`)
          .then((data) => {
            setResult(data.data.items);
            console.log(data);
          });
    }
 
    return(
        
        /*form di inserimento dati*/
       <div className="homepage" > 
           <div className='SearchForm'> 
            <form className="Form" onSubmit={handleSubmit}>
                <input  className='SearchBar' type='text' placeholder='search your book...' id='input'  onChange={searchBook}></input>
                <button className='SearchButton' type='submit' id='SearchNameBook'>Search</button>
            </form>
            </div> 
            <div className='Books-container'>
                {result.map((results, i) =>(
                /*passiamo i dati al componente BooksList*/
                    <BooksList
                    key={i}
                    id={results.id}
                    title={results.volumeInfo.title}
                    authors={results.volumeInfo.authors}
                    image={results.volumeInfo.imageLinks.smallThumbnail}
                    />
                ))}
            </div>
        </div>
    )
}   

export default Books;