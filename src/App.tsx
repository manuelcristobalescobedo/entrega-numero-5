import { Routes, Route, Link, Outlet } from 'react-router-dom'
import CatalogPage from './pages/CatalogPage'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Outlet />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
    </div>
  )
}
