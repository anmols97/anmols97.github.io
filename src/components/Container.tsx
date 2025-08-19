import { cn } from '../lib/cn'
import { ReactNode } from 'react'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('container max-w-6xl', className)}>{children}</div>
}
