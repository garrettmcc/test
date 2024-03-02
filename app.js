import React from 'react';

// Inline CSS styles
const styles = {
  hero: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f0f0f0',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

// Hero component
function Hero() {
  return (
    <div style={styles.hero}>
      <h1>Welcome to Our Landing Page</h1>
      <p>Discover our underground delivery infrastructure.</p>
      <button style={styles.button}>Learn More</button>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Pipedream. All rights reserved.</p>
    </footer>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
