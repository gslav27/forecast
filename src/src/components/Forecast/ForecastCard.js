import React, { memo } from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

import { routes } from '_Utils_/constants/constants';
import { forecastInterface } from '_Utils_/types/interfaces';
import themes from '_Utils_/themes/themes';
import { getLocaleDateString } from '_Utils_/getters/getLocaleDateString';
import { getRoundedDegree } from '_Utils_/getters/getRoundedDegree';

import ArrowRight from '_Ui_/Icons/ArrowRight';



const RootContainer = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h4`
  width: 100%;
  margin: 10px 0px 5px;
  padding-left: 6px;
  text-align: left;
  font-size: 1.5em;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.secondary.light};
  border-bottom: 1px solid rgb(208,207,204);
  
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    padding-left: 0px;
  `)};
`;
  
const SubTitle = styled(Title)`
  margin: 0;
  font-size: 1em;
  font-weight: 300;
  color: ${({ theme }) => theme.palette.primary.light};
  border-bottom: none;
`;

const DataContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 5px 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.colors.lightGrey};
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    padding: 5px;
  `)};
`;

const MainDataGroup = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    padding: 10px 0px;
  `)}
`;

const AdditionalDataGroup = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-end;
  height: 37px;
  width: 100%;
  > :nth-child(-n + 2) { align-self: flex-end };
  > :nth-last-child(-n + 2) { align-self: flex-start };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    height: unset;
    width: unset;
    > :nth-child(n) { align-self: unset };
  `)}
`;

const DataItem = styled.div`
  display: flex;
  width: 165px;
`;

const Text = styled.span`
  min-width: 75px;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: ${({ size }) => (size === 'xl' ? '1.7em' : '0.9em')};
  ::first-letter {
    text-transform: uppercase;
  };
`;

const TextWithIconContainer = styled(Text)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ArrowIconContainer = styled.span`
  height: 16px;
  width: 16px;
  transform: rotate(${({ deg }) => ((deg || 0) - 90)}deg);
`;

const Description = styled.span`
  flex: 1;
  margin-right: 5px;
  font-size: 0.9em;
  text-align: right;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.colors.grey};
`;

const StyledSVG = styled(SVG)`
  padding: 10px 20px 10px 30px;
  & > svg {
    width: 64px;
    height: 64px;
    * { fill: ${({ theme }) => theme.palette.secondary.main} };
  };
  ${({ theme }) => theme.mediaMixins.width.notXs(`
    padding: 0px 20px;
  `)};
`;



const ForecastCard = ({
  main,
  weather,
  clouds,
  wind,
  dt_txt,
}) => {
  const hours = dt_txt.split(' ')[1].slice(0, 5);
  const day = (hours === '00:00') && getLocaleDateString(dt_txt);

  return (
    <RootContainer>
      <Header>
        {(day && (day !== getLocaleDateString(dt_txt))) && <Title>{day}</Title>}
        <SubTitle>{hours}</SubTitle>
      </Header>
      <DataContainer>
        <StyledSVG
          src={`${process.env.PUBLIC_URL}${routes.staticFiles.svg}${weather[0].icon}.svg`}
          cacheGetRequests
        />
        <MainDataGroup>
          <Text size='xl'>
            {weather[0].description}, {Math.round(main.temp * 10) / 10}℃
          </Text>
        </MainDataGroup>
        <AdditionalDataGroup>
          <DataItem>
            <Description>cloudiness:</Description>
            <Text>{clouds.all} %</Text>
          </DataItem>
          <DataItem>
            <Description>humidity:</Description>
            <Text>{main.humidity} %</Text>
          </DataItem>
          <DataItem>
            <Description>pressure:</Description>
            <Text>{Math.round(main.pressure / 1000)} atm</Text>
          </DataItem>
          <DataItem>
            <Description>wind:</Description>
            <TextWithIconContainer>
              <ArrowIconContainer deg={getRoundedDegree(wind.deg) - 180}>
                <ArrowRight
                  nativeColor={themes.palette.secondary.main}
                  width='100%'
                  height='100%'
                />
              </ArrowIconContainer>
              {Math.round(wind.speed * 10) / 10} m/s
            </TextWithIconContainer>
          </DataItem>
        </AdditionalDataGroup>
      </DataContainer>
    </RootContainer>
  );
};

ForecastCard.propTypes = forecastInterface;

export default memo(ForecastCard);
