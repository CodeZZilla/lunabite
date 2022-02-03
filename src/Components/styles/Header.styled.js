import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: absolute;
  width: 100%;
  background-color: white;
  height: 60px;
  z-index: 9999;
  -webkit-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 0 4px 8px 0 rgba(34, 60, 80, 0.2);
  display: flex;
  justify-content: space-between;
`

export const LogoStyled = styled.svg`
  width: 80px;
  height: 80px;
`

export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-right: 20px;
  
  button{
    margin-left: 10px;
  }
`

export const SearchStyled = styled.input`
  width: 500px;
  padding: 12px 24px;
  font-size: 15px;
  color: #575756;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% 50%;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  outline: none;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' 
  height='35' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5
   3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 
   9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");

  &:focus {
    -webkit-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    -moz-box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);
    box-shadow: -1px 0 8px -1px rgba(34, 60, 80, 1);

  }
`

export const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  list-style: none;
`

export const LiStyled = styled.li`
  width: 100px;
  height: 25px;
  transition: background-position-x 0.9s linear;
  text-align: center;
  font-weight: 700;

  a {
    font-size: 15px;
    color: #6F6F6F;
    text-decoration: none;
    transition: all 0.45s;
  }

  
`

export const ButtonStyled = styled.button`
  background: radial-gradient(circle at 100%, #80B1FF, #81C7EE 10%, #83FFC1 100%, #333 10%);
  border-style: none;
  border-radius: 100px;
  width: 35px;
  height: 35px;
  
  &:hover{
    -webkit-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`
