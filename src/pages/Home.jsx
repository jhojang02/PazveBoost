import { Button } from "primereact/button"
import { Calendar } from "primereact/calendar"
import IniciarSesion from "./Iniciar-sesion/IniciarSesion"


function Home() {
  return (
    <form action="iniciar_sesion.php" method="post" >
      <div>
        <IniciarSesion />
      </div>
    </form>
  )
}

export default Home;
