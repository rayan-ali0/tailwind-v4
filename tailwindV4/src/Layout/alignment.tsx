import React from 'react'

export const Alignment = () => {
  return (
    <div className='flex flex-col gap-8 p-8 bg-gray-50'>

      {/* NO WRAP - Items Shrink */}
      <div>
        <h3 className='text-xl font-bold mb-3 text-red-600'>
          ❌ NO WRAP (flex) - Items Shrink to Fit
        </h3>
        <div className="flex w-[900px] border-4 border-red-500 bg-red-50 p-5 gap-2">
          <div className="w-64 border-4 border-blue-500 bg-blue-100 p-4 text-center font-bold">
            Item 1<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-blue-500 bg-blue-100 p-4 text-center font-bold">
            Item 2<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-blue-500 bg-blue-100 p-4 text-center font-bold">
            Item 3<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-blue-500 bg-blue-100 p-4 text-center font-bold">
            Item 4<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
        </div>
        <p className='mt-2 text-red-600 font-semibold'>
          👆 4 items × 256px = 1024px, but container is only 900px wide.<br />
          Items are <strong>forced to shrink</strong> below their w-64 width to fit on one line!
        </p>
      </div>

      {/* WRAP - Items Maintain Size */}
      <div>
        <h3 className='text-xl font-bold mb-3 text-green-600'>
          ✅ WRAP (flex-wrap) - Items Keep Size & Wrap
        </h3>
        <div className="flex w-[900px] border-4 border-green-500 bg-green-50 p-5 gap-2 flex-wrap ">
          {/* <div className="flex w-[900px] border-4 border-green-500 bg-green-50 p-5 gap-2 flex-wrap content-end h-[300px]"> content to manage the vertical space  */}
          <div className="w-64 border-4 border-purple-500 bg-purple-100 p-4 text-center font-bold">
            Item 1<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-purple-500 bg-purple-100 p-4 text-center font-bold">
            Item 2<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-purple-500 bg-purple-100 p-4 text-center font-bold">
            Item 3<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
          <div className="w-64 border-4 border-purple-500 bg-purple-100 p-4 text-center font-bold">
            Item 4<br />
            <span className="text-sm">w-64 (256px)</span>
          </div>
        </div>
        <p className='mt-2 text-green-600 font-semibold'>
          👆 Items <strong>maintain their w-64 (256px) width</strong>!<br />
          Item 4 wraps to a new line instead of shrinking.
        </p>
      </div>

      {/* Visual Comparison */}
      <div className='bg-white p-6 rounded-lg border-4 border-gray-800'>
        <h3 className='font-bold text-lg mb-3'>📊 Visual Breakdown:</h3>
        <div className='space-y-2 text-sm'>
          <div className='flex items-center gap-3'>
            <div className='w-6 h-6 border-4 border-red-500 bg-red-50'></div>
            <span><strong>Red container:</strong> Items squeezed into one line (shrunk)</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-6 h-6 border-4 border-green-500 bg-green-50'></div>
            <span><strong>Green container:</strong> Items wrap to new lines (maintain size)</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-6 h-6 border-4 border-blue-500 bg-blue-100'></div>
            <span><strong>Blue items:</strong> Shrinking behavior</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-6 h-6 border-4 border-purple-500 bg-purple-100'></div>
            <span><strong>Purple items:</strong> Wrapping behavior</span>
          </div>
        </div>
      </div>

    </div>
  )
}
// import React from 'react'

// export const Alignment = () => {
//   return (
//     <div className='flex flex-col gap-5'>
//       {/* // No wrap (default) - items shrink to fit */}
//       <div className="flex w-[900px] border  p-5 ">
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>

//         {/* On small screen, these shrink below 64 (256px) */}
//       </div>

//       {/* // Wrap - items maintain size and wrap to new lines */}
//       <div className="flex w-[900px]   p-5  border  flex-wrap">
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>
//         <div className="w-64 border">Item</div>
//         {/* On small screen, items wrap to new rows */}
//       </div>
//     </div>
//   )
// }
