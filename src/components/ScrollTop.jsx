import { CaretCircleUp } from 'phosphor-react'
import React, { useEffect, useState } from 'react'

export const ScrollTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  return (
    <div className='relative bg-palette1-sunray'>
      {showScrollTopButton && (

        <CaretCircleUp onClick={handleGoToTop} size={56} className='fixed bottom-10 right-6 z-20 text-palette1-fireOpal cursor-pointer' />
      )}
    </div>
  )
}
