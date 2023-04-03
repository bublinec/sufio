import { RouterProvider } from 'react-router-dom';
import { router } from './lib/router/router';

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
