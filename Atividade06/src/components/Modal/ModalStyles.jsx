import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: white;
`;

export const ModalContent = styled.div`
    background: #333333d6;
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    position: relative;
    display: flex;
`;

export const ModalButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
`;

export const ModalBody = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const ModalPoster = styled.img`
    width: 150px;
    height: auto;
    border-radius: 4px;
    margin-right: 20px;
`;

export const ModalDetails = styled.div`
    max-width: 600px;
`;