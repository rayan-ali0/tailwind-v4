import React from 'react'

export const Clamp = () => {
    return (
        // clamp(min, preferred, max) lets values scale smoothly between boundaries:

        <div className='flex flex-col gap-5'>
            {/* // Font size: min 16px, scales with viewport, max 24px */}
            <h1 className="text-[clamp(1rem,4vw,1.5rem)] border">
                Heading grows with viewport
            </h1>

            {/* // Width: min 300px, prefers 50% of parent, max 600px */}
            <div className="w-[clamp(100px,50%,600px)] border">
                Responsive width
            </div>

            {/* // Padding: min 1rem, scales, max 4rem */}
            <div className="p-[clamp(1rem,5vw,4rem)] border">
                Fluid padding
            </div>
        </div>
    )
}


