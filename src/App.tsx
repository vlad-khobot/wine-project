import styled from 'styled-components'
import AppNavBar from './components/AppNavBar'
import WinePage from './components/WinePage'

const AppContainer = styled.div`
  width: 100%;
  position: relative;
  background: #f8f8fa;
`

function App() {
  return (
    <AppContainer>
      <AppNavBar />
      <WinePage />
    </AppContainer>
  )
}

export default App
