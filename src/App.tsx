import { Ban, CheckCheck, CircleAlert, ShieldAlert } from "lucide-react"
import Alert from "./components/alert/Alert"


function App() {
  return (
    <div style={{ padding: '30px' }}>
      <Alert type={"alert-danger"} title={'some thing wrong'} icon={<Ban size={20} />}> 
        <div>
          Lorem ipsum dolor sit amet consectetur, <a href="/">adipisicing elit.olestias</a> eos.
        </div>
      </Alert>


      <Alert type={"alert-success"} title={'some thing wrong'} icon={ <CheckCheck size={20} />} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium atque, deserunt culpa neque dolorum quam odio. Quo magnam molestias eos.'} />

      <Alert type={"alert-warning"} title={'some thing wrong'} icon={ <ShieldAlert size={20}  />} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium atque, deserunt culpa neque dolorum quam odio. Quo magnam molestias eos.'} />
      <Alert type={"alert-info"} title={'Note'} icon={<CircleAlert  size={20} />} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium atque, deserunt culpa neque dolorum quam odio. Quo magnam molestias eos.'} />

    </div>


  )
}

export default App

