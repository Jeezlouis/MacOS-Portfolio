import React, { Suspense, lazy } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { Dock, Home, Navbar, Welcome } from "#components"

import useWindowStore from "#store/window"

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
  const { windows } = useWindowStore()

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Suspense fallback={null}>
        {windows.terminal?.isOpen && <Terminal />}
        {windows.safari?.isOpen && <Safari />}
        {windows.resume?.isOpen && <Resume />}
        {windows.finder?.isOpen && <Finder />}
        {windows.text?.isOpen && <Text />}
        {windows.image?.isOpen && <Image />}
        {windows.contact?.isOpen && <Contact />}
        {windows.photos?.isOpen && <Photos />}
      </Suspense>
    </main>
  )
}

export default App