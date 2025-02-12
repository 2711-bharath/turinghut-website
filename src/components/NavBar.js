import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Transition } from "@headlessui/react"
import NavLinks from "./NavLinks"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="bg-secondary w-full fixed z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10v">
            <Link
              to="/"
              className=" hover:text-gray text-white text-xl px-3 py-2 font-semibold flex-shrink-0"
            >
              TURING HUT
            </Link>
            <div className="flex items-center justify-self-end">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLinks alignVertical={false} />
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3">
                <NavLinks alignVertical={true} />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}
