"use client";

import { ArrowDownTrayIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const downloadOptions = [
  {
    name: "Web App",
    description: "Accedé directamente desde tu navegador",
    url: "https://www.precionafta.com",
    icon: GlobeAltIcon,
    color: "bg-brand-accent hover:bg-primary-600",
    available: true,
  },
  {
    name: "Google Play",
    description: "Bajate para Android",
    url: "https://play.google.com/store/apps/details?id=com.precionafta.www.twa&hl=es_AR",
    icon: ArrowDownTrayIcon,
    color: "bg-brand-accent hover:bg-primary-600",
    available: true,
    badge: "🤖",
  },
  {
    name: "App Store",
    description: "Bajate para iPhone y iPad",
    url: "#",
    icon: ArrowDownTrayIcon,
    color: "bg-brand-primary hover:bg-brand-secondary",
    badge: "🍎",
  },
];

export default function Download() {
  return (
    <div
      id="download"
      className="bg-white dark:bg-brand-primary py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/icons/pump_64.png"
              alt="Precio Nafta"
              width={48}
              height={48}
              className="w-12 h-12 rounded-lg"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Empezá a ahorrar hoy mismo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Bajate Precio Nafta en tu plataforma favorita y sumate a miles de
            usuarios que ya están ahorrando en combustible.
          </p>
        </ScrollReveal>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloadOptions.map((option, index) => (
              <ScrollReveal
                key={option.name}
                delay={index * 150}
                className="group relative"
              >
                <a
                  href={option.url}
                  className="block p-6 bg-gray-50 dark:bg-brand-secondary rounded-2xl hover:bg-white dark:hover:bg-brand-tertiary hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-brand-accent/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {option.badge && (
                      <span className="text-2xl">{option.badge}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {option.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {option.description}
                  </p>
                  {option.available ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Disponible
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Muy pronto
                    </span>
                  )}
                  <div className="flex items-center text-sm font-medium text-brand-accent group-hover:text-primary-600">
                    {option.name === "Web App"
                      ? "Abrir ahora"
                      : "Bajate gratis"}
                    <ArrowDownTrayIcon className="ml-2 h-4 w-4" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <ScrollReveal delay={300} className="mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-primary-50 dark:from-brand-secondary dark:to-brand-tertiary rounded-3xl px-6 py-12 sm:px-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Por qué elegir Precio Nafta?
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🆓</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Completamente gratis
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Sin publicidad molesta
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Súper rápida
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Resultados instantáneos
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Privacidad protegida
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Tus datos están seguros
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Siempre mejorando
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Actualizaciones constantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal delay={500} className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.precionafta.com"
              className="btn-primary text-lg px-8 py-4"
            >
              Probar Web App
            </a>
            <a href="#" className="btn-secondary text-lg px-8 py-4">
              Ver en tiendas
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Disponible para iOS, Android y Web • Más de 50,000 usuarios activos
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
