import { motion } from 'framer-motion'
import { Container } from './Container'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { useMemo } from 'react'

export function HeroSimple() {
  const { dark } = useTheme()

  const styles = useMemo(
    () => ({
      section: {
        padding: '160px 0',
        backgroundImage: dark
          ? 'radial-gradient(800px circle at 50% -20%, rgba(55,112,255,0.35), transparent 40%)'
          : 'radial-gradient(800px circle at 50% -20%, rgba(55,112,255,0.15), transparent 40%)',
        backgroundRepeat: 'no-repeat' as const,
        position: 'relative' as const,
      },
      container: {
        textAlign: 'center' as const,
        maxWidth: '768px',
        margin: '0 auto',
        position: 'relative' as const,
        zIndex: 1,
      },
      title: {
        fontSize: '3rem',
        fontWeight: 700,
        letterSpacing: '-0.025em',
        lineHeight: '1.1',
        color: dark ? '#ffffff' : '#1f2937',
        margin: 0,
      },
      titleLarge: {
        fontSize: '4rem',
      },
      highlight: {
        color: '#3770ff',
      },
      description: {
        marginTop: '24px',
        fontSize: '1.125rem',
        lineHeight: '1.6',
        color: dark ? '#9fb0d9' : '#64748b',
      },
      actions: {
        marginTop: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap' as const,
      },
      primaryButton: {
        padding: '12px 24px',
        borderRadius: '12px',
        backgroundColor: '#3770ff',
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-block',
      },
      secondaryButton: {
        padding: '12px 24px',
        borderRadius: '12px',
        backgroundColor: 'transparent',
        color: dark ? '#ffffff' : '#1f2937',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        border: dark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',
        display: 'inline-block',
      },
    }),
    [dark]
  )

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={
              window.innerWidth >= 768 ? { ...styles.title, ...styles.titleLarge } : styles.title
            }
          >
            Your shortcut to <span style={styles.highlight}>everything.</span>
          </motion.h1>
          <p style={styles.description}>
            Welcome to my digital workspace. I build powerful, intuitive software that makes complex
            tasks feel effortless—just like your favorite tools.
          </p>
          <div style={styles.actions}>
            <Link to="/projects" style={styles.primaryButton}>
              View Projects
            </Link>
            <a href="https://github.com/your-username" style={styles.secondaryButton}>
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
