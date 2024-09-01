import styled from 'styled-components';

export const Featured = styled.section`
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    color: white;

    @media (max-width: 760px) {
        height: 80vh;
    }
`;

export const Vertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const Horizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    padding-top: 300px;
    padding-left: 30px;
    padding-bottom: 100px;
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;

    @media (max-width: 760px) {
        font-size: 40px;
    }
`;

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;

export const Points = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`;

export const Year = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const Seasons = styled.div`
    display: inline-block;
`;

export const Description = styled.div`
    display: inline-block;
    margin-top: 15px;
    font: 20px;
    color: #999;
    max-width: 40%;

    @media (max-width: 760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;

export const DivButtons = styled.div`
    margin-top: 15px;
`;

export const Watch = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #FFF;
    color: black;
    opacity: 1;
    transition: all ease 0.2;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;

export const MyList = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #FFF;
    opacity: 1;
    transition: all ease 0.2;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 760px) {
        font-size: 16px;
    }
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media (max-width: 760px) {
        font-size: 14px;
    }
`;