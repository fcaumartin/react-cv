import React, { useState }  from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Templates() {
    const [style, setStyle] = useState("/template3-2.css");
  
    return (
        <span>
        <link rel="stylesheet" href={style} />
          <DropdownButton variant="secondary"  key={1} id="dropdown-basic-button" title="Modèles" >
              <Dropdown.Item eventKey="/template3-2.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 1</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-3.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 2</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-5.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 3</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-4.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 4</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-7.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 5</Dropdown.Item>
          </DropdownButton>
        </span>
    );
  }

  export default Templates;