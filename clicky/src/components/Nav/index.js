import React from "react";
import NavMessage from "../NavMessage";
import { Jumbotron, Container } from 'reactstrap';

const Nav = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1> The Office Cicky Game</h1>
          <p >Click on a member of The Office! Don't repeat to score!</p>
          <ul>
            <NavMessage score={props.score} topScore={props.topScore} />
            <li>
              Score: {props.score} 
            </li>
          </ul>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Nav;
