import React from 'react'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import styles from '../styles/Avatar.module.css'

export default function Avatar() {

  const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);
  const [isSecondAnimationComplete, setIsSecondAnimationComplete] = useState(false);
  return (
<>
  
  <div className={styles.containerAvatar}>
  <div className={styles.form} />
  <div className={styles.avatar}>
    <img className={styles.avatarImg} src="https://avatars.githubusercontent.com/u/44655646?v=4" alt="Glauco Esverzuthe Damasceno" />
  </div>
  </div>

  <div className={styles.animation}>
    <div>        
      <TypeAnimation
        sequence={[
          'Olá, me chamo ',
          500,
          () => {
            setIsFirstAnimationComplete(true)
          }
        ]}
        wrapper='span'
        repeat={0}
        cursor={false}
      />
      {
        isFirstAnimationComplete && (
          <TypeAnimation
            sequence={[
              'Glauco Esverzuthe Damasceno',
              () => {
                setIsSecondAnimationComplete(true)
              }
            ]}
            wrapper='span'
            repeat={0}
            cursor={false}
            className={styles.name}
          />
        )
      }
    </div>
    {
      isSecondAnimationComplete && (
        <TypeAnimation
          sequence={[
            'Desenvolvedor FullStack Jr',
            1000,
            () => {
              setIsSecondAnimationComplete(true)
            }
          ]}
          wrapper='span'
          repeat={0}
          cursor={true}
          className={styles.dev}
        />
      )
    }
  </div>
</>
  )
}
