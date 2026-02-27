import { router } from "./router"
import "./assets/style.css";
import { RouterProvider } from "react-router-dom"

function App(){
return(
<RouterProvider router={router}/>
)
}

export default App