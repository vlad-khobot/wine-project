import styled from 'styled-components'

const LoaderContainer = styled.div`
  & {
    display: inline-block;
    position: relative;
    width: 150px;
    height: 150px;
  }
  & div {
    position: absolute;
    border: 4px solid #ffe8d9;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 50px;
      left: 50px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
`

const Loader = () => {
  return (
    <LoaderContainer>
      <div></div>
      <div></div>
    </LoaderContainer>
  )
}

export default Loader
