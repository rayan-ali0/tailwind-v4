export const  HolyGrailLayout=()=> {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - full width */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Site Header</h1>
      </header>

      {/* Main container with 3 columns */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left sidebar */}
        <aside className="w-full lg:w-64 bg-gray-200 p-4 order-2 lg:order-1">
          <h2 className="font-bold mb-4">Left Nav</h2>
          <nav className="space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-300 rounded">Link 1</a>
            <a href="#" className="block p-2 hover:bg-gray-300 rounded">Link 2</a>
          </nav>
        </aside>

        {/* Main content - grows to fill space */}
        <main className="flex-1 bg-white p-8 order-1 lg:order-2">
          <h1 className="text-3xl font-bold mb-4">Main Content</h1>
          <p className="mb-4">This is the main content area that takes up most space.</p>
          <p>Content grows to fill available space...</p>
        </main>

        {/* Right sidebar */}
        <aside className="w-full lg:w-64 bg-gray-100 p-4 order-3">
          <h2 className="font-bold mb-4">Right Sidebar</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow">Widget 1</div>
            <div className="bg-white p-4 rounded shadow">Widget 2</div>
          </div>
        </aside>
      </div>

      {/* Footer - full width */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2026 Company Name</p>
      </footer>
    </div>
  );
}