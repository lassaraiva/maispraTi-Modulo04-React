import { useState, useEffect } from 'react';
import { Left, Right, Container, Title, ListArea, List, Item, Img,  } from './MoviesStyles';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import ModalSearch from '../Modal/ModalSearch';
import api from '../../api';

const Movies = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = '#111';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, []);

    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    };

    const handleItemClick = async (item) => {
        const type = item.media_type || (item.first_air_date ? 'tv' : 'movie');
        const detailedItem = await api.getMovieInfo(item.id, type);

        setSelectedItem(detailedItem);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <>
            <Container>
                <Title>{title}</Title>
                <Left onClick={handleLeft}>
                    <FaAngleLeft style={{ fontSize: 50 }} />
                </Left>
                <Right onClick={handleRight}>
                    <FaAngleRight style={{ fontSize: 50 }} />
                </Right>
                <ListArea>
                    <List style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }}>
                        {items.results?.length > 0 && items.results.map((item, key) => (
                            <Item key={key} onClick={() => handleItemClick(item)}>
                                <Img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </Item>
                        ))}
                    </List>
                </ListArea>
            </Container>
            {modalVisible && (
                <ModalSearch
                    item={selectedItem}
                    isVisible={modalVisible}
                    onClose={handleCloseModal}
                /> 
            )}
        </>
    )

}

export default Movies;