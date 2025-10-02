import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './App.tsx'
import { PrimeReactProvider } from 'primereact/api'

createRoot(document.getElementById('root')!).render(
    <PrimeReactProvider>
        <HomePage />
    </PrimeReactProvider>
)
