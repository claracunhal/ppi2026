import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    //   <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
    <article className={`notice-card ${notice.featured && "featured"}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>
      <div className="notice-meta">
        <span>Por: {notice.author}</span>-<span>Data: {notice.date}</span>
      </div>

      {showDetails && <p>Texto exibido quando clicar em Exibir detalhes.</p>}

      <div className="notice-actions">
        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {notice.featured ? "Fechar Detalhes" : "Exibir Detalhes"}
        </button>

        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover Destaque" : "Destacar"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>Excluir</button>
      </div>
    </article>
  );
}

export default NoticeCard;
