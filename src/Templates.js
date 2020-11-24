import React, { useState }  from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Templates() {
    const [style, setStyle] = useState("/assets/css/template1.css");
  
    return (
        <>
        <link rel="stylesheet" href={style} />
          <DropdownButton key={1} id="dropdown-basic-button" title="Modèles" >
              <Dropdown.Item eventKey="/assets/css/template1.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 1</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template2.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 2</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template3.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 3</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template4.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 4</Dropdown.Item>
          </DropdownButton>
            </>
    );
  }

  export default Templates;