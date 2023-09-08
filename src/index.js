import App from "./app/App";
import ReactDOM from "react-dom/client";
import TestFunction from "./app/components/common/Header/TestFunction";
import TestFunction2 from "./app/components/common/Header/TestFunction2";
import FuckingContextProvider from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FuckingContextProvider>
      <App />
    </FuckingContextProvider>

    <FuckingContextProvider>
      <TestFunction />
    </FuckingContextProvider>

    <TestFunction2 />
  </>
);
