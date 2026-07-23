import './App.css'
import { Suspense, lazy } from 'react'

const RemoteHome = lazy(() => import('home/App'))

function App() {
  return (
    <div className="shell">
      <h1>App Shell</h1>
      <p>React Stack Roadmap</p>
      <Suspense fallback={<p>Cargando remote...</p>}>
        <RemoteHome />
      </Suspense>
    </div>
  )
}

export default App
