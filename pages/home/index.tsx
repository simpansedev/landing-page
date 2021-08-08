import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useContext } from 'react'
import {ThemeContext} from '../../context/theme'
import Hero from '../../assets/images/hero2.png'
import { RiSunFill, RiMoonFill } from "react-icons/ri";
import AboutUs from "../../components/home/about_us";
import Project from '../../components/home/project'
import Contact from '../../components/home/contact'
import BtnTheme from '../../components/btn_theme'

export default function Home() {
  const dataContext = useContext(ThemeContext)
  const {isLight, light, dark, toggle} = dataContext

  const theme = isLight ? light : dark;

  useEffect(() => {
    // console.log(dataContext)
    return () => {dataContext}
  }, [dataContext])

  return (
    <div className={`home pb-4`}>
      <Head>
        <title>Home - Simpanse Dev</title>
        <meta name="description" content="Home - Simpanse Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`home__image shadow-md flex flex-col items-center justify-end w-full ${isLight ? 'home__image-light bg-gradient-to-r from-green-600 via-green-300 to-green-600' : 'home__image-dark bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800'}`}
      >
        <div className="home__text">Simpanse Dev</div>
        <Image 
          src={Hero}
          className="object-cover image"
          height={400}
          width={500}
        />
      </div>

      <div className={`home__content mx-2 mt-8`}>
        <AboutUs text_color={`${isLight ? 'text-gray-800' : 'text-white'}`}/>
        <Project text_color={`${isLight ? 'text-gray-800' : 'text-white'}`}/>
        <Contact text_color={`${isLight ? 'text-gray-800' : 'text-white'}`}/>
      </div>

      <BtnTheme isLight={isLight} toggle={toggle} />
    </div>
  )
}
