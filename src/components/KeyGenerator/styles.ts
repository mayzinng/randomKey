import styled from 'styled-components';

export const Container = styled.div`
    * {
        font-family: 'Poppins', sans-serif;
    }

    width: 20rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 10rem;

    
    img, button {
        width: 100%;
        margin: 0 auto; 
        justify-content: center;
        align-items: center;
    }

    button {
        margin-top: 3rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            background: var(--text);
            color: var(--button);
        }
    }

    p {
        color: #fff;
        text-align: center;
        margin-top: 2rem;
    }

    h3 {
        color: #fff;
        margin: 0 0 2rem 2.5rem;
    }
`;