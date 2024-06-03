import React, { useState } from "react";
import GameDetailsModal from "../GameDetailsModal/GameDetailsModal.component";
import { useWindowWidth } from "../../useWindowWidth";

import {
  ScheduleCardContainer,
  ScheduleDiv,
  DateDiv,
  TimeDiv,
  HomeTeamNameDiv,
  AwayTeamNameDiv,
  ScoreHomeDiv,
  ScoreAwayDiv,
  LocationNameDiv,
} from "./ScheduleCard.styled";

export const ScheduleCard = (data) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const width = useWindowWidth();
  const breakpoint = 768;

  const onClickHandler = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ScheduleCardContainer>
      <ScheduleDiv
        onClick={onClickHandler}
        hasScores={data.homeScore != null && data.awayScore != null}
      >
        <DateDiv>{data.date}</DateDiv>
        <TimeDiv>{data.winner ? "FT" : data.time}</TimeDiv>
        <HomeTeamNameDiv>
          {data.homeTeam} {data.winner === "home" && "✅"}
        </HomeTeamNameDiv>
        <AwayTeamNameDiv>
          {data.awayTeam} {data.winner === "away" && "✅"}
        </AwayTeamNameDiv>
        {data.winner && <ScoreHomeDiv>{data.homeScore}</ScoreHomeDiv>}
        {data.winner && <ScoreAwayDiv>{data.awayScore}</ScoreAwayDiv>}
        {width > breakpoint && (
          <LocationNameDiv>{data.location}</LocationNameDiv>
        )}
        {width < breakpoint && !data.winner && (
          <LocationNameDiv>{data.location}</LocationNameDiv>
        )}
      </ScheduleDiv>
      <GameDetailsModal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </ScheduleCardContainer>
  );
};
