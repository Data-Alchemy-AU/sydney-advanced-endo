import { ButtonConfig } from './button.model';

export const BUTTONS: Record<string, ButtonConfig> = {
  home: { text: 'Home', link: '/home', variant: 'basic'},
  about: { text: 'About Us', link: '/about-us', variant: 'basic'},
  services: { text: 'Services', link: '/services', variant: 'basic'},
  team: { text: 'Our Team', link: '/our-team', variant: 'basic'},
  contact: { text: 'Contact Us', link: '/contact-us', variant: 'basic'},
  enquire: { text: 'Enquire', link: '/enquire', variant: 'flat', color: 'primary' },
};
