import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, ChevronRight, Home, Palette, Box, Smartphone, Layers, Grid3x3 } from 'lucide-react';

const DesignSystemDocs = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedCategories, setExpandedCategories] = useState([]);

  // Adicionar a fonte JUST Sans Variable via CDN
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'JUST Sans Variable';
        src: url('https://bullet-assets-pub.s3.us-east-1.amazonaws.com/fonts/JUSTSansVariable.ttf') format('truetype');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Dados extraídos do JSON único fornecido
  const designTokens = {
    spacing: {
      primitives: {
        zero: 0,
        "2xs": 1,
        xs: 2,
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        "2xl": 20,
        "3xl": 24,
        "4xl": 32,
        "5xl": 48,
        "6xl": 64,
        "7xl": 96,
        "8xl": 128,
        "9xl": 160
      },
      inset: {
        none: { mobile: 0, tablet: 0, desktop: 0 },
        "2xs": { mobile: 4, tablet: 4, desktop: 4 },
        xs: { mobile: 2, tablet: 2, desktop: 2 },
        sm: { mobile: 12, tablet: 12, desktop: 12 },
        md: { mobile: 16, tablet: 16, desktop: 16 },
        lg: { mobile: 24, tablet: 24, desktop: 24 },
        xl: { mobile: 32, tablet: 32, desktop: 32 },
        "2xl": { mobile: 48, tablet: 48, desktop: 48 },
        "3xl": { mobile: 64, tablet: 64, desktop: 64 },
        "4xl": { mobile: 96, tablet: 96, desktop: 96 }
      },
      inline: {
        none: { mobile: 0, tablet: 0, desktop: 0 },
        "2xs": { mobile: 2, tablet: 2, desktop: 2 },
        xs: { mobile: 4, tablet: 4, desktop: 4 },
        sm: { mobile: 8, tablet: 8, desktop: 8 },
        md: { mobile: 12, tablet: 12, desktop: 12 },
        lg: { mobile: 16, tablet: 16, desktop: 16 },
        xl: { mobile: 20, tablet: 20, desktop: 20 },
        "2xl": { mobile: 24, tablet: 24, desktop: 24 },
        "3xl": { mobile: 32, tablet: 32, desktop: 32 },
        "4xl": { mobile: 40, tablet: 40, desktop: 40 }
      },
      stack: {
        none: { mobile: 0, tablet: 0, desktop: 0 },
        "2xs": { mobile: 4, tablet: 4, desktop: 4 },
        xs: { mobile: 8, tablet: 8, desktop: 8 },
        sm: { mobile: 12, tablet: 12, desktop: 12 },
        md: { mobile: 16, tablet: 16, desktop: 16 },
        lg: { mobile: 24, tablet: 24, desktop: 24 },
        xl: { mobile: 32, tablet: 32, desktop: 32 },
        "2xl": { mobile: 40, tablet: 40, desktop: 40 },
        "3xl": { mobile: 48, tablet: 48, desktop: 48 },
        "4xl": { mobile: 64, tablet: 64, desktop: 64 }
      }
    },
    font: {
      primitives: {
        style: {
          normal: "normal",
          italic: "italic"
        },
        scale: {
          major2nd: 1.13,
          minor3rd: 1.2,
          major3rd: 1.25,
          perfect4th: 1.33
        },
        letterspacing: {
          "3xs": -1,
          "2xs": -0.5,
          xs: -0.25,
          sm: -0.13,
          md: 0,
          lg: 0.13,
          xl: 0.25,
          "2xl": 0.5,
          "3xl": 1
        }
      },
      scale: {
        mobile: 1,
        tablet: 1,
        desktop: 1
      },
      lineheight: {
        "2xs": { mobile: 12, tablet: 12, desktop: 12 },
        xs: { mobile: 16, tablet: 16, desktop: 16 },
        sm: { mobile: 20, tablet: 20, desktop: 20 },
        md: { mobile: 24, tablet: 24, desktop: 24 },
        lg: { mobile: 28, tablet: 28, desktop: 28 },
        xl: { mobile: 36, tablet: 36, desktop: 36 },
        "2xl": { mobile: 44, tablet: 44, desktop: 44 }
      },
      size: {
        base: 16,
        "2xs": { mobile: 11, tablet: 11, desktop: 11 },
        xs: { mobile: 12, tablet: 12, desktop: 12 },
        sm: { mobile: 14, tablet: 14, desktop: 14 },
        md: { mobile: 16, tablet: 16, desktop: 16 },
        lg: { mobile: 19, tablet: 19, desktop: 19 },
        xl: { mobile: 23, tablet: 23, desktop: 23 },
        "2xl": { mobile: 28, tablet: 28, desktop: 28 },
        "3xl": { mobile: 34, tablet: 34, desktop: 34 },
        "4xl": { mobile: 41, tablet: 41, desktop: 41 }
      },
      weight: {
        light: { mobile: 200, tablet: 200, desktop: 200 },
        regular: { mobile: 350, tablet: 350, desktop: 350 },
        bold: { mobile: 550, tablet: 550, desktop: 550 }
      },
      letterspacing: {
        tighter: { mobile: -1, tablet: -1, desktop: -1 },
        tight: { mobile: -0.5, tablet: -0.5, desktop: -0.5 },
        normal: { mobile: 0, tablet: 0, desktop: 0 },
        loose: { mobile: 0.13, tablet: 0.13, desktop: 0.13 },
        comfortable: { mobile: 0.25, tablet: 0.25, desktop: 0.25 }
      }
    },
    grid: {
      column: {
        count: { mobile: 5, tablet: 6, desktop: 12 }
      },
      size: {
        vw: { mobile: 393, tablet: 744, desktop: 1440 },
        vh: { mobile: 852, tablet: 1133, desktop: 1024 },
        container: { mobile: 852, tablet: 648, desktop: 1280 }
      },
      space: {
        gap: { mobile: 16, tablet: 24, desktop: 24 },
        margin: { mobile: 24, tablet: 48, desktop: 80 }
      }
    },
    shadow: {
      distance: {
        "3xs": { bank: -16, pro: -16 },
        "2xs": { bank: -8, pro: -8 },
        xs: { bank: -4, pro: -4 },
        sm: { bank: -1, pro: -1 },
        md: { bank: 0, pro: 0 },
        lg: { bank: 1, pro: 1 },
        xl: { bank: 2, pro: 2 },
        "2xl": { bank: 4, pro: 4 },
        "3xl": { bank: 8, pro: 8 },
        "4xl": { bank: 16, pro: 16 }
      },
      blur: {
        none: { bank: 0, pro: 0 },
        sm: { bank: 2, pro: 2 },
        md: { bank: 4, pro: 4 },
        lg: { bank: 8, pro: 8 },
        xl: { bank: 16, pro: 16 },
        "2xl": { bank: 32, pro: 32 }
      },
      spread: {
        xs: { bank: -8, pro: -8 },
        sm: { bank: -4, pro: -4 },
        md: { bank: 0, pro: 0 }
      }
    },
    borderRadius: {
      none: { bank: 0, pro: 0 },
      xs: { bank: 4, pro: 4 },
      sm: { bank: 2, pro: 2 },
      md: { bank: 16, pro: 16 },
      lg: { bank: 24, pro: 24 },
      pill: { bank: 160, pro: 160 }
    },
    borderWidth: {
      none: { bank: 0, pro: 0 },
      thin: { bank: 1, pro: 1 },
      thick: { bank: 2, pro: 2 },
      thicker: { bank: 4, pro: 4 }
    },
    fontTheme: {
      face: {
        brand: { bank: "JUST Sans Variable", pro: "JUST Sans Variable" },
        body: { bank: "JUST Sans Variable", pro: "JUST Sans Variable" },
        fallback: { bank: "system-ui", pro: "system-ui" },
        family: { bank: "sans-serif", pro: "sans-serif" }
      },
      weight: {
        heading: { bank: 550, pro: 550 },
        subtitle: { bank: 200, pro: 200 },
        overline: { bank: 550, pro: 550 },
        body: { bank: 350, pro: 350 },
        ui: { bank: 550, pro: 550 },
        number: { bank: 550, pro: 550 }
      },
      size: {
        base: { bank: 16, pro: 16 }
      },
      scale: {
        mobile: { bank: 1.2, pro: 1.2 },
        tablet: { bank: 1, pro: 1 },
        desktop: { bank: 1, pro: 1 }
      }
    },
    opacity: {
      transparent: { bank: 0, pro: 0 },
      low: { bank: 12, pro: 12 },
      medium: { bank: 32, pro: 32 },
      high: { bank: 64, pro: 64 },
      higher: { bank: 95, pro: 95 },
      opaque: { bank: 100, pro: 100 }
    },
    size: {
      icon: {
        xs: { bank: 16, pro: 16 },
        sm: { bank: 20, pro: 20 },
        md: { bank: 24, pro: 24 },
        lg: { bank: 32, pro: 32 },
        xl: { bank: 48, pro: 48 }
      },
      scale: {
        shrink: { bank: 0.95, pro: 0.95 },
        normal: { bank: 1, pro: 1 },
        grow: { bank: 1.05, pro: 1.05 }
      },
      divider: {
        default: { bank: 1, pro: 1 },
        thick: { bank: 8, pro: 8 },
        thicker: { bank: 16, pro: 16 }
      },
      thumb: {
        sm: { bank: 32, pro: 32 },
        md: { bank: 48, pro: 48 },
        lg: { bank: 64, pro: 64 },
        xl: { bank: 96, pro: 96 }
      }
    },
    color: {
      primitives: {
        gray: {
          "0": { dark: "#0C0F17", light: "#F4F4F6" },
          "100": { dark: "#1D202B", light: "#E4E4E6" },
          "200": { dark: "#383C48", light: "#DCDCE0" },
          "300": { dark: "#454A56", light: "#BBBCBF" },
          "400": { dark: "#707481", light: "#9FA0A5" },
          "500": { dark: "#90939E", light: "#808287" },
          "600": { dark: "#ADAFB8", light: "#5E6167" },
          "700": { dark: "#C8CAD0", light: "#464850" },
          "800": { dark: "#DBDCDE", light: "#272A32" },
          "900": { dark: "#EBECED", light: "#0C0F17" }
        },
        red: {
          "100": { dark: "#750000", light: "#FFDDD6" },
          "200": { dark: "#900000", light: "#FFD2CA" },
          "300": { dark: "#D14031", light: "#FEA597" },
          "400": { dark: "#F36855", light: "#F77A69" },
          "500": { dark: "#FB9586", light: "#DF4E3E" },
          "600": { dark: "#FFBBB0", light: "#B42116" },
          "700": { dark: "#FFD2C9", light: "#890000" },
          "800": { dark: "#FFE6E2", light: "#510000" },
          "900": { dark: "#FFFAFA", light: "#170D0C" }
        },
        orange: {
          "100": { dark: "#682600", light: "#FFDEC6" },
          "200": { dark: "#7D3000", light: "#FFD4B4" },
          "300": { dark: "#C15300", light: "#FFA76A" },
          "400": { dark: "#EB7003", light: "#F87C22" },
          "500": { dark: "#FF954D", light: "#D25D00" },
          "600": { dark: "#FFBD8D", light: "#A04100" },
          "700": { dark: "#FFD3B2", light: "#7A2F00" },
          "800": { dark: "#FFE7D6", light: "#4A1900" },
          "900": { dark: "#FFFAF7", light: "#17100C" }
        },
        green: {
          "100": { dark: "#004700", light: "#D7E9D3" },
          "200": { dark: "#005600", light: "#CBE3C7" },
          "300": { dark: "#378726", light: "#9BC891" },
          "400": { dark: "#5CA64D", light: "#6DAF60" },
          "500": { dark: "#89BF7F", light: "#439233" },
          "600": { dark: "#B2D5AB", light: "#1C6F01" },
          "700": { dark: "#CAE3C5", light: "#005300" },
          "800": { dark: "#E2EFDF", light: "#003100" },
          "900": { dark: "#F9FCF9", light: "#0F170C" }
        },
        blue: {
          "100": { dark: "#1F2B9B", light: "#DAE4FF" },
          "200": { dark: "#293DAC", light: "#CFDCFF" },
          "300": { dark: "#506DE0", light: "#A2BFFF" },
          "400": { dark: "#6E8EFF", light: "#7C9BFF" },
          "500": { dark: "#94AFFF", light: "#5A79EE" },
          "600": { dark: "#B7CBFF", light: "#3C56C7" },
          "700": { dark: "#CEDCFF", light: "#2739A8" },
          "800": { dark: "#E4ECFF", light: "#11057E" },
          "900": { dark: "#FAFBFF", light: "#0C0F17" }
        },
        neutral: {
          light: { dark: "#EBECED", light: "#F4F4F6" },
          dark: { dark: "#0C0F17", light: "#0C0F17" }
        },
        brand: {
          green: { dark: "#C2F141", light: "#C2F141" }
        }
      },
      surface: {
        neutral: {
          default: { bank: "#0C0F17", pro: "#0C0F17" },
          secondary: { bank: "#1D202B", pro: "#1D202B" },
          tertiary: { bank: "#383C48", pro: "#383C48" },
          inverse: { bank: "#EBECED", pro: "#EBECED" }
        },
        accent: {
          soft: { bank: "#707481", pro: "#707481" },
          default: { bank: "#ADAFB8", pro: "#ADAFB8" },
          strong: { bank: "#C8CAD0", pro: "#C8CAD0" },
          stronger: { bank: "#EBECED", pro: "#EBECED" }
        },
        info: {
          soft: { bank: "#1F2B9B", pro: "#1F2B9B" },
          default: { bank: "#293DAC", pro: "#293DAC" },
          strong: { bank: "#506DE0", pro: "#506DE0" },
          stronger: { bank: "#B7CBFF", pro: "#B7CBFF" }
        },
        success: {
          soft: { bank: "#004700", pro: "#004700" },
          default: { bank: "#005600", pro: "#005600" },
          strong: { bank: "#378726", pro: "#378726" },
          stronger: { bank: "#B2D5AB", pro: "#B2D5AB" }
        },
        warning: {
          soft: { bank: "#682600", pro: "#682600" },
          default: { bank: "#664307", pro: "#664307" },
          strong: { bank: "#C15300", pro: "#C15300" },
          stronger: { bank: "#FFE7D6", pro: "#FFE7D6" }
        },
        danger: {
          soft: { bank: "#750000", pro: "#750000" },
          default: { bank: "#900000", pro: "#900000" },
          strong: { bank: "#D14031", pro: "#D14031" },
          stronger: { bank: "#FFBBB0", pro: "#FFBBB0" }
        }
      },
      border: {
        neutral: {
          soft: { bank: "#383C48", pro: "#383C48" },
          default: { bank: "#454A56", pro: "#454A56" },
          strong: { bank: "#90939E", pro: "#90939E" },
          inverse: { bank: "#0C0F17", pro: "#0C0F17" }
        },
        accent: {
          default: { bank: "#ADAFB8", pro: "#ADAFB8" },
          strong: { bank: "#C8CAD0", pro: "#C8CAD0" }
        },
        info: {
          default: { bank: "#293DAC", pro: "#293DAC" },
          strong: { bank: "#506DE0", pro: "#506DE0" }
        },
        success: {
          default: { bank: "#005600", pro: "#005600" },
          strong: { bank: "#378726", pro: "#378726" }
        },
        warning: {
          default: { bank: "#7D3000", pro: "#7D3000" },
          strong: { bank: "#A16A0D", pro: "#A16A0D" }
        },
        danger: {
          default: { bank: "#900000", pro: "#900000" },
          strong: { bank: "#D14031", pro: "#D14031" }
        }
      },
      text: {
        neutral: {
          soft: { bank: "#90939E", pro: "#90939E" },
          default: { bank: "#C8CAD0", pro: "#C8CAD0" },
          strong: { bank: "#EBECED", pro: "#EBECED" },
          inverse: { bank: "#0C0F17", pro: "#0C0F17" }
        },
        accent: {
          default: { bank: "#C2F141", pro: "#C2F141" },
          strong: { bank: "#C2F141", pro: "#C2F141" }
        },
        info: {
          soft: { bank: "#6E8EFF", pro: "#6E8EFF" },
          default: { bank: "#CEDCFF", pro: "#CEDCFF" },
          strong: { bank: "#FAFBFF", pro: "#FAFBFF" }
        },
        success: {
          soft: { bank: "#5CA64D", pro: "#5CA64D" },
          default: { bank: "#CAE3C5", pro: "#CAE3C5" },
          strong: { bank: "#F9FCF9", pro: "#F9FCF9" }
        },
        warning: {
          soft: { bank: "#FF954D", pro: "#FF954D" },
          default: { bank: "#FFE7D6", pro: "#FFE7D6" },
          strong: { bank: "#FFFAF7", pro: "#FFFAF7" }
        },
        danger: {
          soft: { bank: "#F36855", pro: "#F36855" },
          default: { bank: "#FFD2C9", pro: "#FFD2C9" },
          strong: { bank: "#FFFAFA", pro: "#FFFAFA" }
        }
      },
      icon: {
        neutral: {
          strong: { bank: "#EBECED", pro: "#EBECED" },
          default: { bank: "#C8CAD0", pro: "#C8CAD0" },
          soft: { bank: "#90939E", pro: "#90939E" },
          softer: { bank: "#454A56", pro: "#454A56" },
          inverse: { bank: "#0C0F17", pro: "#0C0F17" }
        },
        accent: {
          default: { bank: "#C2F141", pro: "#C2F141" },
          strong: { bank: "#C2F141", pro: "#C2F141" }
        },
        info: {
          default: { bank: "#506DE0", pro: "#506DE0" },
          strong: { bank: "#CEDCFF", pro: "#CEDCFF" }
        },
        success: {
          default: { bank: "#378726", pro: "#378726" },
          strong: { bank: "#CAE3C5", pro: "#CAE3C5" }
        },
        warning: {
          default: { bank: "#FF954D", pro: "#FF954D" },
          strong: { bank: "#FFE7D6", pro: "#FFE7D6" }
        },
        danger: {
          default: { bank: "#D14031", pro: "#D14031" },
          strong: { bank: "#FFD2C9", pro: "#FFD2C9" }
        }
      },
      utility: {
        light: { bank: "#EBECED", pro: "#EBECED" },
        dark: { bank: "#0C0F17", pro: "#0C0F17" }
      },
      shadow: {
        soft: { bank: { color: "#0C0F17", opacity: "12%" }, pro: { color: "#0C0F17", opacity: "12%" } },
        medium: { bank: { color: "#0C0F17", opacity: "32%" }, pro: { color: "#0C0F17", opacity: "32%" } },
        intense: { bank: { color: "#0C0F17", opacity: "64%" }, pro: { color: "#0C0F17", opacity: "64%" } }
      }
    }
  };

  const menuCategories = [
    { id: 'home', label: 'Home', icon: 'Home', items: [] },
    { id: 'divider-1', type: 'divider' },
    { id: 'color-scheme', label: 'Color-Scheme', icon: 'Palette', items: [] },
    {
      id: 'primitivos',
      label: 'Primitivos',
      icon: 'Box',
      subcategories: [
        {
          id: 'primitivos-unit',
          label: 'Unit',
          items: [{ id: 'unit-positive', label: 'Positive' }]
        },
        {
          id: 'primitivos-font',
          label: 'Font',
          items: [
            { id: 'font-style', label: 'Style' },
            { id: 'font-scale', label: 'Scale' },
            { id: 'font-letterspacing', label: 'Letterspacing' }
          ]
        }
      ]
    },
    {
      id: 'breakpoint',
      label: 'Breakpoint',
      icon: 'Smartphone',
      subcategories: [
        {
          id: 'breakpoint-space',
          label: 'Space',
          items: [
            { id: 'space-inset', label: 'Inset' },
            { id: 'space-inline', label: 'Inline' },
            { id: 'space-stack', label: 'Stack' }
          ]
        },
        {
          id: 'breakpoint-font',
          label: 'Font',
          items: [
            { id: 'font-lineheight', label: 'Lineheight' },
            { id: 'font-size', label: 'Size' },
            { id: 'font-weight', label: 'Weight' },
            { id: 'font-letterspacing-breakpoint', label: 'Letterspacing' },
            { id: 'font-scale-breakpoint', label: 'Scale' }
          ]
        }
      ],
      items: [{ id: 'grid', label: 'Grid' }]
    },
    {
      id: 'theme',
      label: 'Theme',
      icon: 'Layers',
      items: [{ id: 'opacity', label: 'Opacity' }],
      subcategories: [
        {
          id: 'theme-cores',
          label: 'Cores',
          items: [
            { id: 'surface', label: 'Surface' },
            { id: 'border', label: 'Border' },
            { id: 'text', label: 'Text' },
            { id: 'icon', label: 'Icon' },
            { id: 'utility', label: 'Utility & Shadow' }
          ]
        },
        {
          id: 'theme-border',
          label: 'Border',
          items: [
            { id: 'border-radius', label: 'Radius' },
            { id: 'border-width', label: 'Width' }
          ]
        },
        {
          id: 'theme-shadow',
          label: 'Shadow',
          items: [
            { id: 'shadow-distance', label: 'Distance' },
            { id: 'shadow-blur', label: 'Blur' },
            { id: 'shadow-spread', label: 'Spread' }
          ]
        },
        {
          id: 'theme-size',
          label: 'Size',
          items: [
            { id: 'size-icon', label: 'Icon' },
            { id: 'size-scale', label: 'Scale' },
            { id: 'size-divider', label: 'Divider' },
            { id: 'size-thumb', label: 'Thumb' }
          ]
        },
        {
          id: 'theme-font',
          label: 'Font',
          items: [
            { id: 'font-face', label: 'Face' },
            { id: 'font-weight-theme', label: 'Weight' },
            { id: 'font-size-theme', label: 'Size' },
            { id: 'font-scale-theme', label: 'Scale' }
          ]
        }
      ]
    },
    { id: 'divider-2', type: 'divider' },
    { 
      id: 'components', 
      label: 'Componentes', 
      icon: 'Grid3x3', 
      items: [
        { id: 'toast', label: 'Toast' },
        { id: 'heading', label: 'Heading' },
        { id: 'modal', label: 'Modal' }
      ] 
    }
  ];

  const getIcon = (iconName) => {
    const icons = { Home, Palette, Box, Smartphone, Layers, Grid3x3 };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={16} /> : null;
  };

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const bgColor = isDark ? '#0C0F17' : '#F4F4F6';
  const surfaceColor = isDark ? '#1D202B' : '#FFFFFF';
  const borderColor = isDark ? '#383C48' : '#DCDCE0';
  const textPrimary = isDark ? '#EBECED' : '#0C0F17';
  const textSecondary = isDark ? '#C8CAD0' : '#5E6167';

  const ColorCard = ({ name, colors }) => (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ 
        fontSize: '19px', 
        fontWeight: '550',
        color: textPrimary,
        marginBottom: '16px',
        textTransform: 'capitalize',
        fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
      }}>
        {name}
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px'
      }}>
        {Object.entries(colors).map(([key, value]) => {
          const currentColor = isDark ? value.dark : value.light;
          return (
            <div key={key} style={{
              backgroundColor: surfaceColor,
              border: `1px solid ${borderColor}`,
              borderRadius: '8px',
              padding: '12px',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                width: '100%',
                height: '64px',
                backgroundColor: currentColor,
                borderRadius: '4px',
                marginBottom: '8px',
                border: `1px solid ${borderColor}`
              }} />
              <div style={{ 
                fontSize: '14px', 
                fontWeight: '550',
                color: textPrimary,
                marginBottom: '4px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                {name}-{key}
              </div>
              <div style={{ 
                fontSize: '12px', 
                color: textSecondary,
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350'
              }}>
                {currentColor}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: bgColor,
      color: textPrimary,
      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        height: '64px',
        backgroundColor: surfaceColor,
        borderBottom: `1px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: textPrimary,
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1 style={{ 
              fontSize: '19px', 
              fontWeight: '550',
              margin: 0,
              fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
            }}>
              Royal DS
            </h1>
            <span style={{
              backgroundColor: '#C2F141',
              color: '#0C0F17',
              padding: '4px 12px',
              borderRadius: '160px',
              fontSize: '12px',
              fontWeight: '550',
              fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Beta
            </span>
          </div>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          style={{
            background: 'none',
            border: `1px solid ${borderColor}`,
            borderRadius: '8px',
            padding: '8px 16px',
            color: textPrimary,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: '550'
          }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          {isDark ? 'Light' : 'Dark'}
        </button>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        {isSidebarOpen && (
          <aside style={{
            width: '280px',
            backgroundColor: surfaceColor,
            borderRight: `1px solid ${borderColor}`,
            padding: '24px 0',
            overflowY: 'auto',
            flexShrink: 0
          }}>
            <nav>
              {menuCategories.map(category => (
                <div key={category.id}>
                  {category.type === 'divider' && (
                    <div style={{
                      height: '1px',
                      backgroundColor: borderColor,
                      margin: '12px 24px'
                    }} />
                  )}

                  {!category.subcategories && category.type !== 'divider' && (
                    <button
                      onClick={() => category.items && category.items.length > 0 ? toggleCategory(category.id) : setActiveSection(category.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 24px',
                        background: activeSection === category.id ? (isDark ? '#383C48' : '#E4E4E6') : 'none',
                        border: 'none',
                        color: textPrimary,
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '550',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (activeSection !== category.id) {
                          e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeSection !== category.id) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {category.icon && getIcon(category.icon)}
                        <span>{category.label}</span>
                      </div>
                      {category.items && category.items.length > 0 && (
                        expandedCategories.includes(category.id) 
                          ? <ChevronDown size={16} /> 
                          : <ChevronRight size={16} />
                      )}
                    </button>
                  )}

                  {category.subcategories && category.type !== 'divider' && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 24px',
                        background: 'none',
                        border: 'none',
                        color: textPrimary,
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '550',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {category.icon && getIcon(category.icon)}
                        <span>{category.label}</span>
                      </div>
                      {expandedCategories.includes(category.id) 
                        ? <ChevronDown size={16} /> 
                        : <ChevronRight size={16} />
                      }
                    </button>
                  )}
                  
                  {expandedCategories.includes(category.id) && category.items && category.items.length > 0 && !category.subcategories && (
                    <div>
                      {category.items.map(item => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          style={{
                            width: '100%',
                            textAlign: 'left',
                            padding: '10px 24px 10px 40px',
                            background: activeSection === item.id ? (isDark ? '#383C48' : '#E4E4E6') : 'none',
                            border: 'none',
                            color: activeSection === item.id ? textPrimary : textSecondary,
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: activeSection === item.id ? '550' : '350',
                            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            if (activeSection !== item.id) {
                              e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (activeSection !== item.id) {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {expandedCategories.includes(category.id) && category.subcategories && (
                    <div>
                      {category.items && category.items.length > 0 && (
                        <div>
                          {category.items.map(item => (
                            <button
                              key={item.id}
                              onClick={() => setActiveSection(item.id)}
                              style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '10px 24px 10px 40px',
                                background: activeSection === item.id ? (isDark ? '#383C48' : '#E4E4E6') : 'none',
                                border: 'none',
                                color: activeSection === item.id ? textPrimary : textSecondary,
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: activeSection === item.id ? '550' : '350',
                                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                                transition: 'all 0.2s'
                              }}
                              onMouseEnter={(e) => {
                                if (activeSection !== item.id) {
                                  e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (activeSection !== item.id) {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                }
                              }}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      {category.subcategories.map(subcategory => (
                        <div key={subcategory.id}>
                          <button
                            onClick={() => toggleCategory(subcategory.id)}
                            style={{
                              width: '100%',
                              textAlign: 'left',
                              padding: '10px 24px 10px 40px',
                              background: 'none',
                              border: 'none',
                              color: textPrimary,
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: '550',
                              fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <span>{subcategory.label}</span>
                            {expandedCategories.includes(subcategory.id) 
                              ? <ChevronDown size={16} /> 
                              : <ChevronRight size={16} />
                            }
                          </button>

                          {expandedCategories.includes(subcategory.id) && subcategory.items && (
                            <div>
                              {subcategory.items.map(item => (
                                <button
                                  key={item.id}
                                  onClick={() => setActiveSection(item.id)}
                                  style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '10px 24px 10px 56px',
                                    background: activeSection === item.id ? (isDark ? '#383C48' : '#E4E4E6') : 'none',
                                    border: 'none',
                                    color: activeSection === item.id ? textPrimary : textSecondary,
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: activeSection === item.id ? '550' : '350',
                                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                                    transition: 'all 0.2s'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (activeSection !== item.id) {
                                      e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (activeSection !== item.id) {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                  }}
                                >
                                  {item.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>
        )}

        {/* Content */}
        <main style={{
          flex: 1,
          padding: '32px',
          overflowY: 'auto'
        }}>
          {activeSection === 'home' && (
            <div>
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <h1 style={{ 
                    fontSize: '48px', 
                    fontWeight: '550',
                    margin: 0,
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    color: textPrimary
                  }}>
                    Royal DS
                  </h1>
                  <span style={{
                    backgroundColor: '#C2F141',
                    color: '#0C0F17',
                    padding: '6px 16px',
                    borderRadius: '160px',
                    fontSize: '14px',
                    fontWeight: '550',
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Beta
                  </span>
                </div>
                <p style={{ 
                  fontSize: '19px', 
                  color: textSecondary,
                  marginBottom: '0',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                  fontWeight: '350',
                  lineHeight: '28px',
                  maxWidth: '800px'
                }}>
                  A comprehensive design system for building consistent and scalable user interfaces across web and mobile platforms. Built with design tokens for seamless integration between design and code.
                </p>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ 
                  fontSize: '28px', 
                  fontWeight: '550',
                  marginBottom: '24px',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                  color: textPrimary
                }}>
                  System Overview
                </h2>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  {[
                    { label: 'Themes', value: '2', description: 'Bank & Pro' },
                    { label: 'Breakpoints', value: '3', description: 'Mobile, Tablet, Desktop' },
                    { label: 'Components', value: '3', description: 'Toast, Heading, Modal' }
                  ].map((stat) => (
                    <div key={stat.label} style={{
                      backgroundColor: surfaceColor,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '12px',
                      padding: '24px'
                    }}>
                      <div style={{ 
                        fontSize: '48px', 
                        fontWeight: '550',
                        color: '#C2F141',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        marginBottom: '8px',
                        lineHeight: '1'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{ 
                        fontSize: '16px', 
                        fontWeight: '550',
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        marginBottom: '8px'
                      }}>
                        {stat.label}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350',
                        lineHeight: '16px'
                      }}>
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ 
                  fontSize: '28px', 
                  fontWeight: '550',
                  marginBottom: '24px',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                  color: textPrimary
                }}>
                  Typography
                </h2>
                <div style={{
                  backgroundColor: surfaceColor,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '12px',
                  padding: '32px',
                  maxWidth: '800px'
                }}>
                  <div style={{ 
                    fontSize: '64px', 
                    fontWeight: '550',
                    color: '#C2F141',
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    marginBottom: '16px',
                    lineHeight: '1',
                    letterSpacing: '-1px'
                  }}>
                    JUST Sans
                  </div>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: '550',
                    color: textPrimary,
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    marginBottom: '12px'
                  }}>
                    Variable Font Family
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: textSecondary,
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    fontWeight: '350',
                    lineHeight: '20px',
                    marginBottom: '24px'
                  }}>
                    A versatile variable font supporting weights from 100 to 900. Used across all text styles in the design system for consistent typography.
                  </div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    paddingTop: '24px',
                    borderTop: `1px solid ${borderColor}`
                  }}>
                    {[
                      { weight: 200, label: 'Light' },
                      { weight: 350, label: 'Regular' },
                      { weight: 550, label: 'Bold' }
                    ].map(item => (
                      <div key={item.weight} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{
                          fontSize: '24px',
                          fontWeight: item.weight,
                          color: textPrimary,
                          fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                        }}>
                          The quick brown fox
                        </span>
                        <span style={{
                          fontSize: '12px',
                          color: textSecondary,
                          fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                          fontWeight: '350'
                        }}>
                          {item.label} • {item.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'color-scheme' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Color Primitives
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Base color palette with dark and light mode variants. These primitives are used to construct semantic color tokens throughout the design system.
              </p>

              {Object.entries(designTokens.color.primitives).map(([name, colors]) => (
                <ColorCard key={name} name={name} colors={colors} />
              ))}
            </div>
          )}

          {activeSection === 'unit-positive' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Unit Primitives (Positive)
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Base spacing unit primitives used throughout the design system for consistent spacing, sizing, and layout.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.spacing.primitives).map(([key, value]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div style={{
                        width: `${Math.min(value, 160)}px`,
                        height: '32px',
                        backgroundColor: '#C2F141',
                        borderRadius: '4px',
                        border: `1px solid ${borderColor}`
                      }} />
                      <div style={{
                        fontSize: '12px',
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        {value}px
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                    }}>
                      spacing.primitives.{key}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: textSecondary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      fontWeight: '350',
                      marginTop: '4px'
                    }}>
                      {value}px / {(value / 16).toFixed(2)}rem
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-style' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Style Primitives
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Font style primitives for typography across the design system.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.primitives.style).map(([key, value]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      fontSize: '32px',
                      fontStyle: value,
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '16px',
                      fontWeight: '350'
                    }}>
                      The quick brown fox
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '4px'
                    }}>
                      font.primitives.style.{key}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: textSecondary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      fontWeight: '350'
                    }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-scale' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Scale Primitives
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Typographic scale ratios used to create harmonious font size progressions.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.primitives.scale).map(([key, value]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '16px'
                    }}>
                      {[1, 2, 3, 4].map(level => (
                        <div key={level} style={{
                          fontSize: `${16 * Math.pow(value, level - 1)}px`,
                          color: textPrimary,
                          fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                          fontWeight: '550',
                          lineHeight: '1.2',
                          marginBottom: '4px'
                        }}>
                          Aa
                        </div>
                      ))}
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '4px'
                    }}>
                      font.primitives.scale.{key}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: textSecondary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      fontWeight: '350'
                    }}>
                      {value} ratio
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-letterspacing' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Letterspacing Primitives
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Letter spacing values for adjusting space between characters.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.primitives.letterspacing).map(([key, value]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      fontSize: '24px',
                      letterSpacing: `${value}px`,
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '16px',
                      fontWeight: '350'
                    }}>
                      TYPOGRAPHY
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '4px'
                    }}>
                      font.primitives.letterspacing.{key}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: textSecondary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      fontWeight: '350'
                    }}>
                      {value}px
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'space-inset' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Space Inset
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Padding values for inner spacing across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.spacing.inset).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      backgroundColor: '#C2F141',
                      borderRadius: '4px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: `${values.mobile}px`,
                      minHeight: '80px'
                    }}>
                      <div style={{
                        backgroundColor: surfaceColor,
                        width: '100%',
                        height: '40px',
                        borderRadius: '2px'
                      }} />
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      space.inset.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'space-inline' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Space Inline
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Horizontal spacing between elements across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.spacing.inline).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: `${values.mobile}px`,
                      marginBottom: '12px',
                      minHeight: '80px'
                    }}>
                      <div style={{
                        backgroundColor: '#C2F141',
                        width: '40px',
                        height: '60px',
                        borderRadius: '4px',
                        flexShrink: 0
                      }} />
                      <div style={{
                        backgroundColor: '#C2F141',
                        width: '40px',
                        height: '60px',
                        borderRadius: '4px',
                        flexShrink: 0
                      }} />
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      space.inline.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-lineheight' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Lineheight
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Line height values for typography across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.lineheight).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '12px',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: '16px',
                        lineHeight: `${values.mobile}px`,
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      font.lineheight.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-size' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Size
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Font size values for typography across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.size).filter(([key]) => key !== 'base').map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '12px',
                      minHeight: '60px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: `${values.mobile}px`,
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '550',
                        lineHeight: '1.2'
                      }}>
                        Aa
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      font.size.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-weight' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Weight
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Font weight values for typography across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.weight).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '12px',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: values.mobile,
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                      }}>
                        The quick brown fox
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      font.weight.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'space-stack' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Space Stack
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Vertical spacing between stacked elements across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.spacing.stack).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: `${values.mobile}px`,
                      marginBottom: '12px',
                      minHeight: '80px'
                    }}>
                      <div style={{
                        backgroundColor: '#C2F141',
                        width: '100%',
                        height: '24px',
                        borderRadius: '4px'
                      }} />
                      <div style={{
                        backgroundColor: '#C2F141',
                        width: '100%',
                        height: '24px',
                        borderRadius: '4px'
                      }} />
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      space.stack.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-letterspacing-breakpoint' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Letterspacing
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Letter spacing values for typography across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.letterspacing).map(([key, values]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '12px',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        letterSpacing: `${values.mobile}px`,
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        TYPOGRAPHY
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '8px'
                    }}>
                      font.letterspacing.{key}
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Mobile: {values.mobile}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Tablet: {values.tablet}px
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        Desktop: {values.desktop}px
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-scale-breakpoint' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Font Scale
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Typography scale multipliers across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {Object.entries(designTokens.font.scale).map(([key, value]) => (
                  <div key={key} style={{
                    backgroundColor: surfaceColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: '8px',
                    padding: '16px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{
                      marginBottom: '12px',
                      minHeight: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        fontSize: `${16 * value}px`,
                        fontWeight: '550',
                        color: '#C2F141',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        lineHeight: '1'
                      }}>
                        Aa
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '550',
                      color: textPrimary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      marginBottom: '4px',
                      textTransform: 'capitalize'
                    }}>
                      font.scale.{key}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: textSecondary,
                      fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                      fontWeight: '350'
                    }}>
                      {value}× multiplier
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'grid' && (
            <div>
              <h2 style={{ 
                fontSize: '28px', 
                fontWeight: '550',
                marginBottom: '8px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
              }}>
                Grid System
              </h2>
              <p style={{ 
                fontSize: '16px', 
                color: textSecondary,
                marginBottom: '32px',
                fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                fontWeight: '350',
                lineHeight: '24px'
              }}>
                Grid configuration for responsive layouts across mobile, tablet, and desktop breakpoints.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '19px', 
                  fontWeight: '550',
                  color: textPrimary,
                  marginBottom: '16px',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                }}>
                  Column Count
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '12px'
                }}>
                  {Object.entries(designTokens.grid.column.count).map(([breakpoint, count]) => (
                    <div key={breakpoint} style={{
                      backgroundColor: surfaceColor,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '8px',
                      padding: '16px',
                      transition: 'transform 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${count}, 1fr)`,
                        gap: '4px',
                        marginBottom: '12px',
                        minHeight: '60px'
                      }}>
                        {Array.from({ length: count }).map((_, i) => (
                          <div key={i} style={{
                            backgroundColor: '#C2F141',
                            borderRadius: '2px',
                            opacity: 0.7
                          }} />
                        ))}
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        fontWeight: '550',
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        marginBottom: '4px',
                        textTransform: 'capitalize'
                      }}>
                        {breakpoint}
                      </div>
                      <div style={{ 
                        fontSize: '12px', 
                        color: textSecondary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontWeight: '350'
                      }}>
                        {count} columns
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '19px', 
                  fontWeight: '550',
                  color: textPrimary,
                  marginBottom: '16px',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                }}>
                  Viewport Sizes
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '12px'
                }}>
                  {['vw', 'vh', 'container'].map((sizeType) => (
                    <div key={sizeType} style={{ marginBottom: '16px' }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '550',
                        color: textPrimary,
                        marginBottom: '12px',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        textTransform: 'uppercase'
                      }}>
                        {sizeType}
                      </h4>
                      {Object.entries(designTokens.grid.size[sizeType]).map(([breakpoint, size]) => (
                        <div key={breakpoint} style={{
                          backgroundColor: surfaceColor,
                          border: `1px solid ${borderColor}`,
                          borderRadius: '8px',
                          padding: '12px',
                          marginBottom: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div style={{ 
                            fontSize: '14px', 
                            fontWeight: '550',
                            color: textPrimary,
                            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                            textTransform: 'capitalize'
                          }}>
                            {breakpoint}
                          </div>
                          <div style={{ 
                            fontSize: '14px', 
                            color: textSecondary,
                            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                            fontWeight: '350'
                          }}>
                            {size}px
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '19px', 
                  fontWeight: '550',
                  color: textPrimary,
                  marginBottom: '16px',
                  fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
                }}>
                  Grid Spacing
                </h3>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '12px'
                }}>
                  {Object.entries(designTokens.grid.space).map(([spaceType, values]) => (
                    <div key={spaceType}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '550',
                        color: textPrimary,
                        marginBottom: '12px',
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        textTransform: 'capitalize'
                      }}>
                        {spaceType}
                      </h4>
                      {Object.entries(values).map(([breakpoint, size]) => (
                        <div key={breakpoint} style={{
                          backgroundColor: surfaceColor,
                          border: `1px solid ${borderColor}`,
                          borderRadius: '8px',
                          padding: '12px',
                          marginBottom: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div style={{ 
                            fontSize: '14px', 
                            fontWeight: '550',
                            color: textPrimary,
                            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                            textTransform: 'capitalize'
                          }}>
                            {breakpoint}
                          </div>
                          <div style={{ 
                            fontSize: '14px', 
                            color: textSecondary,
                            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                            fontWeight: '350'
                          }}>
                            {size}px
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'opacity' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Opacity</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Opacity values for transparency levels in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.opacity).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px', position: 'relative', backgroundColor: isDark ? '#383C48' : '#E4E4E6', borderRadius: '4px' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#C2F141', borderRadius: '8px', opacity: values.bank / 100 }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>opacity.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}% (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'surface' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Surface Colors</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Background colors for surfaces in bank and pro themes. Used for cards, containers, and page backgrounds.
              </p>
              {Object.entries(designTokens.color.surface).map(([category, variants]) => (
                <div key={category} style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', textTransform: 'capitalize', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {Object.entries(variants).map(([variant, colors]) => (
                      <div key={variant} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                        <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}-{variant}</div>
                        <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank}</div>
                        <div style={{ fontSize: '11px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', marginTop: '4px' }}>bank = pro</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'border' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Border Colors</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Border colors for dividers, outlines, and component borders in bank and pro themes.
              </p>
              {Object.entries(designTokens.color.border).map(([category, variants]) => (
                <div key={category} style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', textTransform: 'capitalize', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {Object.entries(variants).map(([variant, colors]) => (
                      <div key={variant} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                        <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}-{variant}</div>
                        <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'text' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Text Colors</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Text colors for typography with different emphasis levels in bank and pro themes.
              </p>
              {Object.entries(designTokens.color.text).map(([category, variants]) => (
                <div key={category} style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', textTransform: 'capitalize', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {Object.entries(variants).map(([variant, colors]) => (
                      <div key={variant} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                        <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}-{variant}</div>
                        <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'icon' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Icon Colors</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Icon colors with different emphasis levels in bank and pro themes.
              </p>
              {Object.entries(designTokens.color.icon).map(([category, variants]) => (
                <div key={category} style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', textTransform: 'capitalize', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {Object.entries(variants).map(([variant, colors]) => (
                      <div key={variant} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                        <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>{category}-{variant}</div>
                        <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'utility' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Utility & Shadow Colors</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Utility colors and shadow colors with opacity levels for bank and pro themes.
              </p>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Utility</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                  {Object.entries(designTokens.color.utility).map(([name, colors]) => (
                    <div key={name} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                      <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>utility-{name}</div>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Shadow</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                  {Object.entries(designTokens.color.shadow).map(([name, colors]) => (
                    <div key={name} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                      <div style={{ width: '100%', height: '64px', backgroundColor: colors.bank.color, borderRadius: '4px', marginBottom: '8px', border: `1px solid ${borderColor}` }} />
                      <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, marginBottom: '4px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>shadow-{name}</div>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{colors.bank.color} @ {colors.bank.opacity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'border-radius' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Border Radius</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Border radius values for rounded corners in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.borderRadius).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#C2F141', borderRadius: `${values.bank}px`, border: `2px solid ${borderColor}` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>borderRadius.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'border-width' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Border Width</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Border width values for stroke thickness in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.borderWidth).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: surfaceColor, borderRadius: '8px', border: `${values.bank}px solid #C2F141` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>borderWidth.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'shadow-distance' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Shadow Distance</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Vertical offset values for shadows in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.shadow.distance).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px', position: 'relative' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#C2F141', borderRadius: '8px', boxShadow: `0 ${values.bank}px 8px rgba(12, 15, 23, 0.3)` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>shadow.distance.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'shadow-blur' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Shadow Blur</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Blur radius values for shadows in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.shadow.blur).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px', position: 'relative' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#C2F141', borderRadius: '8px', boxShadow: `0 4px ${values.bank}px rgba(12, 15, 23, 0.3)` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>shadow.blur.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'shadow-spread' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Shadow Spread</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Spread radius values for shadows in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.shadow.spread).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px', position: 'relative' }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: '#C2F141', borderRadius: '8px', boxShadow: `0 4px 8px ${values.bank}px rgba(12, 15, 23, 0.3)` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>shadow.spread.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'size-icon' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Icon Size</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Icon size values in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.size.icon).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px' }}>
                      <div style={{ width: `${values.bank}px`, height: `${values.bank}px`, backgroundColor: '#C2F141', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0C0F17', fontSize: `${values.bank * 0.5}px`, fontWeight: '550' }}>●</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>size.icon.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'size-scale' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Scale Size</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Scale transformation values in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.size.scale).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: '#C2F141', borderRadius: '8px', transform: `scale(${values.bank})` }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>size.scale.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank} (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'size-divider' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Divider Size</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Divider thickness values in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.size.divider).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '100px' }}>
                      <div style={{ width: '100%', height: `${values.bank}px`, backgroundColor: '#C2F141', borderRadius: '2px' }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>size.divider.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'size-thumb' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Thumb Size</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Thumbnail size values in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.size.thumb).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', marginBottom: '12px', minHeight: '120px' }}>
                      <div style={{ width: `${values.bank}px`, height: `${values.bank}px`, backgroundColor: '#C2F141', borderRadius: '8px' }} />
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px' }}>size.thumb.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-face' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Font Face</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Font family definitions for brand, body, fallback and family in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.fontTheme.face).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ marginBottom: '12px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: '550', color: textPrimary, fontFamily: values.bank === 'JUST Sans Variable' ? 'JUST Sans Variable, system-ui, sans-serif' : values.bank, textAlign: 'center' }}>{values.bank}</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px', textTransform: 'capitalize' }}>fontTheme.face.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank} (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-weight-theme' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Font Weight Theme</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Semantic font weight values for different text contexts in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.fontTheme.weight).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ marginBottom: '12px', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
                      <div style={{ fontSize: '32px', fontWeight: values.bank, color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>The quick brown fox</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px', textTransform: 'capitalize' }}>fontTheme.weight.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank} (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-size-theme' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Font Size Theme</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Base font size for the theme in bank and pro.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.fontTheme.size).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ marginBottom: '12px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ fontSize: `${values.bank}px`, fontWeight: '550', color: '#C2F141', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Aa</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px', textTransform: 'capitalize' }}>fontTheme.size.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank}px (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'font-scale-theme' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Font Scale Theme</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Typography scale multipliers for mobile, tablet and desktop breakpoints in bank and pro themes.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '12px' }}>
                {Object.entries(designTokens.fontTheme.scale).map(([key, values]) => (
                  <div key={key} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px', transition: 'transform 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{ marginBottom: '12px', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px' }}>
                      {[1, 2, 3].map(level => (
                        <div key={level} style={{ fontSize: `${16 * Math.pow(values.bank, level - 1)}px`, fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', lineHeight: '1.2' }}>Aa</div>
                      ))}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '550', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', marginBottom: '4px', textTransform: 'capitalize' }}>fontTheme.scale.{key}</div>
                    <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350' }}>{values.bank} (bank = pro)</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'toast' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Toast</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Toast notifications provide brief feedback messages that appear temporarily and automatically dismiss after 5 seconds. They come in four variants for different message types.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Variants</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                  {['info', 'success', 'warning', 'danger'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => {
                        const btn = document.getElementById('toast-demo');
                        if (btn) btn.setAttribute('data-variant', variant);
                      }}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: surfaceColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '8px',
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: '550',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = surfaceColor;
                      }}
                    >
                      {variant}
                    </button>
                  ))}
                </div>

                <div style={{ 
                  backgroundColor: surfaceColor,
                  padding: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '32px'
                }}>
                  <ToastDemo id="toast-demo" />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Usage Guidelines</h3>
                <div style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '24px' }}>
                  <ul style={{ margin: 0, paddingLeft: '24px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '350', color: textSecondary, lineHeight: '24px' }}>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Info:</strong> General information or neutral messages</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Success:</strong> Successful actions or positive confirmations</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Warning:</strong> Warnings or actions that need attention</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Danger:</strong> Errors or critical issues</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Specifications</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'Max Width', value: '361px' },
                    { label: 'Border Radius', value: '16px (md)' },
                    { label: 'Padding', value: '16px (inset md)' },
                    { label: 'Gap', value: '8px (inline sm)' },
                    { label: 'Font Size', value: '14px (sm)' },
                    { label: 'Line Height', value: '20px (sm)' },
                    { label: 'Font Weight', value: '350 (regular)' },
                    { label: 'Duration', value: '5 seconds' },
                    { label: 'Max Lines', value: '2 lines' }
                  ].map((spec, index) => (
                    <div key={index} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', marginBottom: '4px' }}>{spec.label}</div>
                      <div style={{ fontSize: '14px', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '550' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Design Tokens</h3>
                <div style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '24px', overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${borderColor}` }}>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Variant</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Background</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Border</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Text</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Icon</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { variant: 'Info', bg: 'surface.info.default', border: 'border.info.strong', text: 'text.info.default', icon: 'icon.info.strong' },
                        { variant: 'Success', bg: 'surface.success.default', border: 'border.success.strong', text: 'text.success.default', icon: 'icon.success.strong' },
                        { variant: 'Warning', bg: 'surface.warning.default', border: 'border.warning.strong', text: 'text.warning.default', icon: 'icon.warning.strong' },
                        { variant: 'Danger', bg: 'surface.danger.default', border: 'border.danger.strong', text: 'text.danger.default', icon: 'icon.danger.strong' }
                      ].map((row, index) => (
                        <tr key={index} style={{ borderBottom: `1px solid ${borderColor}` }}>
                          <td style={{ padding: '12px', fontWeight: '550', color: textPrimary }}>{row.variant}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary, fontFamily: 'monospace', fontSize: '12px' }}>{row.bg}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary, fontFamily: 'monospace', fontSize: '12px' }}>{row.border}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary, fontFamily: 'monospace', fontSize: '12px' }}>{row.text}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary, fontFamily: 'monospace', fontSize: '12px' }}>{row.icon}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'heading' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Heading</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Heading component displays page or section titles with optional subtitles. It comes in three sizes (XL, LG, MD) and supports optional action buttons.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Size Variants</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {['xl', 'lg', 'md'].map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        const btn = document.getElementById('heading-demo');
                        if (btn) btn.setAttribute('data-size', size);
                      }}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: surfaceColor,
                        border: `1px solid ${borderColor}`,
                        borderRadius: '8px',
                        color: textPrimary,
                        fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                        fontSize: '14px',
                        fontWeight: '550',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isDark ? '#272A32' : '#F4F4F6';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = surfaceColor;
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '350', color: textPrimary, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={(e) => {
                        const btn = document.getElementById('heading-demo');
                        if (btn) btn.setAttribute('data-subtitle', e.target.checked ? 'true' : 'false');
                      }}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                    Show subtitle
                  </label>
                </div>

                <div style={{ 
                  backgroundColor: surfaceColor,
                  padding: '48px 24px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '32px'
                }}>
                  <HeadingDemo id="heading-demo" />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Usage Guidelines</h3>
                <div style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '24px' }}>
                  <ul style={{ margin: 0, paddingLeft: '24px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '350', color: textSecondary, lineHeight: '24px' }}>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>XL (41px):</strong> Main page titles and hero sections</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>LG (34px):</strong> Section titles and important content areas</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>MD (28px):</strong> Sub-section titles and card headers</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Subtitle:</strong> Optional descriptive text that provides context</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Size Specifications</h3>
                <div style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '24px', overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${borderColor}` }}>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Size</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Title Font Size</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Title Line Height</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Subtitle Font Size</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Subtitle Line Height</th>
                        <th style={{ textAlign: 'left', padding: '12px', fontWeight: '550', color: textPrimary }}>Gap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: 'XL', titleSize: '41px (4xl)', titleLH: '44px (2xl)', subSize: '19px (lg)', subLH: '24px (md)', gap: '8px (stack sm)' },
                        { size: 'LG', titleSize: '34px (3xl)', titleLH: '36px (xl)', subSize: '19px (lg)', subLH: '28px (lg)', gap: '4px (stack xs)' },
                        { size: 'MD', titleSize: '28px (2xl)', titleLH: '28px (lg)', subSize: '16px (md)', subLH: '24px (md)', gap: '4px (stack xs)' }
                      ].map((row, index) => (
                        <tr key={index} style={{ borderBottom: `1px solid ${borderColor}` }}>
                          <td style={{ padding: '12px', fontWeight: '550', color: textPrimary }}>{row.size}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary }}>{row.titleSize}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary }}>{row.titleLH}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary }}>{row.subSize}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary }}>{row.subLH}</td>
                          <td style={{ padding: '12px', fontWeight: '350', color: textSecondary }}>{row.gap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Design Tokens</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'Title Color', value: 'text.neutral.strong (#EBECED)' },
                    { label: 'Subtitle Color', value: 'text.neutral.soft (#90939E)' },
                    { label: 'Title Weight', value: 'fontTheme.weight.heading (550)' },
                    { label: 'Subtitle Weight XL', value: 'fontTheme.weight.subtitle (200)' },
                    { label: 'Subtitle Weight LG/MD', value: 'fontTheme.weight.body (350)' },
                    { label: 'Letter Spacing XL', value: 'letterspacing.tighter (-1px)' },
                    { label: 'Letter Spacing LG', value: 'letterspacing.tight (-0.5px)' },
                    { label: 'Letter Spacing MD', value: 'letterspacing.normal (0px)' }
                  ].map((spec, index) => (
                    <div key={index} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', marginBottom: '4px' }}>{spec.label}</div>
                      <div style={{ fontSize: '12px', color: textPrimary, fontFamily: 'monospace', fontWeight: '350' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'modal' && (
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '550', marginBottom: '8px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Modal</h2>
              <p style={{ fontSize: '16px', color: textSecondary, marginBottom: '32px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', lineHeight: '24px' }}>
                Modal dialogs are overlays that require user interaction before returning to the main content. They include a title and close button by default.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Interactive Demo</h3>
                
                <button
                  onClick={() => {
                    const modal = document.getElementById('modal-demo-container');
                    if (modal) modal.style.display = 'flex';
                  }}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#C2F141',
                    color: '#0C0F17',
                    border: 'none',
                    borderRadius: '160px',
                    fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: '550',
                    cursor: 'pointer',
                    marginBottom: '24px',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Open Modal
                </button>

                <div style={{ 
                  backgroundColor: surfaceColor,
                  padding: '48px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '32px',
                  minHeight: '200px'
                }}>
                  <ModalDemo id="modal-demo" />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Usage Guidelines</h3>
                <div style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '12px', padding: '24px' }}>
                  <ul style={{ margin: 0, paddingLeft: '24px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontSize: '14px', fontWeight: '350', color: textSecondary, lineHeight: '24px' }}>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Purpose:</strong> Use modals for critical information or actions that require user attention</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Title:</strong> Always include a clear, descriptive title</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Close:</strong> Users can close by clicking the X button or overlay background</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Content:</strong> Keep modal content concise and focused</li>
                    <li style={{ marginBottom: '8px' }}><strong style={{ color: textPrimary, fontWeight: '550' }}>Actions:</strong> Add content and action buttons as needed</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Specifications</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'Max Width', value: '406px' },
                    { label: 'Border Radius', value: '24px (lg)' },
                    { label: 'Padding', value: '24px (inset lg)' },
                    { label: 'Gap', value: '32px (stack xl)' },
                    { label: 'Title Font Size', value: '19px (lg)' },
                    { label: 'Title Line Height', value: '20px (sm)' },
                    { label: 'Title Weight', value: '550 (heading)' },
                    { label: 'Close Button Size', value: '20px icon + 8px padding' },
                    { label: 'Overlay Opacity', value: 'rgba(0,0,0,0.5)' }
                  ].map((spec, index) => (
                    <div key={index} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', marginBottom: '4px' }}>{spec.label}</div>
                      <div style={{ fontSize: '14px', color: textPrimary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '550' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '19px', fontWeight: '550', color: textPrimary, marginBottom: '16px', fontFamily: 'JUST Sans Variable, system-ui, sans-serif' }}>Design Tokens</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {[
                    { label: 'Background', value: 'surface.neutral.secondary' },
                    { label: 'Border Top', value: 'border.neutral.soft' },
                    { label: 'Border Width', value: 'borderWidth.thin (1px)' },
                    { label: 'Title Color', value: 'text.neutral.strong' },
                    { label: 'Close Button BG', value: 'surface.neutral.tertiary' },
                    { label: 'Close Icon Color', value: 'icon.neutral.strong' },
                    { label: 'Border Radius', value: 'borderRadius.lg (24px)' },
                    { label: 'Padding', value: 'space.inset.lg (24px)' }
                  ].map((spec, index) => (
                    <div key={index} style={{ backgroundColor: surfaceColor, border: `1px solid ${borderColor}`, borderRadius: '8px', padding: '16px' }}>
                      <div style={{ fontSize: '12px', color: textSecondary, fontFamily: 'JUST Sans Variable, system-ui, sans-serif', fontWeight: '350', marginBottom: '4px' }}>{spec.label}</div>
                      <div style={{ fontSize: '12px', color: textPrimary, fontFamily: 'monospace', fontWeight: '350' }}>{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const ModalDemo = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(true);

  // Detectar o tema a partir do estado global
  React.useEffect(() => {
    const checkTheme = () => {
      const root = document.querySelector('[data-name="DesignSystemDocs"]') as HTMLElement;
      if (root) {
        const bg = root.style.backgroundColor;
        setIsDark(bg === 'rgb(12, 15, 23)' || bg === '#0C0F17' || !bg);
      }
    };

    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    const root = document.querySelector('[data-name="DesignSystemDocs"]');
    if (root) {
      observer.observe(root, { attributes: true, attributeFilter: ['style'] });
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Cores do DS baseadas no tema
  const colors = {
    // Modal background: surface.neutral.secondary
    bg: isDark ? '#1D202B' : '#E4E4E6',
    // Border top: border.neutral.soft
    border: isDark ? '#383C48' : '#DCDCE0',
    // Title: text.neutral.strong
    title: isDark ? '#EBECED' : '#0C0F17',
    // Close button background: surface.neutral.tertiary
    closeBg: isDark ? '#383C48' : '#F4F4F6',
    // Close icon: icon.neutral.strong
    closeIcon: isDark ? '#EBECED' : '#0C0F17'
  };

  return (
    <>
      <div 
        id={`${id}-container`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
        style={{
          display: isOpen ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(4px)'
        }}
      >
        <div 
          id={id}
          style={{
            width: '406px',
            maxWidth: '90%',
            // surface.neutral.secondary
            backgroundColor: colors.bg,
            // border.neutral.soft (top only)
            borderTop: `1px solid ${colors.border}`,
            // borderRadius.lg
            borderRadius: '24px',
            // space.inset.lg
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            // space.stack.xl
            gap: '32px',
            fontFamily: 'JUST Sans Variable, system-ui, sans-serif',
            animation: 'modalFadeIn 0.3s ease-out'
          }}
        >
          {/* Header com título e botão de fechar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <p style={{
              margin: 0,
              // font.size.lg (19px)
              fontSize: '19px',
              // fontTheme.weight.heading (550)
              fontWeight: '550',
              // font.lineheight.sm (20px)
              lineHeight: '20px',
              // text.neutral.strong
              color: colors.title,
              // font.letterspacing.normal (0px)
              letterSpacing: '0px',
              fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
            }}>
              Título
            </p>
            {/* Icon Tile - Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                // size.icon.sm + padding
                width: '36px',
                height: '36px',
                // surface.neutral.tertiary
                backgroundColor: colors.closeBg,
                border: 'none',
                // borderRadius.pill
                borderRadius: '160px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                // space.inset.xs (8px)
                padding: '8px',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Icon 20px */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke={colors.closeIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {!isOpen && (
        <div style={{
          textAlign: 'center',
          fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
        }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: '12px 24px',
              backgroundColor: '#C2F141',
              color: '#0C0F17',
              border: 'none',
              borderRadius: '160px',
              fontSize: '16px',
              fontWeight: '550',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Open Modal
          </button>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

const HeadingDemo = ({ id }: { id: string }) => {
  const [size, setSize] = React.useState<'xl' | 'lg' | 'md'>('xl');
  const [hasSubtitle, setHasSubtitle] = React.useState(true);

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          const target = mutation.target as HTMLElement;
          if (mutation.attributeName === 'data-size') {
            const newSize = target.getAttribute('data-size') as 'xl' | 'lg' | 'md';
            if (newSize) setSize(newSize);
          }
          if (mutation.attributeName === 'data-subtitle') {
            const showSubtitle = target.getAttribute('data-subtitle') === 'true';
            setHasSubtitle(showSubtitle);
          }
        }
      });
    });

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element, { attributes: true });
    }

    return () => observer.disconnect();
  }, [id]);

  const configs = {
    xl: {
      titleSize: '41px',
      titleLineHeight: '44px',
      titleLetterSpacing: '-1px',
      subtitleSize: '19px',
      subtitleLineHeight: '24px',
      subtitleWeight: '200',
      gap: '8px'
    },
    lg: {
      titleSize: '34px',
      titleLineHeight: '36px',
      titleLetterSpacing: '-0.5px',
      subtitleSize: '19px',
      subtitleLineHeight: '28px',
      subtitleWeight: '350',
      gap: '4px'
    },
    md: {
      titleSize: '28px',
      titleLineHeight: '28px',
      titleLetterSpacing: '0px',
      subtitleSize: '16px',
      subtitleLineHeight: '24px',
      subtitleWeight: '350',
      gap: '4px'
    }
  };

  const config = configs[size];

  // Buscar cores do tema atual do componente pai
  const getColors = () => {
    // Verificar se está em dark mode através do body ou outro elemento
    const isDarkMode = document.documentElement.style.backgroundColor === 'rgb(12, 15, 23)' || 
                       !document.documentElement.style.backgroundColor;
    return {
      title: isDarkMode ? '#EBECED' : '#0C0F17',
      subtitle: isDarkMode ? '#90939E' : '#808287'
    };
  };

  const [colors, setColors] = React.useState(getColors());

  React.useEffect(() => {
    const updateColors = () => setColors(getColors());
    
    // Observar mudanças no tema
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['style'] 
    });

    // Atualizar quando o componente montar
    updateColors();

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      id={id}
      data-size={size}
      data-subtitle={hasSubtitle}
      style={{
        maxWidth: '393px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: config.gap,
        fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
      }}
    >
      <h1 style={{
        margin: 0,
        fontSize: config.titleSize,
        fontWeight: '550',
        lineHeight: config.titleLineHeight,
        letterSpacing: config.titleLetterSpacing,
        color: colors.title
      }}>
        Heading title
      </h1>
      {hasSubtitle && (
        <p style={{
          margin: 0,
          fontSize: config.subtitleSize,
          fontWeight: config.subtitleWeight,
          lineHeight: config.subtitleLineHeight,
          letterSpacing: '0px',
          color: colors.subtitle
        }}>
          This is an optional subtitle with a long text that spans multiple lines
        </p>
      )}
    </div>
  );
};

const ToastDemo = ({ id }: { id: string }) => {
  const [variant, setVariant] = React.useState<'info' | 'success' | 'warning' | 'danger'>('info');

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-variant') {
          const target = mutation.target as HTMLElement;
          const newVariant = target.getAttribute('data-variant') as 'info' | 'success' | 'warning' | 'danger';
          if (newVariant) setVariant(newVariant);
        }
      });
    });

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element, { attributes: true });
    }

    return () => observer.disconnect();
  }, [id]);

  const configs = {
    info: {
      bg: '#293DAC',
      border: '#506DE0',
      text: '#CEDCFF',
      icon: '#CEDCFF'
    },
    success: {
      bg: '#005600',
      border: '#378726',
      text: '#CAE3C5',
      icon: '#CAE3C5'
    },
    warning: {
      bg: '#664307',
      border: '#A16A0D',
      text: '#FFE7D6',
      icon: '#FFE7D6'
    },
    danger: {
      bg: '#900000',
      border: '#D14031',
      text: '#FFD2C9',
      icon: '#FFD2C9'
    }
  };

  const config = configs[variant];

  return (
    <div 
      id={id}
      data-variant={variant}
      style={{
        maxWidth: '361px',
        width: '100%',
        backgroundColor: config.bg,
        borderTop: `1px solid ${config.border}`,
        borderRadius: '16px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'JUST Sans Variable, system-ui, sans-serif'
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" fill={config.icon} fillOpacity="0.2" />
        <path d="M12 8V12M12 16H12.01" stroke={config.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p style={{
        flex: 1,
        margin: 0,
        fontSize: '14px',
        fontWeight: '350',
        lineHeight: '20px',
        color: config.text,
        letterSpacing: '0px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
      }}>
        Toasts should have up to two lines and automatically leave the screen after 5s
      </p>
    </div>
  );
};

export default DesignSystemDocs;