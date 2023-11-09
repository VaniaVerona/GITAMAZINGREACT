import React, { useState } from 'react';
import './style.css';

function Checkbox(props) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);

  const actualizarCheckboxChange = (event) => {
    const categoriaSeleccionada = event.target.value;
    let nuevasCategoriasSeleccionadas;
    if (categoriasSeleccionadas.includes(categoriaSeleccionada)) {
      nuevasCategoriasSeleccionadas = categoriasSeleccionadas.filter((categoria) => categoria !== categoriaSeleccionada);
    } else {
      nuevasCategoriasSeleccionadas = [...categoriasSeleccionadas, categoriaSeleccionada];
    }
    setCategoriasSeleccionadas(nuevasCategoriasSeleccionadas);
    props.onCategoryChange(nuevasCategoriasSeleccionadas); // Invoca la función pasada como prop con las categorías seleccionadas.
  };
  
  const renderCheckboxes = () => {
    return props.categorias.map((categoria) => (
      <div key={categoria} className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={categoria}
          onChange={actualizarCheckboxChange}
          id={`checkbox-${categoria}`}
          checked={categoriasSeleccionadas.includes(categoria)}
        />
        <label className="form-check-label text-white" htmlFor={`checkbox-${categoria}`}>
          <strong>{categoria}</strong>
        </label>
      </div>
    ));
  };

  return (
    <div className="col-12 col-lg-9">
      <div id="category-checkboxes" className="d-flex flex-column flex-md-row align-items-center">
        {renderCheckboxes()}
      </div>
    </div>
  );
}

export default Checkbox;
