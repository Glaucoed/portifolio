import React from 'react';
import Modal from 'react-modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import style from '../styles/Projeto.module.css'

export default function ModalProjects({ isOpen, onClose, name, descricao, repositorio, tecnologias, img }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modalProjects}
      contentLabel="Example Modal"
      style={{ overlay: { backgroundColor: 'rgba(15, 15, 33, 0.7)' } }}
    >
      <div className={style.modalBtn} onClick={onClose}>
        <AiOutlineCloseCircle className={style.btnCloseModalIcon} />
      </div>
      <img src={img} alt={name} className={style.projectImgModal} />
        <h2>{name}</h2>
        <p>{descricao}</p>
      <div className={style.modalTec}> 
        <p>Tecnologias:</p>
        {tecnologias.map((tec) => (
          <span key={tec}>{tec}</span>
        ))}
      </div>
      <div className={style.modalLinks}>
        <a href={repositorio}>
          <div>Acessar Repositorio</div>
        </a>
        <a href={repositorio}>
          <div>Acessar Página</div>
        </a>
      </div>
    </Modal>
  );
}
