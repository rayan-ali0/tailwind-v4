export const MasonryGrid=()=> {
  const items = [
    { height: 'h-64' },
    { height: 'h-96' },
    { height: 'h-48' },
    { height: 'h-80' },
    { height: 'h-56' },
    { height: 'h-72' },
    { height: 'h-64' },
    { height: 'h-96' },
  ];

  return (
    <div className="p-8">
      {/* Column-based masonry using CSS columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={`${item.height} bg-white rounded-lg shadow-md p-6 break-inside-avoid`}
          >
            <div className="h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}