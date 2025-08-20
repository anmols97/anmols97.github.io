import { motion } from 'framer-motion'
import { Container } from './Container'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="section bg-glow bg-no-repeat">
      <Container className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold tracking-tight"
        >
          Your shortcut to <span className="text-brand-400">everything.</span>
        </motion.h1>
        <p className="mt-6 text-lg text-muted">
          Welcome to my digital workspace. I build powerful, intuitive software that makes complex
          tasks feel effortless—just like your favorite tools.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/projects"
            className="px-5 py-3 rounded-xl bg-white text-[#0b0f1a] hover:opacity-90 font-medium"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/your-username"
            className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5"
          >
            GitHub
          </a>
        </div>
      </Container>
    </section>
  )
}
