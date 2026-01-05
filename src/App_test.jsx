import { createSignal } from 'solid-js';

function App() {
  return (
    <div style={{ "min-height": "100vh", "background-color": "#f3f4f6" }}>
      <nav style={{ "background-color": "#7e22ce", "color": "white", "padding": "1rem", "box-shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}>
        <div style={{ "max-width": "1200px", "margin": "0 auto", "display": "flex", "gap": "1rem" }}>
          <span style={{ "font-weight": "bold" }}>Simple PWA App</span>
        </div>
      </nav>
      <main style={{ "max-width": "1200px", "margin": "0 auto", "margin-top": "1.5rem", "padding": "1.5rem" }}>
        <h1 style={{ "font-size": "1.875rem", "font-weight": "bold", "color": "#7e22ce", "margin-bottom": "1rem" }}>Welcome to SolidJS PWA</h1>
        <p style={{ "font-size": "1.125rem", "color": "#374151" }}>Your progressive web app is running successfully!</p>
      </main>
    </div>
  );
}

export default App;