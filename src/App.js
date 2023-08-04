import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[2000px] mx-auto font-serif">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
