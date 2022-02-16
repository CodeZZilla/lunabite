import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  height: 8vh;
  background-color: white;
  z-index: 9999;
  -webkit-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
  height: 100%;
  width: 15vw;

  a {
    text-decoration: none;
    color: #282c34;
  }
`

export const SearchStyled = styled.input`
  width: 45vw;
  padding: 15px 20px;
  font-size: 15px;
  color: #575756;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 95% 50%;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  outline: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' 
  height='35' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5
   3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 
   9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");

  &:focus {
    -webkit-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    -moz-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    box-shadow: -1px 0 6px -1px rgba(34, 60, 80, 1);
  }
`

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  height: 100%;
`

export const LiStyled = styled.li`
  width: 7vw;
  transition: background-position-x 0.9s linear;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: 18px;
    color: #6F6F6F;
    text-decoration: none;
    transition: all 0.45s;
  }

  a:hover {
    color: black;
  }
`

export const HoverMenuItem = styled.div`
  position: absolute;
  z-index: 10299;
  top: 100px;

`

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 100%, #80B1FF, #81C7EE 10%, #83FFC1 100%, #333 10%);
  border-style: none;
  border-radius: 100px;
  --button-size: calc(var(--nav-size) * 0.5);
  width: calc(var(--button-size) * 1.2);
  height: calc(var(--button-size) * 1.2);
  text-align: start;
  font-weight: 300;
  font-size: 16px;
  color: #6F6F6F;
  text-decoration: none;
  
  &:hover {
    -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0 2px 2px 2px rgba(34, 60, 80, 0.2);
  }
`

export const MenuDropDown = styled.div`
  top: 8vh;
  right: 5vw;
  background: white;
  border: 0;
  position: absolute;
  z-index: 9999;
  border-radius: 0 0 10px 10px;
  -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: -2px 2px 2px 0px rgba(34, 60, 80, 0.2);
`

export const MenuItem = styled.div`
  border-radius: 10px 10px 10px 10px;
  padding: 4px;
  
  a{
    outline: none;
    text-decoration: none;
    color: #282c34;
  }
  
  a:hover{
    color:black;
  }
`

export const ButtonDropDown = styled.button`
  width: 200px;
  height: 48px;
  background:white;
  border: .1px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  transition: all 0.3s ease;
  color: #6F6F6F;
  border-radius: 10px 10px 10px 10px;

  &:hover {
    box-shadow: -1px 2px 5px 1px rgba(120, 60, 20, .2);
    color: black;
  }
`
