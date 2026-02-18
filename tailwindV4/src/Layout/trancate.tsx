export const SingleLineTruncate=()=> {
  return (
    <div className="p-8 space-y-8">
      {/* Without truncation - text wraps */}
      <div className="max-w-md bg-red-100 border-4 border-red-500 p-4">
        <h3 className="font-bold mb-2">❌ No Truncation</h3>
        <p className="bg-white p-2">
          This is a very long text that will wrap to multiple lines and might break your layout design
        </p>
      </div>

      {/* With truncation - single line with ... */}
      <div className="max-w-md bg-green-100 border-4 border-green-500 p-4">
        <h3 className="font-bold mb-2">✅ With Truncation</h3>
        <p className="bg-white p-2 truncate">
          This is a very long text that will wrap to multiple lines and might break your layout design
        </p>
      </div>

      {/* What truncate does */}
      <div className="bg-blue-50 p-4 rounded">
        <code className="text-sm">
          truncate = overflow-hidden + text-ellipsis + whitespace-nowrap
        </code>
      </div>
    </div>
  );
}

export const  MultiLineTruncate=()=> {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <div className="p-8 space-y-8">
      {/* Clamp to 2 lines */}
      <div className="max-w-md bg-white border rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Article Title</h3>
        <p className="text-gray-600 line-clamp-2">
          {longText}
        </p>
        <button className="mt-4 text-blue-500">Read more →</button>
      </div>

      {/* Clamp to 3 lines */}
      <div className="max-w-md bg-white border rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Article Title</h3>
        <p className="text-gray-600 line-clamp-3">
          {longText}
        </p>
        <button className="mt-4 text-blue-500">Read more →</button>
      </div>

      {/* Available line-clamp values */}
      <div className="bg-blue-50 p-4 rounded">
        <p className="font-bold mb-2">Available values:</p>
        <code className="text-sm">
          line-clamp-1, line-clamp-2, line-clamp-3, line-clamp-4, line-clamp-5, line-clamp-6
        </code>
      </div>
    </div>
  );
}