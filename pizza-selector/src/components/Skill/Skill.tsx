interface Skill {
  info: string;
  emoji: string;
  color: string;
}

export default function Skill({ info, emoji, color }: Skill) {
  return <p style={{ backgroundColor: color }}>{info + " " + emoji}</p>;
}
