import styled from 'styled-components'
import LinkTab from "../../Explore/LinkTab";


export const ExploreBlock = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0;
    color: rgb(4, 17, 29);
    margin: 5vh 0 5vh 0;
  }

  a {
    font-size: 18px;
    font-weight: 700;
    color: #6F6F6F;
    text-decoration: none;
    transition: all 0.45s;
  }

  a:hover {
    color: black;
  }

`


