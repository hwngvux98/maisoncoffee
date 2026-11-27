import {
  Settings2,
  Scan,
  Scale,
  Hand,
  Droplets,
  Droplet,
  Timer,
  CupSoda,
  Coffee,
  Waves,
  RotateCw,
  Layers,
  Flame,
  Filter,
  Snowflake,
  Scissors,
  Moon,
  GlassWater,
} from "lucide-react";
import type { BrewIcon } from "@/lib/brewing-guides";

const icons = {
  settings: Settings2,
  scan: Scan,
  scale: Scale,
  hand: Hand,
  droplets: Droplets,
  droplet: Droplet,
  timer: Timer,
  cup: CupSoda,
  coffee: Coffee,
  waves: Waves,
  rotate: RotateCw,
  layers: Layers,
  flame: Flame,
  filter: Filter,
  snowflake: Snowflake,
  scissors: Scissors,
  moon: Moon,
  glass: GlassWater,
} satisfies Record<BrewIcon, typeof Coffee>;

export function BrewIconGlyph({
  icon,
  size = 20,
  className = "",
}: {
  icon: BrewIcon;
  size?: number;
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" className={className} />;
}
