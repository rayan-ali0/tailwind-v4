export const PreventOverflow=()=> {
  const longText = "ThisIsAVeryLongWordThatDoesNotBreakAndWillCauseOverflowIssuesInYourLayout";
  
  return (
    <div className="p-8 space-y-8">
      {/* Problem: Long text breaks flex layout */}
      <div className="border-4 border-red-500 bg-red-50 p-4">
        <h3 className="font-bold mb-4">❌ Problem: Overflow</h3>
        <div className="flex gap-4">
          <div className="flex-1 bg-white p-4 border">
            <p>{longText}</p>
          </div>
          <div className="w-64 bg-white p-4 border">Sidebar</div>
        </div>
      </div>

      {/* Solution 1: min-w-0 (allows shrinking) */}
      <div className="border-4 border-green-500 bg-green-50 p-4">
        <h3 className="font-bold mb-4">✅ Solution 1: min-w-0</h3>
        <div className="flex gap-4">
          <div className="flex-1 min-w-0 bg-white p-4 border">
            <p className="break-words">{longText}</p>
          </div>
          <div className="w-64 bg-white p-4 border">Sidebar</div>
        </div>
      </div>

      {/* Solution 2: overflow-hidden + truncate */}
      <div className="border-4 border-blue-500 bg-blue-50 p-4">
        <h3 className="font-bold mb-4">✅ Solution 2: Truncate</h3>
        <div className="flex gap-4">
          <div className="flex-1 min-w-0 bg-white p-4 border">
            <p className="truncate">{longText}</p>
          </div>
          <div className="w-64 bg-white p-4 border">Sidebar</div>
        </div>
      </div>

      {/* Solution 3: overflow-auto (scrollable) */}
      <div className="border-4 border-purple-500 bg-purple-50 p-4">
        <h3 className="font-bold mb-4">✅ Solution 3: Scrollable</h3>
        <div className="flex gap-4">
          <div className="flex-1 min-w-0 bg-white p-4 border overflow-x-auto">
            <p className="whitespace-nowrap">{longText}</p>
          </div>
          <div className="w-64 bg-white p-4 border">Sidebar</div>
        </div>
      </div>
    </div>
  );
}