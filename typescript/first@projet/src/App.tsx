import Footer from './componets/Footer';
import Header from './componets/header';
import Curso from './componets/Curso';
import Form from './componets/Form';
import Contador from './componets/Contador';

export default function App() {

  return (
    <>
    <Header/>
    <hr />
    <Curso curso="React * TypeScript" valor={39.90} />
    <Curso curso="React.js" valor={19.90} />
    <Curso curso="TypeScript" valor={25.90} />
    <Curso />
    <Form/>
    <hr/>
    <Contador/>
    <Footer/>
    </>
  )
}


