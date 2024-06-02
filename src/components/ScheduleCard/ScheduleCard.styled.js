import styled, { css } from "styled-components";

const centerItem = css`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const pad10Border1W = css`
  padding: 10px;
  border: 1px solid #fff;
`;

export const ScheduleCardContainer = styled.div`
  margin: 0;
  margin-top: 64px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center; */
  box-sizing: border-box;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 56px;
  }
`;

const hasScoreStyle = css`
  grid-template-columns: 150px 1fr 60px 150px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "date date date date"
    "time home scorehome location"
    "time away scoreaway location";

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "date date date"
      "time home scorehome"
      "time away scoreaway";
  }
`;

const hasNoScoreStyle = css`
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "date date date"
    "time home location"
    "time away location";

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "date date date"
      "time home location"
      "time away location";
  }
`;

export const ScheduleDiv = styled.div`
  width: 65%;
  color: rgb(253, 253, 253);
  font-weight: 700;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  ${({ hasScores }) => (hasScores ? hasScoreStyle : hasNoScoreStyle)}
  border-radius: 10px;
  border: 1px solid #ccc;
`;

export const DateDiv = styled.div`
  grid-area: date;
  background: #2f2f2f;
  ${pad10Border1W};
  border-radius: 10px 10px 0 0;
`;

export const TimeDiv = styled.div`
  ${centerItem};
  grid-area: time;
  ${pad10Border1W};
  border-radius: 0 0 0 10px;
`;

export const HomeTeamNameDiv = styled.div`
  grid-area: home;
  ${pad10Border1W};
`;

export const AwayTeamNameDiv = styled.div`
  grid-area: away;
  ${pad10Border1W};
`;

export const ScoreHomeDiv = styled.div`
  ${centerItem};
  grid-area: scorehome;
  ${pad10Border1W};
`;

export const ScoreAwayDiv = styled.div`
  ${centerItem};
  grid-area: scoreaway;
  ${pad10Border1W};
`;

export const LocationNameDiv = styled.div`
  ${centerItem};
  grid-area: location;
  text-align: center;
  ${pad10Border1W};
  border-radius: 0 0 10px 0;
`;
