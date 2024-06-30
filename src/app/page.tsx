'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const canvas = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!canvas.current) return

    const ctx = canvas.current.getContext('2d') as CanvasRenderingContext2D
    canvas.current.width = 500
    canvas.current.height = 500
    ctx.strokeStyle = '#fff'
    ctx.beginPath()
    ctx.moveTo(10, 0)
    ctx.lineTo(10, 500)
    ctx.stroke()
  }, [])

  return (
    <main>
      <canvas ref={canvas} className='bg-black' id='pixel-canvas'></canvas>
    </main>
  )
}
