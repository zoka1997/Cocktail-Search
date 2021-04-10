import React from 'react';
import SearchForm from '../Components/SearchForm';
import CocktailList from '../Components/CocktailsList';
import '../Components/SearchForm.css';
import '../Containers/SingleCocktail.css';

const Home = () => {
    return (
      <div className="main">
        <SearchForm />
        <CocktailList /> 
      </div>
    )
  }
  
  export default Home