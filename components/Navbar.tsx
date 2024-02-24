"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState (false);

  const handleOpen =() => {setIsOpen (!isOpen)}

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={74} height={29} />
      </Link>
      
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200">
          <ul className="py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="py-2">
                <Link href={link.href} className="block px-4 regular-16 text-gray-800 transition-all hover:font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>


      <Image onClick={handleOpen}
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />      
    </nav>
  )
}

export default Navbar