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
        title_style="max-w-[758px]"
        hiddenImage="!hidden"
        description_style="!pt-0"
        step_first_icon={<CriclePeopleIcon />}
        step_second_icon={<CustomreIcon />}
        step_thrid_icon={<PeopleChampionIcon />}
        step_first_description="Join a close knit team that supports your growth and enjoy a relaxed work environment centered around the human element."
        step_second_description="Work with cutting edge proprietary technology that shapes not only how we work, but what it means to do Amazon right."
        step_third_description="Tackle challenges and grow with a high degree of autonomy: we love driven self-starters who bring their own ideas to the table."
      />
    </>
  );
};
