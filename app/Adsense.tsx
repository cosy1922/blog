'use client'
import { useEffect } from 'react'

export function Adsense() {
  useEffect(() => {
    console.log('stststst')
    try {
      // @ts-ignore
      if (adsbygoogle && !adsbygoogle.loaded) {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      //
    }
  }, [])

  return (
    // <!-- WebDevTutor-Horizontal-Responsive -->
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7840980802013029"
      data-ad-slot="6901974530"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}
