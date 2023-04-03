// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@sufio/ui';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Button />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
