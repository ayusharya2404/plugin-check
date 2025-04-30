// app.jsx
import React from 'react';

function App() {
  return (
    <div className="p-8">
      {/* Using the custom base styles */}
      <h1 className='fontSize'>This is a heading with custom 2xl font size</h1>
      
      <h2>This is a subheading with custom xl font size</h2>
      
      {/* Using the custom card component */}
      <div className="card mt-4">
        <p>This is a card component with custom styling</p>
      </div>
      
      {/* Using the custom utility */}
      <div className="content-auto mt-4">
        <p>This element uses the custom content-auto utility</p>
      </div>
    </div>
  );
}

export default App;