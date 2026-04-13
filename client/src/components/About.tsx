export default function About() {
  return (
    <section
      id="about"
      className="pt-32 pb-16 px-4 relative z-10"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full border-4 border-purple-700 overflow-hidden shadow-lg">
              <img
                src="/assets/foto-perfil.webp"
                alt="Josiel Alexandre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-purple-700 mb-4">
              Josiel Alexandre
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sou acadêmico graduando do curso Tecnólogo em Sistemas para Internet, 
              com interesse em desenvolvimento web, Inteligência Artificial e soluções 
              tecnológicas voltadas para o dia a dia das pessoas. Sou entusiasta em IAs 
              e atualmente estou desenvolvendo o projeto <strong>FarmaViva</strong>, uma 
              solução tecnológica voltada para a área farmacêutica, com o objetivo de 
              facilitar o acesso à informação e melhorar a organização de serviços 
              relacionados à saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
