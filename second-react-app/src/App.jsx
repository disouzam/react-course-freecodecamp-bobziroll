import { createRoot } from "react-dom/client";

const App = () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<h1>Hello, wonderful world!</h1>);
};

export default App;
