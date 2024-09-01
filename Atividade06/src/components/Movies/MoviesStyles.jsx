import styled from 'styled-components';

export const Left = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    left: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: opacity ease 0.5s;

    @media (max-width: 760px) {
        opacity: 1;
    }
`;

export const Right = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: opacity ease 0.5s;

    @media (max-width: 760px) {
        opacity: 1;
    }
`;

export const Container = styled.div`
    margin-bottom: 30px;
    color: white;

    &:hover ${Left}, &:hover ${Right} {
        opacity: 1;
    }
`;

export const Title = styled.h2`
    margin-left: 30px;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const List = styled.div`
    transition: all ease 0.5s;
`;

export const Item = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`;

export const Img = styled.img`
    width: 100%;
    transform: scale(0.9);

    &:hover {
        transform: scale(1);
        transition: all ease 0.3s;
    }
`;