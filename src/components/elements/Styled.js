import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

// $ npm install styled-media-query

// mediaqueryのサイズ
// huge: '1440px',
// large: '1170px',
// medium: '768px',
// small: '450px',

// mediaqueryの書き方
// const Box = styled.div`
//   background: black;

//   ${media.lessThan("medium")`
//     /* screen width is less than 768px (medium) */
//     background: red;
//   `}

//   ${media.between("medium", "large")`
//     /* screen width is between 768px (medium) and 1170px (large) */
//     background: green;
//   `}

//   ${media.greaterThan("large")`
//     /* screen width is greater than 1170px (large) */
//     background: blue;
//   `}
// `;

// styled-components
const Container = styled.section`
  padding: 2em;
  border-radius: 10px;
  background: #EBECF0;
  box-shadow: 2px 2px 5px #BABECC, -5px -5px 10px #FFF;
`;
const Title = styled.h3`
  font-size: 20px;
  text-align: left;
  color: #00c400;
`;
const Code = styled.section`
  font-size: 18px;
  color: #e3e3e3;
  margin: 0 0 20px 0;
  padding: 2em;
  background: #364549;
  ${media.lessThan("medium")`
    padding: 2em 1em 1em;
  `}
`;
const CodeLast = styled.section`
  font-size: 18px;
  color: #e3e3e3;
  margin: 0;
  padding: 2em;
  background: #364549;
  ${media.lessThan("medium")`
    padding: 2em 1em 1em;
  `}
`;
const CodeDatail = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 18px;
  color: #eee;
  width: 10%;
  margin: 0;
  padding: 5px 0 0 0;
  background: #777;
  bottom: 36px;
  position: relative;

  ${media.lessThan("medium")`
    width: 30%;
  `}
`;

const Cy = styled.span`
  color: #ebd247;
`;
const Cg = styled.span`
  color: #8bdf4c;
`;
const Cb = styled.span`
  color: #41b7d7;
`;
const Cr = styled.span`
  color: #ff8095;
`;
const Cgr = styled.span`
  color: #9dabae;
`;
const OneIndent = styled.p`
  margin: 0 0 0 30px;
`;

const Styled = () => {
    return(
        <React.Fragment>
            <h2>UI Components</h2>
            <Container>
              <Title>1. styled-components[USAGE]</Title>
              <Code>
                <CodeDatail>bash</CodeDatail>
                $ npm install styled-components@^5.0.0 react@^16.8 react-dom@^16.8 react-is@^16.8
              </Code>
              <CodeLast>
                <CodeDatail>jsx</CodeDatail>
                <p><Cgr>&#047;&#047; styled-components import</Cgr></p>
                <p><Cy>import</Cy> <Cg>styled</Cg> <Cy>from</Cy> <Cb>'styled-components'</Cb>;</p>
                <p><Cgr>&#047;&#047; styling</Cgr></p>
                <p><Cy>const</Cy> <Cg>Container</Cg> <Cr>=</Cr> <Cg>styled</Cg>.<Cg>section</Cg><Cb>`</Cb></p>
                <OneIndent><Cg>padding</Cg>: <Cb>2em</Cb>;</OneIndent>
                <OneIndent><Cg>background</Cg>: <Cb>#fff</Cb>;</OneIndent>
                <p><Cb>`</Cb>;</p>
                <p><Cgr>&#047;&#047; render</Cgr></p>
                <p>&lt;<Cg>Container</Cg>&gt;...内容...&lt;/<Cg>Container</Cg>&gt;</p>
              </CodeLast>
            </Container>
        </React.Fragment>
    );
}

export default Styled;