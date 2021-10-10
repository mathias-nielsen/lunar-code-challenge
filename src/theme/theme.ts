import { DefaultTheme } from 'styled-components';

export const LIGHT_THEME: DefaultTheme = {
  background: '#F7F7F7',
  surface: '#FFFFFF',
  primary: '#0085FF',
  positive: '#2ED26F',
  negative: '#FF4A4A',
  attention: '#FA9B4B',
  text: '#0D0D0F',
  textInvert: '#FFFFFF',
  secondaryText: '#979899',
  surfaceStroke: '#E3E4E5',
  fade0: '#FFFFFF',
  fade1: '#F0F1F2',
  fade2: '#E3E4E5',
  fade3: '#CACBCC',
  fade4: '#B1B1B2',
  fade5: '#979899',
  fade6: '#7E7F80',
  fade7: '#656566',
  fade8: '#4C4C4C',
  fade9: '#323333',
  fade10: '#0D0D0F',
  button: {
    primary: {
      default: '#0D0D0F',
      interactive: '#323333',
    },
    positive: {
      default: '#2ED26F',
      interactive: '#2EE778',
    },
    negative: {
      default: '#FF4A4A',
      interactive: '#FF4C4C',
    },
    attention: {
      default: '#FA9B4B',
      interactive: '#FAA35A',
    },
    secondary: {
      default: '#E3E4E5',
      interactive: '#CACBCC',
    },
  },
  shadow: {
    small: '0px 2px 6px rgba(0, 0, 0, 0.07',
    medium: '0px 6px 12px rgba(0, 0, 0, 0.07)',
    large: '0px 8px 24px rgba(0, 0, 0, 0.07)',
  },
};

export const DARK_THEME: DefaultTheme = {
  background: '#18191A',
  surface: '#242526',
  primary: '#1790FF',
  positive: '#2EE778',
  negative: '#FF4C4C',
  attention: '#FAA35A',
  text: '#FFFFFF',
  textInvert: '#0D0D0F',
  secondaryText: '#828284',
  surfaceStroke: '#3C3E40',
  fade0: '#242526',
  fade1: '#303233',
  fade2: '#3C3E40',
  fade3: '#555759',
  fade4: '#6E7073',
  fade5: '#86898C',
  fade6: '#9FA2A6',
  fade7: '#B7BBBF',
  fade8: '#D0D4D9',
  fade9: '#E8EDF2',
  fade10: '#FFFFFF',
  button: {
    primary: {
      default: '#FFFFFF',
      interactive: '#E8EDF2',
    },
    positive: {
      default: '#2EE778',
      interactive: '#2ED26F',
    },
    negative: {
      default: '#FF4C4C',
      interactive: '#FF4A4A',
    },
    attention: {
      default: '#FAA35A',
      interactive: '#FA9B4B',
    },
    secondary: {
      default: '#3C3E40',
      interactive: '#555759',
    },
  },
  shadow: {
    small: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    medium: '0px 6px 12px rgba(0, 0, 0, 0.25)',
    large: '0px 8px 24px rgba(0, 0, 0, 0.25)',
  },
};

export enum Color {
  Pink = '#EE7ABC',
  Purple = '#C855DF',
  DeepPurple = '#5F3BF9',
  DeepBlue = '#2D71FA',
  Blue = '#3F95FA',
  Cyan = '#4CCAFF',
  Teal = '#29DDC5',
  Green = '#00DFA0',
  Yellow = '#F4D164',
  Orange = '#F7775A',
  Salmon = '#F88181',
  Red = '#FD4274',
  CoolGrey = '#687990',
  Sand = '#C5BEAA',
  Black = '#0D0D0F',
  White = '#FFFFFF',
}

export enum Gradient {
  Gold = 'linear-gradient(180deg, rgba(250,219,165,1) 0%, rgba(223,185,116,1) 100%)',
  LightGray = 'linear-gradient(180deg, rgba(228,228,228,1) 0%, rgba(197,197,197,1) 100%)',
  Gray = 'linear-gradient(180deg, rgba(193,193,193,1) 0%, rgba(112,115,118,1) 100%)',
  DarkGray = 'linear-gradient(180deg, rgba(82,88,94,1) 0%, rgba(54,57,59,1) 100%)',
}
