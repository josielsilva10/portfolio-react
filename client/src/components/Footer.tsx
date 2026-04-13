export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-gradient-to-r from-purple-700 to-purple-600 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold">
          &copy; {currentYear} Josiel Alexandre. Todos os direitos reservados.
        </p>
        <p className="text-purple-100 mt-2">
          Desenvolvido com ❤️ usando React e Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
