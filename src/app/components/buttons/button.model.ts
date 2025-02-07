export interface ButtonConfig {
  text: string; // Button label
  link: string; // Router link
  variant?: 'basic' | 'raised' | 'stroked' | 'flat'; // Material button type
  color?: 'primary' | 'accent' | 'warn'; // Material button color
  icon?: string; // Optional Material icon
  customClasses?: string; // Optional extra CSS classes
}


