import React, { useState } from 'react';
import projects from '../data/projects';
import style from '../styles/Projeto.module.css';
import ModalProjects from '../components/ModalProjects';

export default function Projeto() {
  const [modalStates, setModalStates] = useState(
    projects.map(() => false)
  );

  function openModal(index) {
    setModalStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  }

  function closeModal(index) {
    setModalStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  }
  
  function ModalButton({ children, onClick }) {
    return (
      <div onClick={onClick} className={style.card}>
        {children}
      </div>
    );
  }

  return (
    <div id="projetos">
      <section className={style.containerProjects}>
        <h1>Projetos</h1>
        <div className={style.cardProjects}>
          {projects.map(({ name, descricao, repositorio, tecnologias, img }, index) => (
            <>
              <ModalButton onClick={() => openModal(index)}>
                <img src={img} alt={name} className={style.projectImg} />
              </ModalButton>
              <ModalProjects
                isOpen={modalStates[index]}
                onClose={() => closeModal(index)}
                name={name}
                descricao={descricao}
                repositorio={repositorio}
                tecnologias={tecnologias}
                img={img}
                />
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

