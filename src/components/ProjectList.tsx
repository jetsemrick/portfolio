import React from 'react'

const ProjectList = ({ projects }: Products) => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
        Projects
      </h2>
      <hr className="m-auto mb-8 border-2 w-1/2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div className="bg-white shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {item.name}
            </h3>
            <div className="text-xs text-gray-500 mb-2">
              <span className="font-bold">Date:</span> {item.date}
            </div>
            <p className="text-xs font-light text-gray-600 mb-1 text-left">
              <span className="font-semibold">Description:</span>{' '}
              {item.description}
            </p>
            {item.code && (
              <a
                href={item.code}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors rounded-md px-4 py-2 text-sm font-medium text-gray-900 shadow-sm"
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
