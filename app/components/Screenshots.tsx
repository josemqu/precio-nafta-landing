"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import ScrollReveal from "./ScrollReveal";
import SmartImage from "./SmartImage";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const screenshots = {
  mobile: [
    {
      name: "Mapa de estaciones",
      description: "Encontrá estaciones cerca tuyo con precios actualizados",
      image: "/images/screenshots/mobile/01.png",
      fallback: "/images/screenshots/mobile/01.png",
    },
    {
      name: "Lista de precios",
      description: "Compará precios de diferentes combustibles",
      image: "/images/screenshots/mobile/02.png",
      fallback: "/images/screenshots/mobile/02.png",
    },
    {
      name: "Perfil del usuario",
      description: "Gestioná tu perfil y preferencias",
      image: "/images/screenshots/mobile/03.png",
      fallback: "/images/screenshots/mobile/03.png",
    },
  ],
  web: [
    {
      name: "Dashboard principal",
      description: "Vista completa del mapa y precios en pantalla grande",
      image: "/images/screenshots/web/01.png",
      fallback: "/images/screenshots/web/01.png",
    },
    {
      name: "Análisis detallado",
      description: "Vista de análisis de precios y tendencias",
      image: "/images/screenshots/web/02.png",
      fallback: "/images/screenshots/web/02.png",
    },
  ],
};

export default function Screenshots() {
  return (
    <div
      id="screenshots"
      className="bg-gray-50 dark:bg-brand-secondary py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Capturas de pantalla
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Accedé a Precio Nafta desde tu dispositivo favorito. La misma
            experiencia optimizada para móvil, tablet y escritorio.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-16">
          <Tab.Group>
            <Tab.List className="flex justify-center space-x-1 rounded-xl bg-brand-accent/20 dark:bg-brand-tertiary p-1 max-w-md mx-auto">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-blue-700 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                      <div className="aspect-[9/19.5] w-full overflow-hidden rounded-2xl bg-gray-200 group-hover:opacity-75 transition-opacity">
                        <SmartImage
                          src={screenshot.image}
                          fallback={screenshot.fallback}
                          alt={screenshot.name}
                          className="h-full w-full object-cover object-center"
                          width={375}
                          height={812}
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {screenshot.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white p-3">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {screenshots.web.map((screenshot, index) => (
                    <div key={index} className="group relative">
                      <div className="aspect-[80/57] w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 transition-opacity">
                        <SmartImage
                          src={screenshot.image}
                          fallback={screenshot.fallback}
                          alt={screenshot.name}
                          className="h-full w-full object-cover object-center"
                          width={2400}
                          height={1710}
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {screenshot.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </ScrollReveal>

        {/* Platform availability */}
        <ScrollReveal delay={400} className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">
            Funciona bárbaro en todos tus dispositivos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-4xl">📱</div>
            <div className="text-4xl">💻</div>
            <div className="text-4xl">🖥️</div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
