'use client'

import { 
  MapPinIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Ubicación inteligente',
    description: 'Encuentra automáticamente las estaciones de servicio más cercanas a tu ubicación actual.',
    icon: MapPinIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Comparación de precios',
    description: 'Compara precios de nafta súper, premium y gasoil en tiempo real para ahorrar en cada carga.',
    icon: CurrencyDollarIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Actualizaciones en tiempo real',
    description: 'Los precios se actualizan constantemente gracias a nuestra comunidad de usuarios.',
    icon: ClockIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Comunidad activa',
    description: 'Miles de usuarios contribuyen diariamente con actualizaciones de precios y nuevas estaciones.',
    icon: UserGroupIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Estadísticas personales',
    description: 'Lleva un registro de tus cargas de combustible y cuánto has ahorrado usando la app.',
    icon: ChartBarIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Datos confiables',
    description: 'Información verificada y moderada para garantizar la precisión de los precios mostrados.',
    icon: ShieldCheckIcon,
    color: 'text-brand-accent',
    bgColor: 'bg-primary-100',
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-white dark:bg-brand-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Todo lo que necesitas para ahorrar combustible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Precio Nafta te ofrece todas las herramientas necesarias para encontrar los mejores precios 
            y optimizar tus gastos en combustible.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-brand-secondary rounded-2xl hover:bg-white dark:hover:bg-brand-tertiary hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-brand-accent/20">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${feature.bgColor} dark:bg-brand-tertiary group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{feature.name}</h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-3xl px-6 py-12 sm:px-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Únete a miles de usuarios que ya ahorran
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">50K+</div>
                <div className="mt-2 text-gray-300">Usuarios activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">10K+</div>
                <div className="mt-2 text-gray-300">Estaciones registradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">$500K+</div>
                <div className="mt-2 text-gray-300">Ahorrados por usuarios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
