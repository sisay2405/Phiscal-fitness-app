import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../utils/useAuths';
import Hero from '../assets/images/by-unscreen.gif';

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  div {
    @media (min-width: 700px) {
      width: 50%;
      p {
        font-size: 3rem;
      }
    }
    p {
      text-transform: uppercase;
      font-weight: 800;
      color: #f88740;
      border-left: 10px solid #2a8572;
      padding: 0px 20px;
      font-size: 2.3rem;
    }
    span {
      color: #2a8572;
    }
  }
`;
const ImageWrapper = styled.div`
  filter: drop-shadow(-15mm 15mm 1mm rgb(107, 106, 107));
  width: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
function Home() {
  const { user } = useAuth();
  return (
    <main>
      <Wrapper>
        <div>
          <p>Work hard to become strong</p>
          <span>
            since what we do with our bodies also affects what we can do with our minds, fitness influences to some degree qualities such as mental alertness
            and emotional stability.
          </span>{' '}
          <br /> <br />
          <hr />
          <div>
            {!user && (
              <span>
                Do you need to <Link to="/signin">sign in</Link> or <Link to="/signup">sign up</Link>?
              </span>
            )}{' '}
          </div>
        </div>
        <ImageWrapper>
          <img src={Hero} alt="" />
        </ImageWrapper>
      </Wrapper>
    </main>
  );
}

export default Home;
