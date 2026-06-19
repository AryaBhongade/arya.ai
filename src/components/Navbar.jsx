export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-8">
      <div className="text-3xl md:text-4xl font-bold">
        arya.dev
      </div>

      <div className="hidden md:flex gap-8 text-2xl">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}