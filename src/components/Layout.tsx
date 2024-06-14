import styled from 'styled-components/native';

interface BlankSpaceProps {
  width?: number;
  height?: number;
}

export const BlankSpace = styled.View<BlankSpaceProps>`
  width: ${({width}) => (width ? `${width}px` : '100%')};
  height: ${({height}) => (height ? `${height}px` : '100%')};
`;
