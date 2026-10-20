import { lazy, Suspense } from 'react'
import './App.css'

const RemoteHome = lazy(() => import('home/App'))

function App() {
  return (
    <div className="shell">
      <h1>App Shell</h1>
      <p>React Stack Roadmap</p>
      <Suspense fallback={<p>Loading remote-home…</p>}>
        <RemoteHome />
      </Suspense>
    </div>
  )
}

export default App
