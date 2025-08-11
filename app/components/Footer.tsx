"use client";

export default function Footer() {
  return (
    <footer className="bg-brand-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Precio Nafta</h3>
            <p className="text-gray-300 max-w-md">
              La app más completa para encontrar los mejores precios de
              combustible en Argentina. Ahorrá plata en cada carga. Enviá
              sugerencias y reportá errores para que verifiquemos los precios
              los informan las estaciones.
            </p>
            <div className="mt-6">
              <a
                href="https://www.precionafta.com"
                className="text-brand-accent hover:text-primary-300 font-medium"
              >
                www.precionafta.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Funciones
                </a>
              </li>
              <li>
                <a
                  href="#screenshots"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Capturas
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bajate la App
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Precio Nafta. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <span className="text-gray-400 text-sm">
                Hecho con ❤️ en Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
