import React from "react";
import { CSSTransition } from "react-transition-group";
import slide from "../../transitions/slide.module.css";

const Filter = ({ flag, nameFilter }) => (
  <CSSTransition timeout={250} in={flag} classNames={slide} unmountOnExit>
    <div>
      <h2>Find contact by name</h2>
      <input type="text" onChange={(e) => nameFilter(e.target.value)} />
    </div>
  </CSSTransition>
);

export default Filter;
