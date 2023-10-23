# Reanimated-example

## Setup

1. Clone the repo

```bash
git clone https://github.com/monika1127/reanimated-example.git
```

2. Switch to the project's root directory:

```bash
cd reanimated-example
```

3. Install the dependencies by running:

```bash
npm install
```

4. Run the app on mobile and web:

```bash
npx expo start
```

### Open the app on device

1. Make sure that you have `Expo Go` already installed
2. Run the app: `npx expo start`
   - **Android:** press Scan QR Code on the Home tab of the Expo Go app and scan the QR code you see in the terminal.
   - **iPhone:** open the default Apple Camera app and scan the QR code you see in the terminal.

## Examples

### Collapsable header

Goals

- Create FlatList with collapsible header
- It should start with height of 250px and shrink into 100px and should start shrinking when user scroll more than 50% of the screen
- Place a button in smaller version of the header to make it big again with bounce animation
- Then again after scrolling half of the screen is should shrink

### Radial menu

Goals

- Create animated drawer with a radial menu
- Drawer should expand with some nice animation, after expanding, a radial carousel should appeared on the screen
- Each menu element should have an icon and label
- The radial menu should be an infinite scroll (when the user reach the last menu item, the first element appears again)

Inspirations:
- [Menu-Design](https://dribbble.com/shots/6155653-Menu-Design)
- [Porsche-Passport-Menu-Interaction ](https://dribbble.com/shots/4574257-Porsche-Passport-Menu-Interaction)

### Wallet

Goals
- Create a wallet view with rolled-up cards and button to add new card
- It should be possible to see details of card on press (currency with amount - for example cryptocurrency like on dribbble)
  (On details view) - when the user press again card, the view should get back
- Card can be just image (easier solution)

Inspiration:
- [Wallet Gesture Animation](https://dribbble.com/shots/6713486-2-FREE-Touch-Gesture-Animations-interactions-for-after-effects)

### Tinder swipe

Goals
- Tinder Swipe!
- Main view should have centered card with a photo (and maybe some info about a person)
- Card should have ability to be swiped left & right with some rotate animation
