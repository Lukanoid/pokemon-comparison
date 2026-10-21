# Pokémon Comparison

A single-page React application that allows users to discover random Pokémon, compare their primary types, and determine which Pokémon has a type advantage.

The application uses [PokéAPI](https://pokeapi.co/) to retrieve Pokémon information and type effectiveness data.

## Features

- **Random Pokémon Generator** — Load a random Pokémon from the original 151 Pokémon.
- **Pokémon Information** — Display each Pokémon's name, sprite, height, weight, and types.
- **Previous vs. Current Comparison** — Compare newly loaded Pokémon against the previously loaded Pokémon.
- **Type Battle System** — Determine which Pokémon has a primary-type advantage based on PokéAPI data.
- **Battle Statistics** — Track type matches, new Pokémon wins, and previous Pokémon wins.
- **Strongest Pokémon Tracker** — Identify the strongest Pokémon encountered based on total base stats.
- **Responsive Design** — Built with Tailwind CSS for desktop and mobile screens.
- **Optimized Rendering** — Uses React performance optimization techniques.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| JavaScript | Application logic and API communication |
| Vite | Development server and build tool |
| Tailwind CSS | Responsive styling |
| PokéAPI | Pokémon information and type effectiveness data |

## Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Lukanoid/pokemon-comparison.git
```

**2. Navigate to the project directory**

```bash
cd pokemon-comparison
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

`http://localhost:5173/`

### Production Build

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── PokemonCard.jsx
│   ├── BattleResult.jsx
│   ├── LoadPokemonButton.jsx
│   └── StrongestPokemon.jsx
├── services/
│   ├── pokemonService.js
│   └── typeService.js
├── utils/
│   ├── battleLogic.js
│   └── pokemonStats.js
├── App.jsx
├── main.jsx
└── index.css
```

### Architecture

The application separates responsibilities into three main layers:

- **Components** — Reusable React components responsible for displaying Pokémon, battle results, and statistics.
- **Services** — Handle communication with PokéAPI, including Pokémon retrieval and type effectiveness information.
- **Utilities** — Contain independent functions for battle comparisons and base-stat calculations.

`App.jsx` manages the application's state and coordinates interactions between these layers.

## How the Battle System Works

The application compares the primary types of two Pokémon using type effectiveness information retrieved from PokéAPI.

The possible results are:

| Condition | Result |
|---|---|
| Both Pokémon have the same primary type | TYPE MATCH! |
| Only the new Pokémon has a super-effective type advantage | NEW POKÉMON WINS! |
| Only the previous Pokémon has a super-effective type advantage | PREVIOUS POKÉMON WINS! |
| Neither has an exclusive super-effective advantage | NO ADVANTAGE |

The comparison is performed by the `comparePokemonTypes()` function in `battleLogic.js`.

The function uses the `damage_relations.double_damage_to` property provided by PokéAPI to determine type advantages.

## React Performance Optimization

The application demonstrates several React performance optimization techniques.

### useMemo

`useMemo` is used to memoize the strongest Pokémon calculation.

The application maintains a history of loaded Pokémon and determines which has the highest total base stats.

Using `useMemo` avoids repeating this calculation during renders where the Pokémon history has not changed.

### useCallback

`useCallback` is used to memoize the Pokémon loading function.

Since this function is passed as a prop to a memoized button component, `useCallback` helps preserve its reference between renders when its dependencies remain unchanged.

### React.memo

`React.memo` is applied to reusable components such as `PokemonCard` and `LoadPokemonButton`.

This allows React to skip unnecessary component renders when their props have not changed.

These optimizations demonstrate an understanding of component re-rendering, memoization, and dependency management.

## API Integration

The application uses the free, publicly available [PokéAPI](https://pokeapi.co/).

### Pokémon Endpoint

```text
GET https://pokeapi.co/api/v2/pokemon/{id}
```

Retrieves Pokémon details, including sprites, types, height, weight, and base stats.

### Type Endpoint

```text
GET https://pokeapi.co/api/v2/type/{name}
```

Retrieves information about type effectiveness, including damage relationships.

The application also uses caching for type information to reduce repeated API requests.

## Future Improvements

Potential enhancements include:

- Full Pokémon battles using both primary and secondary types
- Damage multipliers and type immunities
- Pokémon search functionality
- Additional animations and visual effects
- Automated unit tests

## Acknowledgments

Pokémon information and sprites are provided by [PokéAPI](https://pokeapi.co/).

Pokémon and related names and imagery are the property of their respective owners.