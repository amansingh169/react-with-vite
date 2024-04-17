import Header from './components/Header'
import Food from './components/Food'
import Footer from './components/Footer'
import Button_p from './components/Buttons/Button_p'
import Button_s from './components/Button_s'
import Greeting from './components/Greeting'
import WeaponsList from './components/WeaponsList'
import AgentBox from './components/AgentsBox'
import ProductForm from './components/ProductForm'
import ColorPicker from './components/ColorPicker'
import UpdateObj from './components/UpdateObj'
import UpdateArr from './components/UpdateArr'
import Car_list from './components/Arr_of_Obj'
import ToDoList from './components/ToDoList/ToDoList'
import EffectHook from './components/EffectHook'
import Dimensions from './components/Dimensions'
import DigitalClock from './components/DigitalClock/DigitalClock'
import ReferenceHook from './components/ReferenceHook'
import StopWatch from './components/StopWatch/StopWatch'

import phnx from './assets/phnx.png'
import kayo from './assets/kayo.png'
import sova from './assets/sova.png'
import omen from './assets/omen.png'
import gekko from './assets/gekko.jpg'
import reyna from './assets/reyna.jpg'
import fade from './assets/fade.jpg'
import sage from './assets/sage.jpg'
import sageAlt from './assets/sage-alt.png'

import grunge from './assets/grunge.jpg'

function App() {
  // object of arrays
  // use array of objects for complex and dynamic data

  const agentsData = [
    {id: 1, pfp: `${reyna}`, name: "Reyna", age: 27, nation: "Mexico", isRadiant: true},
    {id: 2, pfp: `${phnx}`, name: "Phoenix", age: 24, nation: "U.K.Sage", isRadiant: true},
    {id: 3, pfp: `${sageAlt}`, name: "Sage", age: 26, nation: "China", isRadiant: true},
    {id: 4, pfp: `${kayo}`, name: "KAY/O", age: null, nation: "Earth", isRadiant: false},
    {id: 5, pfp: `${sova}`, name: "Sova", age: 29, nation: "Russia", isRadiant: false},
    {id: 6, pfp: `${gekko}`, name: "Gekko", age: 20, nation: "U.S.A", isRadiant: false},
    {id: 7, pfp: `${fade}`, name: "Fade", age: 28, nation: "Turkey", isRadiant: false},
    {id: 8, pfp: `${omen}`, name: "Omen", age: 40, nation: "Earth", isRadiant: true},
    {},
  ]

  const valorantWeapons = {
    handguns: ['Classic', 'Shorty', 'Frenzy', 'Ghost', 'Sheriff'],
    smgs:     ['Stinger', 'Spectre'],
    rifles:   ['Bulldog', 'Guardian', 'Phantom', 'Vandal'],
    snipers:  ['Marshal', 'Operator'],
    heavies:  ['Ares' ,'Odin']
  }

  return (
    <div id='container'>
      <Header/>
      <hr color='grey' />
      <Greeting isLogged={true} name="Aman" />
      {/* <Food /> */}

      <br />
      <br />
      <i>*Imported from the button module (modules for small comps like buttons is not recommended!)</i><br />
      <Button_p />

      {/* <br /><i>*Imported from the jsx component (prefferd for tiny components like buttons)</i><br />
      <Button_s/> */}

      <br /><br /><br /><EffectHook /><br />

      <ReferenceHook />

      <Dimensions />

      <ColorPicker />

      <AgentBox list={agentsData} />

      <UpdateObj />

      <UpdateArr />

      <DigitalClock />

      <Car_list />

      <StopWatch texture = {grunge} />

      <ToDoList />
      
      {/* <ProductForm /> */}

      <WeaponsList list={valorantWeapons} />

      <Footer />
    </div>
  )
}

export default App
