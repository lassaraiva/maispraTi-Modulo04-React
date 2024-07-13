//Usando o hook useEffect
import { useEffect, useState } from "react";

const Aula37 = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const randomArticles = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        setNews(randomArticles);
      } catch (error) {
        console.error("Ligue pro suporte", error);
      }

      setIsLoading(false);
    };

    fetchNews();

    const interval = setInterval(fetchNews, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Atualização de notícias a cada 10s</h1>
      {isLoading ? (
        <p>Carregando notícias</p>
      ) : (
        <ul>
          {news.map((article) => (
            <li key={article.id}>
              <p>{article.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Aula37;