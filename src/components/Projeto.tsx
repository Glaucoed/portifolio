import React from 'react'
import projects from '../data/projects';
import style from '../styles/Projeto.module.css'

export default function Projeto() {
  return (
    <section className={style.containerProjects}>
      <h1>Projetos</h1>
      <div className={style.cardProjects}>
      {
        projects.map(({name, descricao, repositorio, tecnologias, img, id}, index)=> (
          <div key={name} className={`card${index}`}>
            <img src={img} alt={name} className={style.projectImg} />
            {/* <p>{name}</p>
            <p>{descricao}</p>
            {
              tecnologias.map((tec)=> 
                <span 
                  key={tec}>
                    {tec} 
                </span> 
              )
            }
            <a href={repositorio}><div>Acessar Repositorio</div></a> */}
          </div>
        ) )
      }
    </div>
    </section> 
  )
}
