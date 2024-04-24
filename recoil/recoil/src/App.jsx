import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './component/Child'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <>
    <RecoilRoot>
      <Child />
    </RecoilRoot>
    </>
  )
}

export default App
