import { useEffect, useState } from 'react';
import Movies from '../components/Movies/Movies';
import Banner from "../components/Banner/Banner";
import api from '../api';

const Stream = () => {
  const [movieList, setMovieList] = useState([]);
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');
      setBannerData(chosenInfo);
    };

    loadAll();
  }, []);

  return (
    <>
      {bannerData && <Banner item={bannerData} />}
      <section>
        {movieList.map((item, key) => (
          <Movies key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </>
  );
};

export default Stream;