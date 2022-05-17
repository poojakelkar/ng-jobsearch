import styled from "styled-components";

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        height: var(--nav-height);
        margin: auto;
        display: flex;
        align-items: center;
        h1 {
            margin-left: 1rem;
            color: var(--primary-700);
        }
    }
    .pages {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
    }
    h1 {
        font-weight: 800;
        span {
            color: var(--primary-700);
        }
    }
    p {
        color: var(--grey-600);
        font-size: 20px;
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        .pages {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;
export default Wrapper;
