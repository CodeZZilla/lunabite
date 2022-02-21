import styled from "styled-components";
import {ContainerCreateNFT} from "./CreateNewNFT.styled";

export const ToggleDiv = styled(ContainerCreateNFT)`
  display: flex;
  flex-direction: row;
  justify-content: start;

`

export const ToggleIcon = styled.div`
  width: 10%;
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 1vh;
`

export const ToggleTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: start;
  
  h3{
    width: 100%;
    margin: 0;
  }

`
export const ToggleDivBtn = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
`

