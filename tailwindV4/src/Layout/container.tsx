import React from 'react'
import viteLogo from '/vite.svg'

export const Container = () => {
  return (
// Same component works in sidebar (narrow) or main content (wide)
<div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4">
  <aside>
    <ProductCard /> {/* Adapts to 300px sidebar */}
  </aside>
  <main>
    <ProductCard /> {/* Adapts to wider main area */}
  </main>
</div>  )
}


function ProductCard() {
  return (
    <div className="@container border rounded-lg p-4">
      {/* Stacks vertically in narrow containers, horizontal in wide ones */}
      <div className="flex flex-col @md:flex-row gap-4">
        <img className="w-full @md:w-32" src={viteLogo}/>
        <div className="flex-1">
          <h3 className="text-base @md:text-lg @lg:text-xl">Product Name</h3>
          <p className="text-sm @md:text-base">Description</p>
        </div>
      </div>
    </div>
  );
}