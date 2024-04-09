import { DefaultColorPicker } from '@thednp/react-color-picker'
import '@thednp/react-color-picker/style.css'
import './App.css'

function App() {
  return <DefaultColorPicker value="turquoise" onChange={color => console.log(color)} />;
}

export default App
