'use client';
import { navbarData } from "@/constants"
import Container from "./Container"
import Logo from "./Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import path from "path";

const Header = () => {
  const [isSideBarOpen,setIsSideBarOpen] = useState(false);
  const pathname = usePathname()
  return (
    <header className = "border-b border-b-hoverColor/50 bg-bodyColor text-white sticky top-0 z-50">
        <Container className="py-5 flex items-center
        justify-between">
            <Logo title = "Rohan" subtitle = "."/>
            <div
            className="hidden md:inline-flex items-center gap-7 text-sm uppercase 
            tracking-wide font-medium">
              {navbarData?.map((item) => (
              <Link key ={item?.title} href={item?.href} 
              className={`hover:text-hoverColor hoverEffect relative group 
              overflow-x-hidden ${pathname === item?.href && "text-hoverColor"}` }>
                {item?.title }
                <span
                className={`w-full h-px bg-hoverColor inline-block absolute 
                left-0 bottom-0 group-hover:translate-x-0 hoverEffect 
                ${pathname === item?.href ? "translate-x-0" : "-translate-x-[105%]" }`}></span>
                </Link>
            ))}
            <Link href = {`./RohanResumeMain.pdf`} target="_blank" rel="noopener noreferrer" 
            className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border
             border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor 
             hover:text-black hoverEffect">Hire me</Link>
            </div>
            <button aria-label = "Toggle Menu" 
            onClick={() => setIsSideBarOpen(!isSideBarOpen)} 
            className="inline-flex md:hidden hover:text-hoverColor  hoverEffect">
            <Menu/></button>

        </Container>
         <div className = "md:hidden ">
          <Sidebar isOpen ={isSideBarOpen} onClose = {() => setIsSideBarOpen(false)} pathname = {pathname} /></div>
    </header>
  )
}

export default Header