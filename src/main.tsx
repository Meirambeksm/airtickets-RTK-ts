import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./components/app/store.ts";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  console.log("Root element not found");
}
