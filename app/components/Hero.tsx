"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import DarkModeToggle from "./DarkModeToggle";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-brand-primary dark:via-brand-secondary dark:to-brand-tertiary">
      {/* Navigation */}
      <Disclosure
        as="nav"
        className="fixed top-0 inset-x-0 z-50 bg-white/80 dark:bg-brand-secondary/80 backdrop-blur border-b border-gray-100 dark:border-brand-tertiary"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center space-x-3">
                    <Image
                      src="/images/icons/pump_64.png"
                      alt="Precio Nafta"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-md"
                    />
                    <h1 className="text-2xl font-bold text-brand-accent">
                      <a href="/">Precio Nafta</a>
                    </h1>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    <a
                      href="#features"
                      className="text-brand-gray hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Funciones
                    </a>
                    <a
                      href="#screenshots"
                      className="text-brand-gray hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Capturas
                    </a>
                    <a
                      href="#download"
                      className="text-brand-gray hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Descargar
                    </a>
                    <DarkModeToggle />
                  </div>
                </div>
                <div className="md:hidden flex items-center space-x-2">
                  <DarkModeToggle />
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 dark:bg-brand-tertiary p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-secondary hover:text-gray-500 dark:hover:text-white">
                    <span className="sr-only">Abrir menú</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden absolute top-16 inset-x-0 z-40">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-white dark:bg-brand-secondary border-t dark:border-brand-tertiary shadow-lg">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent block px-3 py-2 text-base font-medium"
                >
                  Funciones
                </a>
                <a
                  href="#screenshots"
                  className="text-gray-600 hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent block px-3 py-2 text-base font-medium"
                >
                  Capturas
                </a>
                <a
                  href="#download"
                  className="text-gray-600 hover:text-brand-accent dark:text-gray-300 dark:hover:text-brand-accent block px-3 py-2 text-base font-medium"
                >
                  Descargar
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Spacer to offset fixed nav height */}
      <div aria-hidden className="h-16" />

      {/* Hero Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <ScrollReveal>
              <div className="flex justify-center align-middle mb-8 space-x-4">
                <Image
                  src="/images/icons/pump_128.png"
                  alt="Precio Nafta App Icon"
                  width={128}
                  height={128}
                  className="w-24 h-24 rounded-lg"
                />
                <h1 className="flex items-center text-4xl text-center font-bold text-gray-500 dark:text-gray-300">
                  Precio Nafta
                </h1>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Encontrá el mejor</span>
                <span className="block text-brand-accent">
                  precio de combustible
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
                La app más completa para encontrar los mejores precios de nafta,
                gasoil y GNC cerca tuyo. Ahorrá plata en cada carga.
              </p>
            </ScrollReveal>

            {/* Key Benefits */}
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              <ScrollReveal delay={300}>
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                    <MapPinIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    Cerca tuyo
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                    Encontrá estaciones de servicio cerca tuyo con precios
                    actualizados
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <CurrencyDollarIcon
                      className="h-6 w-6 text-brand-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    Mejores precios
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                    Compará precios y ahorrá plata en cada carga
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <ClockIcon
                      className="h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    Siempre actualizado
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                    Precios actualizados al toque según la información provista
                    por las estaciones de servicio
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* CTA Buttons */}
            <ScrollReveal delay={600}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://www.precionafta.com"
                  className="btn-primary text-lg px-8 py-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Usar Web App
                </a>
                <a href="#download" className="btn-secondary text-lg px-8 py-4">
                  Descargar
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
}
