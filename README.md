# App Boilerplate

A React Native Expo boilerplate with TypeScript, featuring a clean architecture and essential screens to kickstart your mobile app development.

## Requirements

- **Node.js**: >= 18.0.0
- **npm**: >= 8.0.0

## Features

- 📱 React Native with Expo
- 🎯 TypeScript for type safety
- 🧭 Expo Router for navigation
- 📂 Well-organized folder structure
- 🎨 Basic UI components
- 🔐 Authentication screens (Login, Signup, Forgot Password)
- 🏠 Home screen with navigation
- 📑 Tab navigation example
- 🛒 E-commerce ready structure (Product, Cart, Checkout)
- 👤 Profile management
- ⚙️ Settings screen
- 🎯 API client setup

## Project Structure

```
app-boilerplate/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Tab navigation screens
│   ├── auth/              # Authentication screens
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── home/              # Home screen
│   ├── onboarding/        # Onboarding screens
│   ├── product/           # Product pages
│   ├── profile/           # User profile
│   └── setting/           # Settings
├── api/                   # API client and types
├── assets/                # Images, fonts, and static assets
├── components/            # Reusable components
├── constants/             # App constants
├── hooks/                 # Custom React hooks
└── scripts/               # Utility scripts
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm start
   ```

3. Run on platforms:

   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

## Testing & Development

### Running Multiple Simulators
Run both iOS and Android simultaneously:
```bash
# Terminal 1: Start Expo server
npm start

# Then press 'i' for iOS and 'a' for Android
# Or use separate terminals:
npm run ios    # Terminal 2
npm run android # Terminal 3
```

### Auto-Reload Setup
Enable Fast Refresh for instant code updates:

**Method 1: Expo CLI**
```bash
npm start
# Press 'r' to enable auto-reload for all devices
```

**Method 2: Device Dev Menu**
- **iOS**: Shake simulator (`Cmd + Ctrl + Z`) → Enable Fast Refresh
- **Android**: Shake emulator (`Cmd + M`) → Enable Fast Refresh

**Method 3: Clear cache and restart**
```bash
npx expo start --clear
```

**Method 4: Hard reset**
```bash
npx expo start --clear --reset-cache
```


### Reloading Issues
If you see cached content:
1. Shake device/simulator to open dev menu
2. Tap "Reload" or press `Cmd + R` (iOS)
3. Or press `R` in terminal where `npm start` runs

## Project Architecture

This project uses [Expo Router](https://docs.expo.dev/router/introduction) with file-based routing for navigation.

### 🚀 How Expo Router Works

**File-Based Routing:**
- Each `.tsx` file in `app/` becomes a route
- Folders create nested routes
- `_layout.tsx` files define navigation structure
- `[id].tsx` creates dynamic routes (like `/product/1`)


## Available Screens

- **Authentication**: Login, Signup, Forgot Password
- **Main App**: Home, Products, Cart, Checkout
- **User**: Profile, Settings
- **Navigation**: Tab navigation example

## Customization

1. Update `api/client.ts` with your API base URL
2. Modify the theme colors in `constants/Colors.ts`
3. Add your fonts to `assets/fonts/`
4. Customize components in `components/`

## Next Steps

- Add state management (Redux, Zustand, or Context API)
- Implement actual API integration
- Add form validation
- Set up push notifications
- Configure app icons and splash screen
- Add more UI components as needed

## License

MIT
