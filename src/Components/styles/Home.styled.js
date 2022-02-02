import styled from "styled-components";

export const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: linear-gradient(180deg, #FFA4D4 0%, rgba(255, 164, 212, 0.625) 63.02%, rgba(255, 164, 212, 0) 100%);
`

export const DivRight = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  h1{
    color: white;
    font-size: 44px;
  }
`
export const DivLeft = styled(DivRight)`
  width: 50%;
`

export const ImgTop = styled.img`
  width: 384px;
  height: 50%;
  position: absolute;
  left: 796px;
  top: 50px;
  background: #FFFFFF;
  border-radius: 10px;

  -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);

  &:hover {
    -webkit-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    transition-property: box-shadow, -moz-box-shadow, -webkit-box-shadow;
    transition-duration: 1s, 1s;
  }
`

export const ImgSecond = styled.img`
  width: 384px;
  height: 50%;
  left: 1013px;
  top: 88px;
  border-radius: 10px;

  -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.22);

  &:hover {
    -webkit-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    box-shadow: 0 0 40px 1px rgba(0, 0, 0, 0.22);
    transition-property: box-shadow, -moz-box-shadow, -webkit-box-shadow;
    transition-duration: 1s, 1s;

  }
`




