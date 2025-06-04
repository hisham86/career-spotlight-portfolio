
# Smart Grocery List App

A modern, multi-language grocery list application built with React and TypeScript. Create visual grocery lists with emojis, support for 9 languages, and a beautiful receipt-style display.

## Project Overview

This application helps users create and manage grocery lists with an intuitive interface. The app features emoji-based food selection, multi-language support, and generates a receipt-style visual representation of the grocery list.

## Features

- **Visual Grocery Lists**: Create grocery lists with emoji representations for easy recognition
- **Multi-Language Support**: Available in 9 languages (English, Bahasa Malaysia, Chinese, Korean, Japanese, Arabic, Italian, Spanish, Russian)
- **Receipt-Style Display**: Beautiful receipt-like design with perforated borders and monospace font
- **Quick Add**: Fast item addition with keyboard shortcuts
- **Smart Search**: Find food items by name or emoji
- **Unit Specifications**: Add quantities and units for each item
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Live Demo

Visit the app at: **h16d.com/grocery**

## Tech Stack

This project is built with modern web technologies:

- **React 18** - Frontend library for building user interfaces
- **TypeScript** - Static typing for improved development experience
- **Vite** - Next generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - Accessible and customizable component library
- **React Router** - Client-side routing for navigation
- **Lucide React** - Beautiful, consistent icon set

## Project Structure

```
src/
├── components/
│   ├── grocery/
│   │   ├── LanguageSelector.tsx    # Language switching component
│   │   ├── FoodData.tsx           # Food items database
│   │   ├── Translations.tsx       # Multi-language translations
│   │   └── FoodItemSelector.tsx   # Individual food item component
│   ├── GroceryListGenerator.tsx   # Main generator component
│   ├── Receipt.tsx               # Receipt-style display
│   └── ui/                       # Reusable UI components
├── pages/
│   └── GroceryList.tsx           # Main grocery list page
└── App.tsx                       # Main application component
```

## Development

To run this project locally:

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd grocery-list-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```sh
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Supported Languages

- 🇺🇸 English
- 🇲🇾 Bahasa Malaysia  
- 🇨🇳 中文简体 (Simplified Chinese)
- 🇰🇷 한국어 (Korean)
- 🇯🇵 日本語 (Japanese)
- 🇸🇦 العربية (Arabic)
- 🇮🇹 Italiano (Italian)
- 🇪🇸 Español (Spanish)
- 🇷🇺 Русский (Russian)

## Food Categories

Currently supports:
- 🍎 Fruits (19 varieties with emoji representations)

More categories coming soon!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

&copy; 2025 Smart Grocery List App. All rights reserved.

---

Created with [Lovable](https://lovable.dev/)
