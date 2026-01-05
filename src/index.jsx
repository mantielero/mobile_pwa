import { render } from 'solid-js/web';
import App from './App_test';

const root = document.getElementById('root');

if (root) {
  render(() => <App />, root);
}