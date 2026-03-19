# Leap Design System

The Leap Design System is a component library for the LeapChange platform, built on IBM's [Carbon Design System](https://carbondesignsystem.com/) and branded with the Leap green colour scheme (#0C8C5E).

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- Yarn (bundled via Yarn 4 in `.yarn/releases/`)

### Install dependencies

```bash
yarn install
```

## Storybook

Storybook is the primary way to develop and preview Leap components.

### Start Storybook

```bash
yarn storybook
```

This starts Storybook at [http://localhost:6006](http://localhost:6006).

### Build Storybook (static)

```bash
yarn storybook:build
```

Outputs a static Storybook build to `public/storybook/`.

## Documentation Site

The docs site is built with [Gatsby](https://www.gatsbyjs.org/) and [gatsby-theme-carbon](https://gatsby.carbondesignsystem.com/).

### Start the docs site

```bash
yarn dev
```

This starts the Gatsby dev server at [http://localhost:8000](http://localhost:8000).

### Build the docs site

```bash
yarn build
```

### Other commands

- `yarn dev:clean` — clear cache and start dev server
- `yarn lint:js` — lint JavaScript files
- `yarn format` — run Prettier

## Project Structure

```
src/
├── components/          # Leap components (React + SCSS/Tailwind)
│   ├── LeapButton/
│   │   ├── LeapButton.jsx
│   │   ├── LeapButton.module.scss
│   │   ├── LeapButton.stories.jsx
│   │   └── index.js
│   ├── LeapCard/
│   ├── LeapSidebar/
│   └── ...              # 80+ components
├── data/                # Navigation config, component data
├── pages/               # Gatsby documentation pages (MDX)
├── styles/              # Global styles
└── index.js             # Package entry point
.storybook/
├── main.js              # Storybook config (Vite + SCSS)
└── preview.js           # Carbon theme provider + globals
```

## Component Categories

| Category | Components |
|----------|-----------|
| **Core UI** | Button, Input, TextArea, Select, Checkbox, Radio, Toggle, Tabs, Accordion, Modal, Search, Breadcrumb, Pagination, Tag, Tooltip, Loading |
| **Layout** | Sidebar, Page Header, Side Panel, Header, Tile, Content Switcher |
| **Data Display** | Card, Data Table, Calendar, Stat Card, Balance Card, KPI Card, Status Badge, Employee Card, Team Overview, Comparison Table |
| **Change Management** | Risk Matrix, Stakeholder Map, Impact Score, Readiness Gauge, Initiative Card, Engagement Tracker, Communication Plan, Resistance Log, Adoption Curve, Change Heatmap, Milestone Tracker, Timeline, Progress Tracker, Action Item, Training Checklist |
| **Feedback** | Toast, Notification, Inline Notification, Empty State, Skeleton, AI Skeleton |
| **Forms** | Request Form, Date Range Picker, Filter Bar, Comment Box, Feedback Survey, ComboBox, Number Input, Password Input, File Uploader, Fluid inputs |
| **AI** | AI Label, AI Skeleton |
| **Navigation** | Sidebar, Breadcrumb, Tree View, Command Palette, Context Menu, Overflow Menu |
| **Onboarding** | Onboarding (First Time Orientation) |

## Brand Colours

| Name | Hex | Usage |
|------|-----|-------|
| Green 500 (Primary) | `#0C8C5E` | Buttons, links, icons, active states |
| Green 700 | `#096B48` | Hover states |
| Green 900 | `#054A32` | Active/pressed states |
| Green 300 | `#5BBF96` | Hover on brand surfaces |
| Green 100 | `#C6E8D9` | Tag backgrounds, borders |
| Green 50 | `#F0FAF5` | Tints, ghost button hover |
| Near Black | `#1A1A18` | Sidebar, dark surfaces |

## Contributing

- [Contribution guidelines](.github/CONTRIBUTING.md)
- [Content and Markdown guidelines](https://gatsby-theme-carbon.now.sh/components/markdown)
