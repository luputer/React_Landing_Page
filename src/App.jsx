import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import { RouterProvider} from "react-router-dom";
import Router from "./src";


const App = () => {
  
  return (
    <>
    <Navbar/>
    <RouterProvider router={Router}>
    <Home />
    </RouterProvider>
    </>
  );  
};
export default App;