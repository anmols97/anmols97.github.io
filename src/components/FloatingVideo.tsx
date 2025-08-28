import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function FloatingVideo() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { dark } = useTheme()
  const videoSrc = dark ? '/dark.mov' : '/light.mov'

  // Debug logging
  useEffect(() => {
    console.log('FloatingVideo: Theme changed:', dark ? 'dark' : 'light', 'Video src:', videoSrc)
  }, [dark, videoSrc])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  // Reload video when theme changes - watch 'dark' directly
  useEffect(() => {
    console.log('FloatingVideo: Effect triggered, dark:', dark, 'videoSrc:', videoSrc)
    if (videoRef.current) {
      console.log('FloatingVideo: Reloading video with src:', videoSrc)
      videoRef.current.src = videoSrc
      videoRef.current.load()
      videoRef.current.play().catch(console.error)
    }
  }, [dark, videoSrc]) // Watch both dark AND videoSrc

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative">
      {/* Floating Video */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <video
          ref={videoRef}
          key={videoSrc} // Force re-render when theme changes
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-96 md:h-[500px] lg:h-[600px] object-cover"
        />

        {/* Floating Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-200 backdrop-blur-sm border shadow-lg hover:scale-110 ${
            dark
              ? 'bg-black/20 hover:bg-black/40 text-white border-white/20'
              : 'bg-white/20 hover:bg-white/40 text-gray-900 border-gray-200/20'
          }`}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* Subtle overlay for better text contrast */}
        <div
          className={`absolute inset-0 pointer-events-none ${dark ? 'bg-black/5' : 'bg-white/5'}`}
        />
      </div>
    </div>
  )
}
