import { Routes, Route } from 'react-router-dom'
import './styles.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<div>Portfolio Hero</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/work" element={<div>Work Index</div>} />
        <Route path="/work/:slug" element={<div>Work Detail</div>} />
        <Route path="/skills" element={<div>Skills Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  )
}

export default App
