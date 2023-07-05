import React from 'react'
import { Header } from 'components/Header'
import { TechBox } from 'components/TechBox'
import { ProjectCard } from 'components/ProjectCard'
import { Skills } from 'components/Skills'
import { Contact } from 'components/ContactFooter'

export const App = () => {
  return (
    <div>
      <Header />
      <TechBox />
      <ProjectCard />
      <Skills />
      <Contact />
    </div>
  )
}
