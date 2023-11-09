import React, { useState } from 'react';

function Search(props) {
  const [searchText, setSearchText] = useState(''); // Estado para almacenar el texto de búsqueda

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe

    // Llama a la función de búsqueda en el componente padre (Home)
    props.onSearch(searchText.toLowerCase());
  };

  return (
    <div className="col-12 col-lg-3 mt-3 mt-md-0">
      <form className="d-flex align-items-center mb-3" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

