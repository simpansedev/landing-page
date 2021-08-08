import App, {AppContext, AppProps} from 'next/app'
import Router from "next/router"
import React, { useEffect, useState } from 'react'
import redirectTo from "../helpers/redirect-to"
import  "../assets/styles/globals.css";
import "../assets/styles/global.scss";
import 'tailwindcss/tailwind.css'
import Layout from "../layout/default";
import { ThemeContextProvider } from "../context/theme";
import { ScrollProvider } from "../context/scroll";

const MyApp = ({ Component, pageProps }: AppProps)=>{
  
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/home')
        // location.replace("/home")
    }
  },[]);

  return ( 
    <ScrollProvider>
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ThemeContextProvider>
    </ScrollProvider>
  )
}
export default MyApp