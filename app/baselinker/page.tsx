"use client"

import { ShaderBackground } from "@/components/shader-background"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Code, Database, ArrowRight, Clock, DollarSign, Shield, Star } from "lucide-react"

export default function BaseLinkerPage() {
  return (
    <ShaderBackground>
      <Header />

      <main className="relative z-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Autorski Framework Integracji</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent">
              Integracje BaseLinker
              <br />
              <span className="text-orange-400">Szybciej i Taniej</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Dzięki naszemu autorskiemu frameworkowi mamy gotową bazę komponentów, którą tylko adaptujemy do Twoich
              potrzeb.
              <strong> Efekt? 70% szybciej i 50% taniej</strong> niż tradycyjne podejście.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open("https://cal.com/soft-synergy/30min", "_blank")}
              >
                Umów Konsultację
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg bg-transparent"
              >
                Zobacz Case Study
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Nasz <span className="text-blue-400">Framework</span> w Akcji
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-orange-400">Tradycyjne Podejście vs. Nasz Framework</h3>

                <div className="space-y-6">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2">❌ Tradycyjnie (6-12 tygodni)</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Analiza API od zera</li>
                      <li>• Pisanie kodu integracji od podstaw</li>
                      <li>• Testowanie każdego endpointa osobno</li>
                      <li>• Obsługa błędów metodą prób i błędów</li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2">✅ Nasz Framework (1-3 tygodnie)</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Gotowe moduły dla popularnych API</li>
                      <li>• Automatyczna adaptacja do nowych endpointów</li>
                      <li>• Wbudowane mechanizmy retry i error handling</li>
                      <li>• Predefiniowane mapowania danych</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Komponenty Naszego Frameworka:</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-200">Uniwersalny adapter API</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-200">Automatyczne mapowanie danych</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-200">Zaawansowane error handling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-gray-200">Real-time synchronizacja</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Dlaczego Nasz System Jest <span className="text-orange-400">Wyjątkowy?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">70% Szybciej</h3>
                <p className="text-gray-300 leading-relaxed">
                  Dzięki gotowym komponentom frameworka, integracje które normalnie zajmują 3 miesiące, realizujemy w
                  3-4 tygodnie.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">50% Taniej</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nie płacisz za pisanie kodu od zera. Adaptujemy gotowe rozwiązania, co znacznie obniża koszty
                  projektu.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sprawdzona Stabilność</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nasze komponenty są przetestowane w dziesiątkach projektów. Minimalne ryzyko błędów i problemów.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Co Mówią Nasi Klienci <span className="text-blue-400">BaseLinker</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Integracja naszego ERP z BaseLinker zajęła im tylko 2 tygodnie. Wcześniej inne firmy mówiły o 2-3
                  miesiącach. Oszczędziliśmy 40 000 zł."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Michał K.</div>
                  <div className="text-gray-400">CEO, TechDistribution</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Synchronizacja z 5 hurtowniami działa bezawaryjnie od 8 miesięcy. Automatyzacja pozwoliła nam zwolnić
                  2 osoby z działu logistyki."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Anna W.</div>
                  <div className="text-gray-400">Dyrektor Operacyjny, MegaShop</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Połączenie BaseLinker z naszym systemem magazynowym było kluczowe. Teraz stany aktualizują się co 5
                  minut zamiast raz dziennie."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Tomasz L.</div>
                  <div className="text-gray-400">IT Manager, AutoParts Pro</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Integracja z Allegro, Amazon i naszym sklepem przez BaseLinker. Jeden dashboard do zarządzania
                  wszystkimi kanałami sprzedaży."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Karolina M.</div>
                  <div className="text-gray-400">E-commerce Manager, SportZone</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Połączenie z systemem księgowym iFirma oszczędza nam 20 godzin pracy tygodniowo. Faktury generują się
                  automatycznie."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Piotr S.</div>
                  <div className="text-gray-400">CFO, ElektroMax</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Dzięki integracji z kurierami DPD i InPost, etykiety drukują się automatycznie. Błędy w wysyłce
                  spadły o 95%."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-white">Marcin R.</div>
                  <div className="text-gray-400">Logistics Director, HomeDecor</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Przykłady <span className="text-blue-400">Integracji</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Systemy ERP (SAP, Microsoft Dynamics, Comarch)",
                "Platformy e-commerce (Shopify, WooCommerce, PrestaShop)",
                "Systemy magazynowe (WMS, Logistic Pro)",
                "Kurierzy i logistyka (DPD, InPost, UPS, FedEx)",
                "Systemy płatności (PayU, Przelewy24, Stripe)",
                "Hurtownie i dostawcy (API B2B, EDI)",
                "Systemy księgowe (iFirma, Wfirma, Comarch)",
                "Platformy marketingowe (Facebook, Google Ads)",
                "Systemy CRM (Salesforce, HubSpot, Pipedrive)",
                "Narzędzia analityczne (Google Analytics, Hotjar)",
                "Systemy HR (BambooHR, Workday)",
                "Platformy komunikacyjne (Slack, Teams, Discord)",
              ].map((integration, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Jak Działa Nasz <span className="text-orange-400">Framework?</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Analiza i Dopasowanie",
                  description:
                    "Analizujemy Twoje API i dopasowujemy odpowiednie komponenty z naszego frameworka. Identyfikujemy które moduły wymagają adaptacji, a które działają od razu.",
                  time: "1-2 dni",
                },
                {
                  step: "02",
                  title: "Adaptacja Komponentów",
                  description:
                    "Zamiast pisać kod od zera, adaptujemy gotowe moduły do Twoich potrzeb. Konfigurujemy mapowania danych, endpointy i reguły biznesowe.",
                  time: "3-5 dni",
                },
                {
                  step: "03",
                  title: "Integracja i Testy",
                  description:
                    "Łączymy wszystkie komponenty w spójny system. Przeprowadzamy testy automatyczne i manualne na środowisku testowym z rzeczywistymi danymi.",
                  time: "2-3 dni",
                },
                {
                  step: "04",
                  title: "Wdrożenie Produkcyjne",
                  description:
                    "Migrujemy rozwiązanie na produkcję z zachowaniem ciągłości działania. Monitorujemy pierwsze dni pracy i optymalizujemy wydajność.",
                  time: "1-2 dni",
                },
                {
                  step: "05",
                  title: "Wsparcie i Rozwój",
                  description:
                    "Zapewniamy monitoring 24/7, regularne aktualizacje frameworka i wsparcie przy rozszerzaniu funkcjonalności o nowe integracje.",
                  time: "Ciągłe",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">{item.time}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Porównanie <span className="text-green-400">Kosztów</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-red-300">❌ Tradycyjne Podejście</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Analiza i projektowanie</span>
                    <span className="text-white font-semibold">15 000 - 25 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Programowanie (6-12 tyg)</span>
                    <span className="text-white font-semibold">40 000 - 80 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Testy i debugowanie</span>
                    <span className="text-white font-semibold">10 000 - 20 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wdrożenie i szkolenia</span>
                    <span className="text-white font-semibold">5 000 - 10 000 zł</span>
                  </div>
                  <hr className="border-red-500/30" />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-red-300">RAZEM:</span>
                    <span className="text-red-300">70 000 - 135 000 zł</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-300">✅ Nasz Framework</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Analiza i konfiguracja</span>
                    <span className="text-white font-semibold">5 000 - 8 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Adaptacja frameworka (1-3 tyg)</span>
                    <span className="text-white font-semibold">15 000 - 30 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Testy i optymalizacja</span>
                    <span className="text-white font-semibold">3 000 - 6 000 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wdrożenie</span>
                    <span className="text-white font-semibold">2 000 - 4 000 zł</span>
                  </div>
                  <hr className="border-green-500/30" />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-green-300">RAZEM:</span>
                    <span className="text-green-300">25 000 - 48 000 zł</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <span className="text-green-300 font-bold text-lg">Oszczędność: 45 000 - 87 000 zł</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-500/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Gotowy na <span className="text-orange-400">Integrację?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Umów bezpłatną konsultację i dowiedz się, jak nasz framework może zaoszczędzić Ci czas i pieniądze przy
                integracji z BaseLinker.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open("https://cal.com/soft-synergy/30min", "_blank")}
                >
                  Umów Konsultację (30 min)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-2">70%</div>
                  <div className="text-sm text-gray-300">Szybciej niż konkurencja</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">50%</div>
                  <div className="text-sm text-gray-300">Niższe koszty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Zadowolonych klientów</div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                <p>📧 jakub.czajka@soft-synergy.com</p>
                <p>📞 +48 793 868 886</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ShaderBackground>
  )
}
