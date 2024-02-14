export function Articles ({article}) {
    return (
        <div>
        <h2>{article.title}</h2>
        <p>{article.desc}</p>
        <img src={article.text} alt={article.title} width='400px'/>
      </div>
    )
}