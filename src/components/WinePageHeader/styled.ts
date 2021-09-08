import styled from 'styled-components'

export const Header = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin-left: -50px;
`
export const Text = styled.p`
  margin-bottom: 80px;
  margin-top: 0;
  font-size: 19px;
  font-family: 'Inter';
  min-width: 450px;
  max-width: 750px;
  font-weight: 500;
`
export const Line = styled.div`
  border-top: 1px solid grey;
  min-width: 450px;
  max-width: 750px;
`
export const Search = styled.div`
  font-family: normal;
  display: flex;
  gap: 30px;
  font-size: 30px;

  align-items: center;
  input {
    background: white;
    border: none;
    border-radius: 25px;
    width: 250px;
    height: 40px;
    padding-left: 20px;
  }
`
