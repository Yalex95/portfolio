<template>
  <div
    id="skillSlider"
    class=":my-14 bg-[#1B023C] lg:pt-32 md:pb-20 py-20 gradient lg:px-0 md:px-4"
  >
    <SkillSlider :sliderSkills="skills" />
  </div>
</template>
<script setup>
// let skills = await useFetchSkills();
let skills = [
  {
    icon: "./assets/icons/communication.svg",
    skill: "Communication Skills",
    description:
      "Clearly articulating ideas and feedback, understanding and interpreting client requirements, collaborating with team members across different departments.",
  },
  {
    icon: "./assets/icons/teamwork.svg",
    skill: "Teamwork and Collaboration",
    description:
      "Working effectively in a team environment, being open to feedback and willing to provide constructive feedback to others, sharing knowledge and assisting team members when needed.",
  },
  {
    icon: "./assets/icons/problem_solving.svg",
    skill: "Problem-Solving Ability",
    description:
      "Thinking critically to identify issues and find effective solutions, approaching problems with a logical and analytical mindset, staying calm and composed under pressure.",
  },
  {
    icon: "./assets/icons/adaptability.svg",
    skill: "Adaptability and Flexibility",
    description:
      "Being open to new technologies, tools, and methodologies, adjusting to changing project requirements or client needs, managing multiple tasks and priorities effectively.",
  },
  {
    icon: "./assets/icons/time_management.svg",
    skill: "Time Management and Organization",
    description:
      "Prioritizing tasks and managing time efficiently, meeting deadlines without compromising quality, keeping track of project progress and updates.",
  },
  {
    icon: "./assets/icons/attention_to_detail.svg",
    skill: "Attention to Detail",
    description:
      "Ensuring precision and accuracy in coding and design, conducting thorough testing and debugging, maintaining high standards of quality and usability.",
  },
  {
    icon: "./assets/icons/creativity.svg",
    skill: "Creativity and Innovation",
    description:
      "Bringing fresh ideas and creative solutions to projects, enhancing user experience through innovative design and functionality, staying updated with the latest design trends and technologies.",
  },
  {
    icon: "./assets/icons/empathy.svg",
    skill: "Empathy and User-Centric Thinking",
    description:
      "Understanding and anticipating user needs and behaviors, designing and developing with the end-user in mind, creating intuitive and accessible interfaces.",
  },
  {
    icon: "./assets/icons/resilience.svg",
    skill: "Resilience and Perseverance",
    description:
      "Handling setbacks and criticism positively, continuing to push through challenges and obstacles, staying motivated and committed to continuous learning and improvement.",
  },
  {
    icon: "./assets/icons/conflict_resolution.svg",
    skill: "Conflict Resolution",
    description:
      "Addressing and resolving disagreements in a constructive manner, finding common ground and reaching compromises, maintaining a positive and collaborative team environment.",
  },
];
</script>
<style>
.gradient {
  position: relative;
}
.gradient::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(180, 120, 255, 0.5999649859943977) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#b478ff",GradientType=1);
}
</style>
