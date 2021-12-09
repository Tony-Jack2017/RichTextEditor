import './App.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faCode,
  faItalic,
  faBold,
  faUnderline,
  faLink,
  faDiceOne,
  faDiceTwo,
  faListOl,
  faListUl
} from '@fortawesome/free-solid-svg-icons'
import MainLayout from './layout/MainLayout';

library.add(
  fab,
  faCheckSquare,
  faCode,
  faItalic,
  faBold,
  faUnderline,
  faLink,
  faDiceOne,
  faDiceTwo,
  faListOl,
  faListUl
)


function App(props) {
  return (
    <div className="App">
      <MainLayout/>
    </div>
  )
}

export default App;
