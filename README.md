# Dr. Purnima Voria - Professional Portfolio Website

A professional portfolio website for Dr. Purnima Voria, Founder and CEO of the National US India Chamber of Commerce (NUICC), showcasing her distinguished career in international business, diplomacy, and global leadership.

## About Dr. Purnima Voria

Dr. Purnima Voria is a renowned international business leader who has dedicated her career to strengthening Indo-US ties and empowering minority businesses globally. As the founder of NUICC, she leads an organization with over 9,200 members worldwide, facilitating billions in trade and collaboration between the United States and India.

### Key Achievements
- **Business Woman of the Year** - The Wall Street Journal
- **Congressional Medal of Distinction** recipient
- **National Advisor** to the US Minority Business Development Agency (2004-2014)
- **Global Speaker** at World Economic Forum, United Nations, and Commonwealth Games
- **Presidential Commission** member under President George W. Bush

## Website Features

### 🏠 Home Page
- Professional hero section with Dr. Voria's portrait
- Key statistics and achievements
- Quick navigation to main sections

### 👤 About Section
- Comprehensive biography and career overview
- Leadership highlights and recognition
- Executive bio with detailed background

### 📅 Timeline
- Interactive career timeline
- Major milestones and appointments
- Professional journey visualization

### 🏢 NUICC Section
- National US India Chamber of Commerce information
- Organization mission and impact
- Membership and global reach details

### 🏆 Awards & Honors
- Recognition and accolades
- Professional achievements
- International honors

### 🖼️ Gallery
- Professional photo collection
- Event photography
- Categorized image filtering:
  - Professional
  - Events
  - Government Service
  - International
  - Speaking
  - Diplomatic
  - Community

### 📰 Media
- Media coverage and appearances
- Press releases and news articles
- Public speaking engagements

### 📞 Contact
- Professional contact information
- NUICC organization details
- Professional services offered

## Technical Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Typography**: 
  - Playfair Display (serif headings)
  - Inter (sans-serif body text)
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms

## Design Features

- **Color Scheme**: Professional navy blue and gold palette
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Professional Typography**: Elegant serif and sans-serif font pairing
- **Interactive Elements**: Smooth animations and hover effects
- **Image Optimization**: Optimized assets for fast loading
- **Accessibility**: Semantic HTML and proper contrast ratios

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or pnpm package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/[username]/DrPurnimaVoria_Portfolio.git
   cd DrPurnimaVoria_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## Deployment

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/dist" folder
   - Save settings

### Other Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import project from GitHub for seamless deployment
- **AWS S3**: Upload dist folder contents to S3 bucket with static hosting
- **Firebase Hosting**: Use Firebase CLI to deploy

## Project Structure

```
dr-voria-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   └── main.jsx           # Application entry point
├── dist/                  # Production build output
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Content Management

### Adding New Images
1. Place images in `src/assets/` directory
2. Import in `App.jsx`
3. Add to appropriate gallery category
4. Ensure proper alt text for accessibility

### Updating Content
- Biography and achievements: Edit the About section in `App.jsx`
- Timeline events: Update the timeline data structure
- Contact information: Modify the Contact section
- Gallery categories: Adjust filter categories and image assignments

## Performance Optimization

- **Image Optimization**: All images are optimized for web delivery
- **Code Splitting**: Vite automatically handles code splitting
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Asset Compression**: Production builds include asset compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio website. For suggestions or improvements, please contact Dr. Purnima Voria directly through the contact information provided on the website.

## License

This project is proprietary and confidential. All rights reserved to Dr. Purnima Voria and the National US India Chamber of Commerce.

## Contact

**Dr. Purnima Voria**
- Email: purnima@nuicc.org
- Website: www.nuicc.org
- LinkedIn: [Dr. Purnima Voria](https://linkedin.com/in/dr-purnima-voria)

**National US India Chamber of Commerce**
- Location: Bellevue, Washington, USA
- Website: www.nuicc.org

---

*Built with ❤️ for strengthening Indo-US ties and global leadership*
