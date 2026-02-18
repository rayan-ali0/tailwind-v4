import React from 'react'

export const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Fixed width sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">Projects</a>
          <a href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</a>
        </nav>
      </aside>

      {/* Flexible content area */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-6">Main Content</h1>
        <p>Content goes here...</p>
         <h1 className="text-3xl font-bold mb-6">Main Content</h1>
        <p>Content goes here...</p>
         <h1 className="text-3xl font-bold mb-6">Main Content</h1>
        <p>Content goes here...</p>
        <div className='h-[900px] border'>d</div>
      </main>
    </div> 
    
)
}
