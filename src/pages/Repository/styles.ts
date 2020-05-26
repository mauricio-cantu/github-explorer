import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Error = styled(motion.div)`
  text-align: center;
  margin-top: 80px;
  font-weight: bold;
  font-size: 20px;
`;

export const RepositoryData = styled(motion.section)`
  margin-top: 80px;
  header {
    display: flex;
    align-items: center;
    width: 100%;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px) translateY(-10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
        max-width: 500px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
