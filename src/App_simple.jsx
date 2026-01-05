import { createSignal } from 'solid-js';
import './style.css';

function App() {
  return (
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-purple-700 text-white p-4 shadow-md">
        <div class="container mx-auto flex space-x-4">
          <span class="font-bold">Simple PWA App</span>
        </div>
      </nav>
      <main class="container mx-auto mt-6 p-6">
        <h1 class="text-3xl font-bold text-purple-700 mb-4">Welcome to SolidJS PWA</h1>
        <p class="text-lg text-gray-700">Your progressive web app is running successfully!</p>
      </main>
    </div>
  );
}

export default App;