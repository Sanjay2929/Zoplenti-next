import ProcessSteps from "../common/ProcessSteps";
import {
  CriclePeopleIcon,
  CustomreIcon,
  PeopleChampionIcon,
} from "../common/icons/JoinTeam";

export const Steps = () => {
  return (
    <>
      <ProcessSteps
        title="Why Zoplenti?"
        borderStyle="border-opacity-20 border-y border-alto"
        titleStyle="max-w-[758px]"
        hiddenImage="!hidden"
        description_style="!pt-0"
        stepFirstIcon={<CriclePeopleIcon />}
        stepSecondIcon={<CustomreIcon />}
        stepThridIcon={<PeopleChampionIcon />}
        stepFirstDescription="Join a close knit team that supports your growth and enjoy a relaxed work environment centered around the human element."
        stepSecondDescription="Work with cutting edge proprietary technology that shapes not only how we work, but what it means to do Amazon right."
        stepThirdDescription="Tackle challenges and grow with a high degree of autonomy: we love driven self-starters who bring their own ideas to the table."
      />
    </>
  );
};
