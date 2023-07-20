'use client'

import { Facebook } from "@mui/icons-material"
// import Link from "next/link"
import { Link } from "@mui/material"
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitter, FaTwitterSquare, FaYoutube } from "react-icons/fa"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Col-1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          <Link href="/login" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Login
          </Link>
          <Link href="/register" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Register
          </Link>
          <Link href="/logout" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Logout
          </Link>
        </div>
        {/* Col-2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          {/* Col Title */}
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Acerca de
          </div>
          <Link href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Inicio
          </Link>
          <Link href="/about" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Sobre nosotros
          </Link>
          <Link href="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contáctanos
          </Link>
        </div>
        {/* Col-3 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Legal
          </div>
          <a href="/terms" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Términos del Servicio
          </a>
          <a href="/privacy" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Política y Privacidad
          </a>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5
          border-t border-gray-500 text-gray-400 text-sm
          flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            <Copyright />
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <Link href="facebook.com" className="w-6 mx-1">
              <FaFacebook />
            </Link>
            <Link href="twitter.com" className="w-6 mx-1">
              <FaTwitter />
            </Link>
            <Link href="youtube.com" className="w-6 mx-1">
              <FaYoutube />
            </Link>
            <Link href="linkedin.com" className="w-6 mx-1">
              <FaLinkedin />
            </Link>
            <Link href="instagram.com" className="w-6 mx-1">
              <FaInstagram />
              </Link>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Footer