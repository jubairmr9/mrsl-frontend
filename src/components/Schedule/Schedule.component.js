import React from "react";

import { ScheduleCard } from "../ScheduleCard/ScheduleCard.component";
import { SCHEDULE_DATA } from "../../data";

import { ScheduleContainerDiv } from "./Schedule.styled";

const Schedule = () => {
  return (
    <ScheduleContainerDiv>
      {SCHEDULE_DATA.map((game, index) => (
        <ScheduleCard key={index} {...game} />
      ))}
    </ScheduleContainerDiv>
  );
};

export default Schedule;
