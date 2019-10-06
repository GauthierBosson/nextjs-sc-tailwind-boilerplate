import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import tw from 'tailwind.macro'; //yarn add tailwind.macro@next --dev 
import styled from 'styled-components';

const Card = styled.div`
  ${tw`p-4 shadow rounded bg-white`};
  width: 500px;
  margin: 0 auto;
`;

const Home = () => (
  <Card>
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">Styled components + Tailwind CSS</p>
  </Card>
)

export default Home
