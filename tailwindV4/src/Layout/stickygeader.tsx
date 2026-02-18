import { useEffect, useState } from "react";

export const StickyHeaderWithEffect=()=> {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className={`
        sticky top-0 z-50
        transition-all duration-300
        ${isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-6'
        }
      `}>
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <h1 className={`
            font-bold transition-all
            ${isScrolled ? 'text-xl' : 'text-3xl'}
          `}>
            Logo
          </h1>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <section className="h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome</h1>
          <p className="text-2xl">Scroll down to see the header shrink</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-8 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Section {i + 1}</h2>
            <p className="text-gray-600">Content here...</p>
          </div>
        ))}
      </main>
    </div>
  );
}