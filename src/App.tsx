import './App.css'
import Router from './router'

function App() {
  return (
    <div className="w-full h-full bg-teal-600">
      <h1 className='flex justify-center items-center pt-5 font-mono font-bold italic text-3xl'>Rick and Morty</h1>

      <div>
        <Router />
      </div>
    </div>
  )
}

export default App
