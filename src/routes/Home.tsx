import React from 'react'
import profile from '../img/profile.png'
import Tag from '../components/Tag'

const interests = [
  "Artificial Intelligence",
  "Quantitative Trading",
  "Software Engineering",
  "Sports",
  "Policy Debate"
];

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-8 -mt-16 bg-[#f5f1eb]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row max-w-4xl gap-12 items-center mx-auto">
          <div className="w-[400px] h-[400px] rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-md">
            <img 
              src={profile} 
              alt="Jet Semrick" 
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Jet Semrick
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Co-founder of <span className="font-bold">Avallon</span>, a startup building AI agents, and policy debate coach at the <span className="font-bold">Taipei American School</span>. I studied computer science at 
            <span className="font-bold"> Cornell</span> and the <span className="font-bold">University of Kansas</span>. Currently based in NYC.
            </p>
            <div className="mt-6">
              {interests.map((interest) => (
                <Tag key={interest} text={interest} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
