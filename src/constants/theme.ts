export const Colors = {
  light: {
    text: '#1B1F2E',
    muted: '#5E6477',
    background: '#FFFFFF',
    card: '#F4F5FA',
    border: '#DEE1EC',
    primary: '#5B4BDB',
    onPrimary: '#FFFFFF',
    win: '#1B7F50',
    loss: '#C93B4B',
    draw: '#7A6200',
    onResult: '#FFFFFF',
  },
  dark: {
    text: '#F1F2F7',
    muted: '#9AA0B5',
    background: '#0D1020',
    card: '#171B2E',
    border: '#2A3050',
    primary: '#9D93FF',
    onPrimary: '#0D1020',
    win: '#5FD39B',
    loss: '#FF7A88',
    draw: '#E0C060',
    onResult: '#0D1020',
  },
} as const;

export type Theme = (typeof Colors)['light'];

export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const FontSize = { small: 13, body: 16, title: 20, hero: 28 } as const;
export const Radius = { sm: 8, md: 12, pill: 999 } as const;