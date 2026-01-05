import { createSignal } from 'solid-js';
import './style.css';

function Home() {
  return (
    <div class="p-6">
      <h1 class="text-3xl font-bold text-purple-700 mb-4">Welcome to SolidJS PWA</h1>
      <p class="text-lg text-gray-700">Your progressive web app is running successfully!</p>
    </div>
  );
}

function About() {
  return (
    <div class="p-6">
      <h1 class="text-3xl font-bold text-purple-700 mb-4">About</h1>
      <p class="text-lg text-gray-700">This is a SolidJS PWA application.</p>
    </div>
  );
}

function App() {
  return (
    <div class="min-h-screen bg-gray-100">
      <nav class="bg-purple-700 text-white p-4 shadow-md">
        <div class="container mx-auto flex space-x-4">
          <a href="/" class="hover:underline">Home</a>
          <a href="/about" class="hover:underline">About</a>
        </div>
      </nav>
      <main class="container mx-auto mt-6">
        <Home />
      </main>
    </div>
  );
}

export default App;