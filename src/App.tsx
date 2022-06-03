import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
