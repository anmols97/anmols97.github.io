import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme } from '../hooks/useTheme'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// Mock document.documentElement
const mockClassList = {
  add: vi.fn(),
  remove: vi.fn(),
}
Object.defineProperty(document, 'documentElement', {
  value: {
    classList: mockClassList,
  },
  writable: true,
})

describe('useTheme Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should default to light mode when no localStorage value exists', () => {
    localStorageMock.getItem.mockReturnValue(null)
    
    const { result } = renderHook(() => useTheme())
    
    expect(result.current.dark).toBe(false)
    expect(localStorageMock.getItem).toHaveBeenCalledWith('theme')
  })

  it('should initialize dark mode when localStorage has "dark"', () => {
    localStorageMock.getItem.mockReturnValue('dark')
    
    const { result } = renderHook(() => useTheme())
    
    expect(result.current.dark).toBe(true)
  })

  it('should toggle dark mode and update localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light')
    
    const { result } = renderHook(() => useTheme())
    
    // Should start in light mode
    expect(result.current.dark).toBe(false)
    
    // Toggle to dark mode
    act(() => {
      result.current.setDark(true)
    })
    
    expect(result.current.dark).toBe(true)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
    expect(mockClassList.add).toHaveBeenCalledWith('dark')
  })

  it('should toggle light mode and update localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark')
    
    const { result } = renderHook(() => useTheme())
    
    // Should start in dark mode
    expect(result.current.dark).toBe(true)
    
    // Toggle to light mode
    act(() => {
      result.current.setDark(false)
    })
    
    expect(result.current.dark).toBe(false)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
    expect(mockClassList.remove).toHaveBeenCalledWith('dark')
  })

  it('should persist theme preference across sessions', () => {
    // First session - set to dark
    localStorageMock.getItem.mockReturnValue(null)
    const { result: result1 } = renderHook(() => useTheme())
    
    act(() => {
      result1.current.setDark(true)
    })
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark')
    
    // Second session - should remember dark mode
    localStorageMock.getItem.mockReturnValue('dark')
    const { result: result2 } = renderHook(() => useTheme())
    
    expect(result2.current.dark).toBe(true)
  })
})