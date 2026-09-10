import { profile } from '../../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="border-t border-railLine bg-rail px-6 py-8 text-railText sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-railText/60">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-copperSoft">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-copperSoft">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-copperSoft">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
