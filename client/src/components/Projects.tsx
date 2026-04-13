import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  titulo: string;
  descricao: string;
  link: string;
}

const projetos: Project[] = [
  {
    id: 1,
    titulo: "FarmaViva",
    descricao: "Solução tecnológica voltada para a área farmacêutica, facilitando o acesso à informação e melhorando a organização de serviços relacionados à saúde.",
    link: "https://github.com/josielsilva10/FarmaViva"
  },
  {
    id: 2,
    titulo: "Sistema de Gestão de Tarefas",
    descricao: "Uma aplicação web intuitiva para organizar suas atividades diárias, com armazenamento local no navegador.",
    link: "https://github.com/"
  },
  {
    id: 3,
    titulo: "Dashboard de Finanças",
    descricao: "Interface administrativa para controle financeiro pessoal com visualização de gastos em tempo real.",
    link: "https://github.com/"
  },
  {
    id: 4,
    titulo: "Portal de Notícias Tech",
    descricao: "MVP de um portal de notícias focado no mundo da tecnologia, totalmente responsivo.",
    link: "https://github.com/"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 mb-12 text-center">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                {projeto.titulo}
              </h3>
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                {projeto.descricao}
              </p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                Ver no GitHub
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
