import React from 'react'
import style from '../styles/Nav.module.css'

import { MdEmail} from 'react-icons/md'

export default function Nav() {
  return (
  <div className={style.header}>
    <div />
    <div className={style.links}>
      <a href="#main">Inicio</a>
      <a href="#sobre">Sobre</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#projetos">Projetos</a>
    </div>
    <div>
      <a className={style.email} href="mailto:gesverzuthe@gmail.com"> {<MdEmail className={style.iconEmail} />} Enviar e-mail</a>
      
    </div>
  </div>
  )
}
