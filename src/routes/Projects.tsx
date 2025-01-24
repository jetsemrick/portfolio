import React from 'react'
import ProjectList from '../components/ProjectList'

const projects: Products = {
  projects: [
    {
      name: 'Avallon Labs, Inc.',
      code: 'https://www.avallon.ai/',
      description: 'Startup venture focused on AI-driven solutions for the auto insurance industry.',
      date: 'December 2024',
    },
    {
      name: 'Quantitative Trading',
      code: 'https://github.com/jetsemrick/quant_trading',
      description: 'Quantitative trading strategies using Python and pandas. Implemented Markowitz portfolio optimization and a moving average strategy.',
      date: 'December 2024',
    },
    {
      name: 'Debate Tournament Judge Tool',
      code: 'https://github.com/jetsemrick/voting-record-calculator',
      description:
        'Tool to calculate the aff and neg win rate for each judge in a pool. Utilized Python and sourced data from tabroom.com using pandas and beautifulsoup.',
      date: 'November 2022',
    },
  ],
}

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f1eb]">
      <ProjectList projects={projects.projects} />
    </div>
  )
}

export default Projects
