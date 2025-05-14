import { Outlet } from "react-router";

function App() {
  return (
    <>
      <h1 className="text-5xl">Sourav</h1>
      {/* Placeholder component */}
      <Outlet></Outlet>
      <h1 className="text-5xl">Footer</h1>
    </>
  );
}

export default App;
