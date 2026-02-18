export const StickySidebarLayout=()=> {
  return (
    <div className="flex gap-8 p-8 max-w-7xl mx-auto">
      {/* Sticky sidebar */}
      <aside className="w-64 sticky top-8 self-start">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#section1" className="block p-2 hover:bg-gray-100 rounded">Section 1</a>
            <a href="#section2" className="block p-2 hover:bg-gray-100 rounded">Section 2</a>
            <a href="#section3" className="block p-2 hover:bg-gray-100 rounded">Section 3</a>
          </nav>
        </div>
      </aside>

      {/* Scrolling content */}
      <main className="flex-1">
        {Array.from({ length: 15 }).map((_, i) => (
          <section key={i} id={`section${i + 1}`} className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold mb-4">Section {i + 1}</h2>
              <p className="text-gray-600 leading-relaxed">
                This is a long article section. The sidebar stays visible as you scroll through the content.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}