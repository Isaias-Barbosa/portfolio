import Banner from 'componentes/Banner'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function PaginaPadrao({children}) {
  const { pathname } = useLocation();
  return (
    <main id="conteudo">
        {pathname === "/" && <Banner />}

        <Outlet />
        {children}
    </main>
  )
}
