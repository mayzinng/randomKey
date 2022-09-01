import { createGlobalStyle } from 'styled-components'

export const StylesGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background: #0D0D0D;
        --button: #0D5CD1;
        --text: #C2C2C2;
    }

    html {

        @media(max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px) {
            font-size: 87.5%; //14px
        }

    }

    body {
        position: relative;
        background: var(--background);
        -webkit-font-smoothing: antialiased;

        button[type="submit"]{
        width: 12rem;
        height: 2.8rem;
        background: var(--button);
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        border-radius: 0.50rem;
        }
        
    }

   





`;