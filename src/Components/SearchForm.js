import React from 'react';
import { useGlobalContext } from '../context';

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }


  return (
    <div className="searchForm-section">
    <div className="form-group">
    <label className="lblll" htmlFor='name'>Search your favorite cocktail</label>
    <div className="form-section">
    <div className="input-group">
              <input type="search" 
                     className="form-control rounded" 
                     name="name"
                     id="name"
                     ref={searchValue}
                     onChange={searchCocktail}
                     placeholder="Search" 
                     aria-label="Search"
                     aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary" onSubmit={handleSubmit}>Search</button>
</div>
</div>
</div>
    </div>
  );
}
