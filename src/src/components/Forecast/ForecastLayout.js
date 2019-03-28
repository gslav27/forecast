import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getLocaleDateString } from '_Utils_/getters/getLocaleDateString';

import Spinner from '_Ui_/Spinner';
import Message from '_Ui_/Message';



const Container = styled.section`
  margin: 0 auto;
  max-width: 550px;
`;

const Header = styled.div`
  margin: 10px 0px;
  padding: 0px 5px;
  border-bottom: 2px solid rgb(78,77,74);
  * { text-transform: uppercase };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    padding-left: 0px;
  `)};
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Text = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.light};
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
`;

const DataStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;



const ForecastLayout = ({
  title,
  subTitle,
  loading,
  loadingError,
  data,
  navLink,
}) => (
  <Container>
    {
      (loading || loadingError || !data.length)
        ? (
          <DataStatus>
            {
              /* eslint-disable no-nested-ternary */
              loading
                ? <Spinner />
                : loadingError
                  ? <Message>{loadingError}</Message>
                  : <Message>city not found</Message>
            }
          </DataStatus>
        )
        : (
          < >
            <Header>
              <Title>{title}</Title>
              <SubTitle>
                <Text>{getLocaleDateString()}</Text>
                <Text>{subTitle}</Text>
              </SubTitle>
            </Header>
            <List>{data}</List>
            {navLink}
          </>
        )
    }
  </Container>
);

ForecastLayout.propTypes = {
  title:        PropTypes.string.isRequired,
  subTitle:     PropTypes.string.isRequired,
  loading:      PropTypes.bool.isRequired,
  loadingError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  data:         PropTypes.node.isRequired,
  navLink:      PropTypes.node.isRequired,
};

export default ForecastLayout;

