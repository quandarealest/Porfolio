import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href="tel:+1(435)533-5833">
            +1(435)533-5833
          </LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href="mailto:buiquan2710@gmail.com">
            buiquan2710@gmail.com
          </LinkItem>
          <LinkItem href="mailto:contact@quanbuikm.com">
            contact@quanbuikm.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one project at a time
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/quandarealest">
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/quanbkm">
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href="https://instagram.com/notquanbui">
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
