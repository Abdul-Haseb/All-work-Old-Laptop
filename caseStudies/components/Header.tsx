import { ApplicationWhiteLogo } from '@/components/common/ApplicationLogo'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Transition } from '@headlessui/react'

const Header = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)
  const mobileNav = useRef(null)

  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>   
    {/* NAVBAR  */}
    <div>
    <nav className='justify-between items-center hidden lg:flex'>
      {/* WORKREEL LOGO COMPONENT  */}
      <Link href={"/caseStudies"}>

      <ApplicationWhiteLogo/>
      </Link>
    {/* EMPLOYER LINK  */}
      <ul className='gap-6 flex'>
      <Link href={"/caseStudies/Employer"}>

        <li className='text-white font-normal md:text-xl cursor-pointer hover:text-cyan-400'>Employer</li>
      </Link>
      <Link href={"/caseStudies/Talent"}>
    {/* TALENT LINK  */}
        <li className='text-white font-normal md:text-xl cursor-pointer hover:text-cyan-400'>Talent</li>
      </Link>
      <Link href={"/caseStudies/About"}>
    {/* ABOUT LINK  */}
        <li className='text-white font-normal md:text-xl cursor-pointer hover:text-cyan-400'>About</li>
      </Link>
      <Link href={"/caseStudies/Career"}>
    {/* CAREER LINK  */}
        <li className='text-white font-normal md:text-xl cursor-pointer hover:text-cyan-400'>Career</li>
      </Link>
      </ul>
    </nav>
    </div>
    {/* MOBILE NAVBAR  */}
    <div>
    <div className='flex justify-between lg:hidden'>
      {/* WORKREEL LOGO  */}
      <Link href={"/caseStudies"}>      
      <ApplicationWhiteLogo
      width={140}
      height={30}
      />
      </Link>
      {/* HAMBURGER SVG  */}
      <button onClick={toggleMenu}>
      <svg
       className="w-8 h-8 fill-white text-gray-900 hover:text-gray-900 dark:text-gray-300 hover:animate-pulse hover:scale-110 duration-300 delay-150 dark:hover:text-gray-100"
       viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg">
       <rect y="4" width="24" height="2" rx="1" />
       <rect y="11" width="24" height="2" rx="1" />
       <rect y="18" width="24" height="2" rx="1" />
      </svg>
      </button>
      {/* MOBILE NAVIGATION  */}
      <Transition
        show={isMenuOpen}
        className="fixed top-0 h-screen z-20 left-0 md:w-128 sm:w-80 overflow-scroll dark:bg-gray-900 shadow-lg"
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
          {/*MOBILE NAVBAR NAVBAR */}
          <nav
          id='mobile-nav'
          ref={mobileNav}
          onClick={toggleMenu}
          className='fixed top-0 h-screen left-0 md:w-128 w-80 bg-background2 dark:bg-gray-900 no-scrollbar items-center justify-center overflow-hidden'         
          >
            {/* MOBILE NAVBAR MENU  */}
            <ul className='flex flex-col p-4 justify-start overflow-hidden'> 
            {/* CASE STUDIES HOME   */}
            <li>
              <Link href={"/caseStudies"}>
            <ApplicationWhiteLogo/>
              </Link>
              </li>   
              {/* MOBILE NAVBAR EMPLOYER           */}
              <li className="font-poppins text-lg text-white hover:bg-white hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                <Link
                href={"/caseStudies/Employer"}>                
                Employer
                </Link>
                </li>
                {/* MOBILE NAVBAR TALENT  */}
              <li className="font-poppins text-lg text-white hover:bg-white hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                <Link href={"/caseStudies/Talent"}>                
                Talent
                </Link>
                </li>
                {/* MOBILE NAVBAR ABOUT  */}
                <li className="font-poppins text-lg text-white hover:bg-white hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                  <Link href={"/caseStudies/About"}>About</Link>
                </li>
                {/* MOBILENAVBAR CAREER  */}
                <li className="font-poppins text-lg text-white hover:bg-white hover:text-gray-900 px-2 py-3 flex items-center transition duration-150 ease-in-out">
                  <Link href={"/caseStudies/Career"}>Career</Link>
                </li>
            </ul>
          </nav>
      </Transition>
    </div>
    </div>
    </>
    
  )
}

export default Header
