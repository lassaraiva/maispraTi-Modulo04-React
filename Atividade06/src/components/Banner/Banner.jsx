import { useEffect } from 'react';
import { Featured, Vertical, Horizontal, Name, Info, Points, Year, Seasons, Description, DivButtons, Watch, MyList, Genres } from './BannerStyles';
import { FaPlay } from "react-icons/fa";

const Banner = ({item}) => {

    useEffect(() => {
        document.body.style.backgroundColor = '#111';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, []);

    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;

    if (description.length > 300) {
        description = description.substring(0, 300) + '...';
    }

    return (
        <Featured style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Vertical>
                <Horizontal>
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Points>{item.vote_average} pontos</Points>
                        <Year>{firstDate.getFullYear()}</Year>
                        <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                    </Info>
                    <Description>{description}</Description>
                    <DivButtons>
                        <Watch href={`/watch/${item.id}`}><FaPlay />Assistir</Watch>
                        <MyList href={`/list/add/${item.id}`}>+ Minha Lista</MyList>
                    </DivButtons>
                    <Genres><strong>Gêneros: </strong> {genres.join(', ')}</Genres>
                </Horizontal>
            </Vertical>
        </Featured>
    )
}

export default Banner;