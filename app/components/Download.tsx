'use client'

import { ArrowDownTrayIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const downloadOptions = [
  {
    name: 'Web App',
    description: 'Accede directamente desde tu navegador',
    url: 'https://www.precionafta.com',
    icon: GlobeAltIcon,
    color: 'bg-brand-accent hover:bg-primary-600',
    available: true
  },
  {
    name: 'App Store',
    description: 'Descarga para iPhone y iPad',
    url: '#',
    icon: ArrowDownTrayIcon,
    color: 'bg-brand-primary hover:bg-brand-secondary',
    available: true,
    badge: '🍎'
  },
  {
    name: 'Google Play',
    description: 'Descarga para Android',
    url: '#',
    icon: ArrowDownTrayIcon,
    color: 'bg-brand-accent hover:bg-primary-600',
    available: true,
    badge: '🤖'
  }
]

export default function Download() {
  return (
    <div id="download" className="bg-white dark:bg-brand-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comienza a ahorrar hoy mismo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Descarga Precio Nafta en tu plataforma favorita y únete a miles de usuarios 
            que ya están ahorrando en combustible.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {downloadOptions.map((option) => (
              <div key={option.name} className="group relative">
                <a
                  href={option.url}
                  className="block p-6 bg-gray-50 dark:bg-brand-secondary rounded-2xl hover:bg-white dark:hover:bg-brand-tertiary hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-brand-accent/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.color} group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {option.badge && (
                      <span className="text-2xl">{option.badge}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{option.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
                  <div className="flex items-center text-sm font-medium text-brand-accent group-hover:text-primary-600">
                    {option.name === 'Web App' ? 'Abrir ahora' : 'Descargar gratis'}
                    <ArrowDownTrayIcon className="ml-2 h-4 w-4" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-primary-50 dark:from-brand-secondary dark:to-brand-tertiary rounded-3xl px-6 py-12 sm:px-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir Precio Nafta?
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🆓</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Completamente gratis</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Sin publicidad molesta</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Súper rápida</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Resultados instantáneos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Privacidad protegida</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Tus datos están seguros</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌟</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Siempre mejorando</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Actualizaciones constantes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.precionafta.com"
              className="btn-primary text-lg px-8 py-4"
            >
              Probar Web App
            </a>
            <a
              href="#"
              className="btn-secondary text-lg px-8 py-4"
            >
              Ver en tiendas
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Disponible para iOS, Android y Web • Más de 50,000 usuarios activos
          </p>
        </div>
      </div>
    </div>
  )
}
