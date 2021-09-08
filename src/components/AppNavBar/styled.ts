import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  position: fixed;
  z-index: 100;
  height: 93vh;
  background: #3e2b57;
  width: 100px;
  bottom: 0;
  border-top-right-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  svg path {
    fill: #ffe8d9;
  }
  svg {
    height: 45px;
  }
  @media (max-width: 1265px) {
    display: none;
  }
`
export const Option = styled.div<{ active?: boolean }>`
  font-family: QuincyCF-ExtraBold;
  font-size: 60px;
  color: #ffe8d9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 16.5%;
  border-right: ${(props) => (props.active ? '6px solid #ffe8d9' : 'none')};
`
export const Logo = styled.div`
  font-family: QuincyCF-ExtraBold;
  font-size: 60px;
  color: #ffe8d9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 16.5%;
  user-select: none;
`
