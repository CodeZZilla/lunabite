import styled from "styled-components"

export const ModalMainDiv = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;

  &:target {
    visibility: visible;
    opacity: 1;
  }

  hr{
    width: 100%;
  }
`

export const ModalContentDiv = styled.div`
  border-radius: 10px;
  position: relative;
  width: 45vw;
  height: 70vh;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;

  a {
    position: absolute;
    /*display: none;*/
    top: 2vh;
    right: 2vw;
  }

  i {
    font-size: 35px;
  }
`
export const ModalDivHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin:2% 0 2% 0;
  

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #494949;
  }
  
  h3{
    max-width: 25vw;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    margin:2% 0 2% 0;
    color: #494949;

  }
  
  div{
    width: 15vw;
    height: 30vh;
    background: #E5E5E5;
    border: 3px dashed #6F6F6F;
    box-sizing: border-box;
    border-radius: 5px;
  }


`

export const ModalButton = styled.button`
  width: 200px;
  height: 48px;
  margin-top: 2vw;
  border-radius: 10px;
  background: ${props => props.background};
  border: 2px solid #A7A7FF;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  transition: all 0.3s ease;
  color: ${props => props.color};

  &:hover {
    box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .2);
  }

  &:active{
    background: ${props => props.secondBackground}
  }    
    
    
`