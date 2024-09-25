import "./ProfileCard.css";

import Skill from "../Skill/Skill";

interface ProfileInfo {
  name: string;
  skills: { info: string; emoji: string; color: string }[];
  bio: string;
}

function ProfileCard({ name, skills, bio }: ProfileInfo) {
  return (
    <>
      <h1 className="name">{name}</h1>
      <p className="bio">{bio}</p>
      <div className="skill-container">
        {skills.map((data) => {
          const { info, emoji, color } = data;
          return <Skill info={info} emoji={emoji} color={color}></Skill>;
        })}
      </div>
    </>
  );
}

export default ProfileCard;
