import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/Routes";

function App() {
  return (
    <div className="max-w-[2000px] mx-auto font-serif">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
