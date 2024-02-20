export function Articles ({article}) {
    return (
        <div>
        <h2>{article.title}</h2>
        <p>{article.desc}</p>
        <img src={article.text} alt={article.title} width='400px'/>
        <ul>
          <li>{article.p1}</li>
          <li>{article.p2}</li>
          <li>{article.p3}</li>
        </ul>
      </div>
    )
}