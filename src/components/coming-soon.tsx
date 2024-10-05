export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-lato background">
      <header className="p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-7xl  tracking-wide text-gray-700">
          THE SPECTRA COLLECTIONS INC.
        </h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8">
        <h2 className="text-6xl md:text-8xl mb-8 text-gray-900 font-bold">
          Coming Soon
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-gray-700">
          Our curated collection will be available shortly.
        </p>
      </main>

      {/* <footer className="p-8 md:p-12 flex justify-center space-x-8">
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <Facebook size={28} />
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <Instagram size={28} />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <Twitter size={28} />
          <span className="sr-only">Twitter</span>
        </a>
      </footer> */}
    </div>
  );
}
