import React, { useState, useEffect }  from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import $ from 'jquery';

function Templates() {
	const [style, setStyle] = useState("/template3-2.css");
  // const [key, setKey] = useState('/template3-2.css');
  
    const handleSelect = (k) => {
      setStyle(k); 
      //console.log("go"); 
      //window.dispatchEvent(new Event('resize'));
      setTimeout( ()=>{window.dispatchEvent(new Event('resize'));}, 500 );
    }

    //useEffect(() => {
      //console.log("go ue"); 
      //window.dispatchEvent(new Event('resize'));
    //});
  
    return (
        <span>
			<link rel="stylesheet" href={style} />
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" activeKey={style} 
                onSelect={(k) => { handleSelect(k) } }>
            <Tab eventKey="/template3-2.css" title="Raw"></Tab>
            <Tab eventKey="/template3-3.css" title="Gray"></Tab>
            <Tab eventKey="/template3-5.css" title="Green" ></Tab>
            <Tab eventKey="/template3-4.css" title="Blue" ></Tab>
            <Tab eventKey="/template3-7.css" title="Green carpet" ></Tab>
            <Tab eventKey="/template3-6.css" title="Cool blue" ></Tab>
            <Tab eventKey="/template3-1.css" title="Mod 7" ></Tab>
            <Tab eventKey="/template3-8.css" title="Red" ></Tab>
            <Tab eventKey="/template3-9.css" title="Dark" ></Tab>
          </Tabs>
        {/* 
          <DropdownButton variant="secondary"  key={1} id="dropdown-basic-button" title="Modèles" >
              <Dropdown.Item eventKey="/template3-2.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 1</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-3.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 2</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-5.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 3</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-4.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 4</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-7.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 5</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-6.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 6</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-1.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 7</Dropdown.Item>
              <Dropdown.Item eventKey="/template3-8.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Modèle 8</Dropdown.Item>
          </DropdownButton> */}
        </span>
    );
  }

  export default Templates;