import React, { Component, useContext, useEffect, useState } from 'react';
import Header from '../components/header';
import { ScrollContext } from '../context/scroll';

export default function Layout({children}: any) {

  return (
    <div className='layout'>
      <Header/>
      <main>{children}</main>
    </div>
  );
}