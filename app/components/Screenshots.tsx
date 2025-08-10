'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { DevicePhoneMobileIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const screenshots = {
  mobile: [
    {
      name: 'Mapa de estaciones',
      description: 'Encuentra estaciones cercanas con precios actualizados',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Lista de precios',
      description: 'Compara precios de diferentes combustibles',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Perfil y estadísticas',
      description: 'Lleva un registro de tus ahorros',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ],
  web: [
    {
      name: 'Dashboard principal',
      description: 'Vista completa del mapa y precios en pantalla grande',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Análisis detallado',
      description: 'Estadísticas avanzadas y tendencias de precios',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    }
  ]
}

export default function Screenshots() {
  return (
    <div id="screenshots" className="bg-gray-50 dark:bg-brand-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Disponible en todas las plataformas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Accede a Precio Nafta desde tu dispositivo favorito. La misma experiencia optimizada 
            para móvil, tablet y escritorio.
          </p>
        </div>

        <div className="mt-16">
          <Tab.Group>
            <Tab.List className="flex justify-center space-x-1 rounded-xl bg-brand-accent/20 dark:bg-brand-tertiary p-1 max-w-md mx-auto">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <DevicePhoneMobileIcon className="h-5 w-5" />
                  <span>Móvil</span>
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <ComputerDesktopIcon className="h-5 w-5" />
                  <span>Web</span>
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-8">
              <Tab.Panel className="rounded-xl bg-white p-3">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {screenshots.mobile.map((screenshot, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 transition-opacity">
                        <img
                          src={screenshot.image}
                          alt={screenshot.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium text-gray-900">{screenshot.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{screenshot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white p-3">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {screenshots.web.map((screenshot, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 transition-opacity">
                        <img
                          src={screenshot.image}
                          alt={screenshot.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium text-gray-900">{screenshot.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{screenshot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Platform availability */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Funciona perfectamente en todos tus dispositivos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-4xl">📱</div>
            <div className="text-4xl">💻</div>
            <div className="text-4xl">🖥️</div>
            <div className="text-4xl">⌚</div>
          </div>
        </div>
      </div>
    </div>
  )
}
