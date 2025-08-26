"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"

const portfolioProjects = [
  {
    id: 1,
    title: "EPH Polska",
    description:
      "Rozbudowana platforma online z automatyzacją procesów sprzedażowych i algorytmami AI. System integruje prognozowanie i personalizację ofert.",
    tech: ["Nuxt.js", "Laravel", "AI", "Automatyzacja"],
    url: "http://ephpolska.pl/",
    category: "E-commerce & AI",
  },
  {
    id: 2,
    title: "Tylko Zdalnie",
    description:
      "Praktyczna strona internetowa do zarządzania ofertami pracy zdalnej z intuicyjnym panelem administratora.",
    tech: ["WordPress", "Panel Admin", "Zarządzanie treścią"],
    url: "https://tylkozdalnie.pl/",
    category: "Portal Pracy",
  },
  {
    id: 3,
    title: "Gorkowski",
    description:
      "W pełni spersonalizowana strona dla firmy tekstylnej z customizacją motywu i funkcjonalności dopasowaną do branży.",
    tech: ["WordPress", "Custom Theme", "Optymalizacja"],
    url: "https://realizacje.soft-synergy.com/gorkowski/",
    category: "Strona Firmowa",
  },
  {
    id: 4,
    title: "Ligustrowa",
    description:
      "Strona dla dewelopera z konfiguratorem domów umożliwiającym klientom dostosowanie projektów i kalkulację kosztów.",
    tech: ["Konfigurator", "Kalkulator", "UX/UI"],
    url: "http://ligustrowa15.pl/",
    category: "Nieruchomości",
  },
  {
    id: 5,
    title: "Polens Bike",
    description:
      "Rozbudowany sklep internetowy z rowerami, zaawansowanymi filtrami, konfiguratorami produktów i integracjami płatności.",
    tech: ["WordPress", "WooCommerce", "Filtry", "Integracje"],
    url: "https://polens.bike/",
    category: "E-commerce",
  },
  {
    id: 6,
    title: "Gemora",
    description:
      "Elegancki sklep z biżuterią z personalizacją wyglądu, niestandardowymi kartami produktów i nowoczesnym designem.",
    tech: ["WordPress", "WooCommerce", "Luxury Design"],
    url: "https://gemora.pl/",
    category: "E-commerce Premium",
  },
  {
    id: 7,
    title: "Data Logistix",
    description:
      "Nowoczesna strona wykonana w standardzie pixel perfect z przejrzystą strukturą podkreślającą profesjonalny charakter marki.",
    tech: ["WordPress", "Pixel Perfect", "Corporate"],
    url: "https://datalogistix-studio.com/",
    category: "Strona Firmowa",
  },
  {
    id: 8,
    title: "LMS Sisoft",
    description:
      "Prosty system e-learningowy umożliwiający tworzenie kursów, testów i certyfikatów z intuicyjnym panelem zarządzania.",
    tech: ["WordPress", "TutorLMS", "E-learning"],
    url: "#",
    category: "Edukacja",
  },
  {
    id: 9,
    title: "Mimo Decor",
    description:
      "Stylowa strona dla branży dekoracji wnętrz z zintegrowanym feedem Instagram automatycznie wyświetlającym najnowsze posty.",
    tech: ["WordPress", "Instagram API", "Visual Design"],
    url: "http://mimodecor.pl/",
    category: "Design & Dekoracje",
  },
  {
    id: 10,
    title: "Ciszum",
    description:
      "Strona fundacji z naciskiem na dostępność (WCAG) i modułem zapisów online na wydarzenia i warsztaty społeczne.",
    tech: ["WordPress", "Accessibility", "WCAG", "Zapisy Online"],
    url: "https://ciszum.pl/",
    category: "Non-profit",
  },
  {
    id: 11,
    title: "PaniOdKredytów",
    description:
      "Lejek sprzedażowy zintegrowany z WebinarJam umożliwiający zapisy na webinary i automatyczne przypomnienia.",
    tech: ["WordPress", "WebinarJam", "Sales Funnel"],
    url: "https://zapisy.paniodkredytow.pl/",
    category: "Marketing",
  },
  {
    id: 12,
    title: "LODF Konkurs",
    description:
      "Dedykowany system konkursowy na miarę z panelem administracyjnym, moderacją i automatycznym wyłanianiem zwycięzców.",
    tech: ["Laravel", "Custom System", "Admin Panel"],
    url: "http://lofd.pl/",
    category: "Aplikacja Custom",
  },
  {
    id: 13,
    title: "ElitePartner",
    description:
      "Restrukturyzacja i migracja platformy Moodle z tradycyjnego hostingu na dedykowany VPS z optymalizacją wydajności i bezpieczeństwa.",
    tech: ["Moodle", "VPS Migration", "Optymalizacja", "Bezpieczeństwo"],
    url: "http://elitepartner-kursy.soft-synergy.com/",
    category: "E-learning",
  },
  {
    id: 14,
    title: "Sprzedaż Batików",
    description:
      "Kompleksowy lejek sprzedażowy dla sklepu z batikami z automatyzacją follow-upów i integracją płatności.",
    tech: ["WordPress", "Sales Funnel", "Automatyzacja", "Płatności"],
    url: "https://realizacje.soft-synergy.com/batik/",
    category: "E-commerce",
  },
  {
    id: 15,
    title: "Drukarki - Porównanie Produktów",
    description:
      "Zaawansowana strona porównująca drukarki z modułem porównania produktów i integracją z systemem leasingowym.",
    tech: ["WordPress", "Porównanie Produktów", "Leasing", "Kalkulator"],
    url: "https://realizacje.soft-synergy.com/copy-system",
    category: "Portal Produktowy",
  },
  {
    id: 16,
    title: "SiteSculpt",
    description:
      "Zaawansowany generator AI do tworzenia wysoko konwertujących landing page'y z automatyczną optymalizacją pod kampanie marketingowe.",
    tech: ["Nuxt.js", "Express.js", "AI Generator", "Landing Pages"],
    url: "https://sitesculpt.soft-synergy.com/",
    category: "AI & Automatyzacja",
  },
  {
    id: 17,
    title: "Skytower",
    description:
      "Profesjonalna strona firmowa z nowoczesnym designem i zoptymalizowaną strukturą dla branży nieruchomości.",
    tech: ["WordPress", "Corporate Design", "Nieruchomości"],
    url: "https://skytower.pl/",
    category: "Strona Firmowa",
  },
]

export default function Portfolio() {
  return (
    <ShaderBackground>
      <Header />

      <main className="relative z-20 min-h-screen pt-24 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Nasze <span className="font-semibold text-blue-400">Portfolio</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Poznaj nasze zrealizowane projekty - od prostych stron firmowych po zaawansowane systemy e-commerce i
              aplikacje custom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      Zobacz stronę
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Gotowy na Twój Projekt?</h2>
              <p className="text-white/70 mb-6">
                Skontaktuj się z nami, aby omówić Twoje potrzeby i stworzyć rozwiązanie idealnie dopasowane do Twojego
                biznesu.
              </p>
              <a
                href="https://cal.com/soft-synergy/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200"
              >
                Umów Spotkanie
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
