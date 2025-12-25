# Lee Stotts - Digital Business Card

A modern, terminal-themed digital business card built with Next.js and deployed on Vercel.

## Features

- 🖥️ Console/terminal aesthetic with black and white minimal design
- ✨ Smooth fade-in animation on page load
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js 15 for optimal performance
- 🎨 Styled with Tailwind CSS
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/smccaffrey/lee-.git
cd lee-
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   └── BusinessCard.tsx     # Main business card component
├── public/                  # Static assets
├── package.json             # Project dependencies
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/smccaffrey/lee-)

## Customization

To customize the business card content, edit `/components/BusinessCard.tsx`:

- **Name**: Update the `LEE STOTTS` heading
- **Role**: Modify the role/title section
- **Contact Info**: Update email and phone number
- **Social Links**: Change GitHub, LinkedIn, and website URLs
- **Bio**: Edit the bio/tagline text

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Design Details

### Theme
- **Font**: Monospace (Courier New, Monaco, Fira Code, Source Code Pro)
- **Colors**: Black background (#000000), white text (#ffffff), green accents (#00ff00)
- **Animation**: 1.5s fade-in on page load

### Terminal Features
- Terminal window with title bar
- Command prompt style (`$`)
- Box-drawing characters for borders
- Blinking cursor animation
- Green-colored links (classic terminal style)

## Technologies

- [Next.js 15](https://nextjs.org/) - React framework
- [React 18](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment platform

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please contact Lee Stotts at the information provided on the business card.
