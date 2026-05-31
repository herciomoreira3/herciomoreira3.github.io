import {
  BellRing,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Flame,
  Headphones,
  Layers,
  RadioTower,
  Send,
  ServerCog,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BellRing,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  Flame,
  Headphones,
  Layers,
  RadioTower,
  Send,
  ServerCog,
  Smartphone,
  Wrench,
};

type IconProps = {
  name: string;
  size?: number;
};

export function Icon({ name, size = 18 }: IconProps) {
  const Component = icons[name] ?? Code2;
  return <Component size={size} aria-hidden="true" />;
}
