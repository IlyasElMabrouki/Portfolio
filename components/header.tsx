"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [link,setLink] = useState<string>("Home");

  return (
    <div className="mx-auto mt-4 rounded-full bg-slate-300 p-3 w-max">
        <Link className={`${link == "Home" ? 'bg-slate-200' : ''} rounded-full p-2 `} href="" onClick={()=>setLink("Home")}>Home</Link>
        <Link className={`${link == "About" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("About")}>About</Link>
        <Link className={`${link == "Projects" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Projects")}>Projects</Link>
        <Link className={`${link == "Skills" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Skills")}>Skills</Link>
        <Link className={`${link == "Experience" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Experience")}>Experience</Link>
        <Link className={`${link == "Contact" ? 'bg-slate-200' : ''} rounded-full p-2 `}  href="" onClick={()=>setLink("Contact")}>Contact</Link>
    </div>
  )
}
