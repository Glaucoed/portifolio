import React from 'react'
import style from '../styles/Skill.module.css'

import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiNodedotjs,
  SiMysql, 
  SiMongodb, 
  SiExpress, 
  SiJest, 
  SiReact, 
  SiSequelize, 
  SiDocker, 
  SiMocha, 
  SiChai, 
  SiGit, 
  SiTestinglibrary, 
  SiTypescript, 
  SiRedux,
  //SiGithub  
} from 'react-icons/si'

export default function Skill() {
  return (
    <section className={style.containerHabilitys} id="habilidades">
    <h1>Habilidades</h1>
    <div className={style.containerSkills}>

      <div className={style.boxIcon}>
      <SiHtml5 className={style.iconSkill}/>
      <span>HTML5</span>
      </div>

      <div className={style.boxIcon}>
      <SiCss3 className={style.iconSkill}/>
      <span>CSS3</span>
      </div>

      <div className={style.boxIcon}>
      <SiJavascript className={style.iconSkill}/>
      <span>JavaScript</span>
      </div>

      <div className={style.boxIcon}>
      <SiTypescript className={style.iconSkill}/>
      <span>Typescript</span>
      </div>

      <div className={style.boxIcon}>
      <SiReact className={style.iconSkill}/>
      <span>React.js</span>
      </div>

      <div className={style.boxIcon}>
      <SiRedux className={style.iconSkill}/>
      <span>Redux</span>
      </div>

      <div className={style.boxIcon}>
      <SiBootstrap className={style.iconSkill}/>
      <span>Bootstrap</span>
      </div>

      <div className={style.boxIcon}>
      <SiTestinglibrary className={style.iconSkill}/>
      <span>RTL</span>
      </div>

      <div className={style.boxIcon}>
      <SiJest className={style.iconSkill}/>
      <span>RTL</span>
      </div>

      <div className={style.boxIcon}>
      <SiNodedotjs className={style.iconSkill}/>
      <span>Node.js</span>
      </div>

      <div className={style.boxIcon}>
      <SiExpress className={style.iconSkill}/>
      <span>Express</span>
      </div>
      <div className={style.boxIcon}>
      <SiSequelize className={style.iconSkill}/>
      <span>Sequelize</span>
      </div>

      <div className={style.boxIcon}>
      <SiChai className={style.iconSkill}/>
      <span>Chai</span>
      </div>

      <div className={style.boxIcon}>
      <SiMocha className={style.iconSkill}/>
      <span>Express</span>
      </div>

      <div className={style.boxIcon}>
      <SiMysql className={style.iconSkill}/>
      <span> MySQL</span>
      </div>

      <div className={style.boxIcon}>
      <SiMongodb className={style.iconSkill}/>
      <span> MongoDb</span>
      </div>

      <div className={style.boxIcon}>
      <SiDocker className={style.iconSkill}/>
      <span> Docker</span>
      </div>

      <div className={style.boxIcon}>
      <SiGit className={style.iconSkill}/>
      <span>Git</span>
      </div>
    </div>
    </section>
  )
}
