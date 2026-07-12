import { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import './App.css'

function App() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React + TypeScript Starter</h1>
      <p>GSAP and Motion (Framer Motion) are wired up and ready to use.</p>

      <div ref={boxRef} style={{ marginTop: '1.5rem' }}>
        <strong>GSAP</strong> animated this box in on load.
      </div>

      <motion.div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          background: '#eee',
          borderRadius: 8,
          width: 200,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hover / tap me — powered by <strong>Motion</strong>.
      </motion.div>
    </div>
  )
}

export default App
