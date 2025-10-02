# Art Gallery Collection - GrowIntern

A modern, feature-rich data table application built with React, TypeScript, and PrimeReact, showcasing artwork data from the Art Institute of Chicago API.

## 🚀 Features

### ✨ Core Functionality
- **Dynamic Data Table** - Display artwork collection with sortable columns
- **Server-Side Pagination** - Efficient data loading with paginated API calls
- **Multi-Row Selection** - Select multiple rows with checkboxes
- **Advanced Selection** - Select specific number of rows across multiple pages
- **Responsive Design** - Built with PrimeReact's responsive components

### 🎯 Key Highlights
- **Cross-Page Selection**: Automatically fetch and select rows across multiple pages
- **Smart Pagination**: Navigate through thousands of artworks seamlessly
- **Sortable Columns**: Sort by Title, Place of Origin, Date Start, and Date End
- **Clean UI**: Modern interface with PrimeReact Lara Light Blue theme
- **TypeScript**: Fully typed for better development experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/vaibhavgupta4444/GrowInternship.git
cd GrowInternship/growIntern
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will be available at `http://localhost:5173/`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the development server with HMR |
| `npm run build` | Build the production-ready application |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
growIntern/
├── src/
│   ├── api/
│   │   └── apiClient.ts          # API service for fetching artworks
│   ├── assets/                   # Static assets
│   ├── providers/                # Context providers (if any)
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── public/                       # Public assets
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
└── README.md                     # This file
```

## 🔧 Technologies Used

### Core
- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.7** - Fast build tool and dev server

### UI Components
- **PrimeReact 10.9.7** - Rich UI component library
- **PrimeIcons 7.0.0** - Icon set
- **Tailwind CSS 4.1.13** - Utility-first CSS framework

### Development Tools
- **ESLint 9.36.0** - Code linting
- **TypeScript ESLint 8.44.0** - TypeScript-specific linting rules

## 📊 API Integration

The application fetches data from the **Art Institute of Chicago API**:

```
https://api.artic.edu/api/v1/artworks?page={pageNumber}
```

### Data Structure
Each artwork contains:
- `id` - Unique identifier
- `title` - Artwork title
- `place_of_origin` - Origin location
- `artist_display` - Artist information
- `inscriptions` - Inscriptions on the artwork
- `date_start` - Start date
- `date_end` - End date

## 🎨 Features in Detail

### 1. Data Table with Pagination
- Displays 12 artworks per page (configurable)
- Server-side pagination for optimal performance
- Total records tracked from API response

### 2. Multi-Row Selection
- **Checkbox Selection**: Click individual checkboxes to select rows
- **Bulk Selection**: Use the dropdown in the header to select a specific number of rows
- **Cross-Page Selection**: Automatically fetches next pages if selection count exceeds current page

### 3. Advanced Selection Feature
When you want to select more rows than available on the current page:
1. Click the dropdown arrow in the checkbox column header
2. Enter the number of rows you want to select
3. Click "Select X Rows"
4. The system will:
   - Clear previous selection
   - Start selecting from page 1
   - Automatically navigate to next pages
   - Continue selecting until target count is reached

### 4. Sortable Columns
Click on column headers to sort by:
- Title
- Place of Origin
- Date Start
- Date End

## 🚦 Build & Deployment

### Development Build
```bash
npm start
```
- Hot Module Replacement (HMR) enabled
- Source maps for debugging
- Fast refresh for instant updates

### Production Build
```bash
npm run build
```
- TypeScript compilation check
- Optimized bundle with code splitting
- Minified CSS and JavaScript
- Output directory: `dist/`

### Preview Production Build
```bash
npm run preview
```
- Test the production build locally before deployment

## 🐛 Troubleshooting

### Build Errors
If you encounter build errors:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

### Port Already in Use
If port 5173 is busy:
```bash
# Vite will automatically try the next available port
# Or specify a custom port in vite.config.ts
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Quality

The project uses ESLint for maintaining code quality:
```bash
npm run lint
```

### Recommended VS Code Extensions
- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)

## 📄 License

This project is part of the GrowIntern assignment.

## 👨‍💻 Author

**Vaibhav Gupta**
- GitHub: [@vaibhavgupta4444](https://github.com/vaibhavgupta4444)

## 🙏 Acknowledgments

- [Art Institute of Chicago API](https://api.artic.edu/docs/) for providing the artwork data
- [PrimeReact](https://primereact.org/) for the excellent UI components
- [Vite](https://vitejs.dev/) for the blazing-fast build tool

---

**Built with ❤️ using React, TypeScript, and PrimeReact**
