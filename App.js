import React, { Suspense } from 'react';
const GymList = React.lazy(() => import('./GymList'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <GymList />
      </Suspense>
    </div>
  );
}

export default App;