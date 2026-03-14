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

      {windows.terminal?.isOpen && <Suspense fallback={null}><Terminal /></Suspense>}
      {windows.safari?.isOpen && <Suspense fallback={null}><Safari /></Suspense>}
      {windows.resume?.isOpen && <Suspense fallback={null}><Resume /></Suspense>}
      {windows.finder?.isOpen && <Suspense fallback={null}><Finder /></Suspense>}
      {windows.text?.isOpen && <Suspense fallback={null}><Text /></Suspense>}
      {windows.image?.isOpen && <Suspense fallback={null}><Image /></Suspense>}
      {windows.contact?.isOpen && <Suspense fallback={null}><Contact /></Suspense>}
      {windows.photos?.isOpen && <Suspense fallback={null}><Photos /></Suspense>}
    </main>
  )
}

export default App