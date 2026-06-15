export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix?: string; // Pour le "+" ou "€"
  label: string;
}

export interface Domain {
  id: string;
  title: string;
  description: string;
  iconName: string;
}