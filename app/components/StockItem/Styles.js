import styled from 'styled-components';

export const Border = styled.div`
    padding: 2px;
    width: auto;
    height: auto;
    background: linear-gradient(35deg, #83716F, #292929);
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    z-index: 2;
    background: #161616;
    padding: 10px;
    border-radius: 20px;
`;

export const Field = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
`;

export const Name = styled.div`
    color: #1BBC9B;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 22px;
`;

export const Exchange = styled.div`
    font-size: 12px;
    margin-top: 10px;
`;

export const FieldBlock = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between
`;
