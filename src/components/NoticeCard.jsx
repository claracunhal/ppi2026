import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "A Secitex (Semana de Ciência, Tecnologia e Extensão do IFRN) é um evento que promove a interação entre estudantes, servidores e a comunidade, incentivando a divulgação do conhecimento por meio de pesquisas, apresentações de trabalhos científicos e atividades culturais."
            : "O laboratório de manutenção do Instituto Federal do Rio Grande do Norte (IFRN) – Campus Macau desempenha um papel fundamental no suporte técnico da instituição. Nesse ambiente são realizadas atividades práticas voltadas ao processo de ensino, além da manutenção e do reparo dos equipamentos utilizados no campus."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Ocultar detalhes" : "Exibir detalhes"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;
