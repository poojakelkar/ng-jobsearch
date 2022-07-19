import styled from "styled-components";

const Wrapper = styled.nav`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
    .logo {
        display: none;
    }

    .nav-center {
        display: flex;
        width: 90vw;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }
    .toggle-btn {
        background: transparent;
        border-color: transparent;
        font-size: 1.75rem;
        color: var(--primary-500);
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    background: var(--white);
    .btn-container {
        position: relative;
    }
    .btn {
        margin-right: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 0.5rem;
        position: relative;
        box-shadow: var(--shadow-2);
    }

    .dropdown {
        position: absolute;
        top: 40px;
        left: -40px;
        width: 100%;
        background: var(--primary-100);
        box-shadow: var(--shadow-2);
        padding: 0.5rem;
        text-align: center;
        visibility: hidden;
        border-radius: var(--borderRadius);
    }
    .show-dropdown {
        visibility: visible;
    }
    .dropdown-btn {
        background: transparent;
        border-color: transparent;
        color: var(--primary-500);
        letter-spacing: var(--letterSpacing);
        text-transform: capitalize;
        cursor: pointer;
    }
    @media (min-width: 992px) {
        position: sticky;
        top: 0;

        .nav-center {
            width: 90%;
        }
        .logo {
            display: flex;
            align-items: center;
            width: 100%;
        }
    }
`;
export default Wrapper;
