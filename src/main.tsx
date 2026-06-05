import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";

const root = document.getElementById("root")!;

// react-snap pré-rend le HTML statique — on hydrate si le contenu existe déjà,
// sinon on monte normalement (dev ou routes sans snapshot).
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
