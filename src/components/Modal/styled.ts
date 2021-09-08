import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: #80808060;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: white;
  width: 400px;
  padding: 25px 25px;
  border-radius: 25px;
`
export const StyledButton = styled.button`
  width: 220px;
  height: 60px;
  font: inherit;
  font-size: 1.25rem;
  padding: 1em;
  font-weight: 500;
  background-color: #6658d3;
  border-radius: 6px;
  color: #fff;
  border: 0;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #5146aa;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  padding-top: 1.5rem;
`
export const InputLabel = styled.label`
  color: #8597a3;
  position: absolute;
  top: 1.5rem;
  transition: 0.25s ease;
  font-size: 1.2rem;
`
export const InputField = styled.input`
  width: 300px;
  border: 0;
  z-index: 1;
  background-color: transparent;
  border-bottom: 2px solid #eee;
  font: inherit;
  font-size: 1.2rem;
  padding: 0.25rem 0;
  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #6658d3;
    & + label {
      color: #6658d3;
      transform: translateY(-1.5rem);
    }
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: #ec407a;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 60px;
    width: 60px;
  }
  &:hover {
    background-color: #e91e63;
  }
  &:hover svg path {
    fill: white;
  }
`
