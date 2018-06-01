import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { timingFunctions } from 'polished';

import { Button } from '../';

const StyledWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: ${props => props.theme.space.md};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

const StyledButtonBar = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
  background: #f0f0f0;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
`;

const StyledItem = styled.div`
  position: relative;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.grayLight};
`;

const StyledName = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
`;

const StyledPicture = styled.div`
  width: 150px;
  height: 150px;
  margin-right: ${props => props.theme.space.sm};
  transition: all 0.3s ${timingFunctions('easeInOutBack')};
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    width: 250px;
    height: 250px;
  }
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledWarning = styled.div`
  background: ${props => props.theme.colors.danger};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.sm};
`;

const List = ({ data }) => (
  <div>
    <StyledButtonBar>
      <Button onClick={window.print}>Imprimir</Button>
    </StyledButtonBar>
    <StyledWrapper>
      {data &&
        data.map(breedObj => (
          <StyledItem key={breedObj.name}>
            <StyledRow>
              <StyledPicture>
                <StyledImg src={breedObj.image} alt="" />
              </StyledPicture>
              <StyledName>{breedObj.name}</StyledName>
            </StyledRow>
          </StyledItem>
        ))}
      {(!data || !data.length) && <StyledWarning>No se han encontrado resultados</StyledWarning>}
    </StyledWrapper>
  </div>
);

List.defaultProps = {
  data: [],
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })),
};

export default List;
