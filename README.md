# Ritwik Portfolio (React + Vite)

A single-page portfolio with a white/blue modern theme, subtle shadows, animations, a profile photo placeholder, and IIIT Delhi logo slot in education.

## Local Development

1) Install Node.js LTS from https://nodejs.org
2) In terminal:
```bash
cd ritwik-portfolio
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
npm run preview
```

## Add your assets
- Put your photo at public/photo.jpg and it will be shown in the hero (currently initials shown).
- Put the IIIT Delhi logo at public/iiitd.png.
- Place your resume PDF as public/Ritwik_DS_1710.pdf to enable the Download CV button.

## Deploy to Vercel
```bash
# if you don't have vercel CLI
npm i -g vercel

# from the project folder
vercel
# or for production
vercel --prod
```
Vercel will provide a live URL after deploy (e.g., https://ritwik-portfolio.vercel.app).

Alternatively, connect the GitHub repo to Vercel dashboard and import the project.
- Build command: npm run build
- Output directory: dist
