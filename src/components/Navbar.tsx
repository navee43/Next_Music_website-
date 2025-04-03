
'use client'

import React from 'react'

import  { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from 'next/link';


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >

      <Menu setActive={setActive}>
       <Link href={"/"}>
       <MenuItem setActive={setActive} active={active} item="Home" >
       

        
       </MenuItem>
       </Link>
        <MenuItem setActive={setActive} active={active} item='courses' >
       <div className='flex flex-col capitalize space-y-4 hover:text-white'>
       <HoveredLink href="/courses">
          All courses
        </HoveredLink>
        <HoveredLink href='#'>
         Basic Music theory
        </HoveredLink>
        <HoveredLink href='#'>
         Advanced Composition
        </HoveredLink>
        <HoveredLink href='#'>
         Advanced Composition
        </HoveredLink>
        <HoveredLink href='#'>
         Music Production
        </HoveredLink>
       </div>
        
        </MenuItem>
        <Link href={'/contact'}>
        <MenuItem setActive={setActive} active={active} item="contact us">
        </MenuItem>
        </Link>


      </Menu>


    </div>
    
        
       
       
  )
}

export default Navbar