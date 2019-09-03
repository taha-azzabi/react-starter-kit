import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../KitUi';

const SParagraph = styled(Paragraph)`
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
  max-width: 60%;
  margin: 200px auto;
  color: #e9ecefcc;
`;
const HomePage = () => (
  <div>
    <SParagraph>
      Kit de démarrage ReactJS en utilisant les dernières technologies disponibles et en
      mettant l&apos;accent sur les meilleures pratiques
    </SParagraph>
  </div>
);

export default HomePage;
