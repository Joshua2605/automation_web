import React from 'react';
import { useTransform } from 'framer-motion';

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer  } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }} >
        <ul>
          <li>
            <a href="#">UI CLONE</a>
          </li>
          <li>
            <a href="#">made with</a>
          </li>
          <li>
            <a href="#">by Joshua Lessa</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
