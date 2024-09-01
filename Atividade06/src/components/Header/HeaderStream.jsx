import { useState } from 'react';
import { Header, Logo, LogoImg, User, UserImg, SearchContainer, SearchInput, Menu, MenuItem, SearchResults, ModalItem} from './HeaderStreamStyles';
import LogoNetflix from '../../assets/img/logo.png';
import Profile from '../../assets/img/profileRed.png';
import { FaSearch } from "react-icons/fa";
import api from '../../api';
import ModalSearch from '../Modal/ModalSearch';

const HeaderStream = ({ black }) => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    const handleInput = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length > 2) {
            const results = await api.searchMoviesOrTv(value);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleItemClick = async (item) => {
        const type = item.media_type || (item.first_air_date ? 'tv' : 'movie');
        const detailedItem = await api.getMovieInfo(item.id, type);

        setSelectedItem(detailedItem);
        setSearchResults([]);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <Header black={black}>
            <Logo>
                <a href='/'>
                    <LogoImg src={LogoNetflix} alt='logo netflix' />
                </a>
            </Logo>
            <Menu>
                <MenuItem>Início</MenuItem>
                <MenuItem>Séries</MenuItem>
                <MenuItem>Filmes</MenuItem>
                <MenuItem>Mais Recentes</MenuItem>
                <MenuItem>Minha Lista</MenuItem>
            </Menu>
            <SearchContainer>
                <SearchInput
                    type='text'
                    visible={searchVisible}
                    value={query}
                    onChange={handleInput}
                    placeholder='Search...'
                />
                <FaSearch onClick={handleSearch} style={{ cursor: 'pointer', marginLeft: '20px', color: 'white' }} />
                {searchResults.length > 0 && (
                    <SearchResults onClick={handleCloseModal}>
                        <div onClick={(e) => e.stopPropagation()}>
                            {searchResults.map((item, index) => (
                                <ModalItem key={index} onClick={() => handleItemClick(item)}>
                                    <strong>{item.original_name || item.original_title}</strong>
                                </ModalItem>
                            ))}
                        </div>
                    </SearchResults>
                )}
            </SearchContainer>
            <User>
                <a href='/'>
                    <UserImg src={Profile} alt='usuário' />
                </a>
            </User>
            <ModalSearch
                isVisible={modalVisible}
                onClose={handleCloseModal}
                item={selectedItem}
            />
        </Header>
    );
};

export default HeaderStream;