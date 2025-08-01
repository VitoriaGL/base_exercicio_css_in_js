import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './containers/ListaVagas'
// ... outros imports

function App() {
  return (
    <>
      <Cabecalho />
      <Hero />
      <FormVagas aoPesquisar={() => <ListaVagas />} />
      <ListaVagas />
    </>
  )
}

export default App
