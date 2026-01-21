import Router from "./router";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/product.png')",
      }}
    >
      <Router />
    </div>
  );
}

export default App;
