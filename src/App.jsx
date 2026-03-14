import React, { Suspense, lazy } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Dock, Home, Navbar, Welcome } from "#components"

const Finder = lazy(() => import('./windows/Finder'))
const Resume = lazy(() => import('./windows/Resume'))
const Safari = lazy(() => import('./windows/Safari'))
const Terminal = lazy(() => import('./windows/Terminal'))
const Text = lazy(() => import('./windows/Text'))
const Image = lazy(() => import('./windows/Image'))
const Contact = lazy(() => import('./windows/Contact'))
const Photos = lazy(() => import('./windows/Photos'))

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Suspense fallback={null}>
        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
        <Contact />
        <Photos />
      </Suspense>
    </main>
  )
}

export default App