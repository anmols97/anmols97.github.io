import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from './test-utils'
import { FloatingVideo } from '../components/FloatingVideo'

// Mock video methods
const mockPlay = vi.fn().mockResolvedValue(undefined)
const mockLoad = vi.fn()

beforeEach(() => {
  // Mock HTMLVideoElement methods
  Object.defineProperty(HTMLVideoElement.prototype, 'play', {
    writable: true,
    value: mockPlay,
  })
  Object.defineProperty(HTMLVideoElement.prototype, 'load', {
    writable: true,
    value: mockLoad,
  })

  // Mock console methods to avoid noise in tests
  vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('FloatingVideo', () => {
  it('renders video element with correct attributes', () => {
    render(<FloatingVideo />)

    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsinline')
  })

  it('renders mute button with correct initial state', () => {
    render(<FloatingVideo />)

    const muteButton = screen.getByLabelText('Unmute video')
    expect(muteButton).toBeInTheDocument()
    expect(muteButton).toBeInstanceOf(HTMLButtonElement)
  })

  it('toggles mute state when button is clicked', () => {
    render(<FloatingVideo />)

    const muteButton = screen.getByLabelText('Unmute video')

    // Click to unmute
    fireEvent.click(muteButton)
    expect(screen.getByLabelText('Mute video')).toBeInTheDocument()

    // Click to mute again
    fireEvent.click(muteButton)
    expect(screen.getByLabelText('Unmute video')).toBeInTheDocument()
  })

  it('uses light video source in light theme', () => {
    render(<FloatingVideo />)

    const video = document.querySelector('video')
    expect(video?.src).toContain('light.mov')
  })

  it('applies correct styling classes', () => {
    render(<FloatingVideo />)

    const container = document.querySelector('.relative')
    expect(container).toBeInTheDocument()

    const videoContainer = document.querySelector('.overflow-hidden.rounded-2xl')
    expect(videoContainer).toBeInTheDocument()

    const overlay = document.querySelector('.absolute.inset-0.pointer-events-none')
    expect(overlay).toBeInTheDocument()
  })
})
