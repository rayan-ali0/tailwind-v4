import React from 'react'

export const Responsive = () => {
  return (

<div className="
  // Fluid container padding
  p-[clamp(1rem,5vw,3rem)]
  
  // Full viewport height minus header
  min-h-[calc(100vh-4rem)]
">
  {/* Responsive grid using auto-fit */}
  <div className="
    grid gap-[clamp(1rem,2vw,2rem)]
    
    // Traditional breakpoints
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  ">
    {/* Stats cards with container queries */}
    {[1, 2, 3].map(i => (
      <div key={i} className="@container">
        <div className="
          bg-white rounded-lg
          p-[clamp(1rem,3vw,2rem)]
          shadow-sm
          
          // Container query layout
          @md:flex @md:items-center @md:gap-4
        ">
          <div className="
            // Fluid icon size
            w-[clamp(3rem,10vw,5rem)]
            h-[clamp(3rem,10vw,5rem)]
            bg-blue-100 rounded-full
          "/>
          <div>
            <p className="text-[clamp(2rem,4vw,3rem)] font-bold">
              1,234
            </p>
            <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-600">
              Metric
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}  
