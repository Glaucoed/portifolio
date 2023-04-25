import React from 'react'
import style from '../styles/Footer.module.css'

import { 
  RiLinkedinLine,
  RiGithubLine

} from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
      <span> Siga me: </span>
        <div className={style.footerIcons}>
        <a href="https://www.linkedin.com/in/glauco-esverzuthe/">
          <RiLinkedinLine className={style.iconFt} />
        </a>
        <a href="https://github.com/Glaucoed">
          <RiGithubLine className={style.iconFt} />
        </a>
        </div>

      </div>
      <div>
        <span>Copyright 2023 developed by </span>
        <a href="https://github.com/Glaucoed">Glaucoed</a>
      </div>

    </footer>
    
  )
}
