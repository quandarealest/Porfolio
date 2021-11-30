import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Img } from '../Projects/ProjectsStyles';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, HeaderLogo } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        {/* <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' />
          <Span>
            Portfolio
          </Span>
        </a> */}
        <HeaderLogo src="/images/Logo-2.png" />
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/quandarealest">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/quanbkm">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/notquanbui">
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
