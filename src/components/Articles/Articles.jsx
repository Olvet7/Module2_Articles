import css from "../Articles/Articles.module.css"

export function Articles ({article}) {
    return (
        <div>
        <p>{article.title}</p>
        <p>{article.desc}</p>
        <img src={article.text} alt={article.title} width='400px'/>
        <ul className={css.list}>
          <li>{article.p1}</li>
          <hr />
          <li>{article.p2}</li>
          <hr />
          <li>{article.p3}</li>
        </ul>
      </div>
    )
}