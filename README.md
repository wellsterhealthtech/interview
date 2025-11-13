# Interview

This is the starter repository for interviewing software engineers with frontend-focus at Wellster.

## 📋 What you need

This repository offers two possibilities to run the application:

- As part of a pnpm monorepo
- As »standalone« application

In both cases you need to have the active (v24) or maintenance (v22) LTS version of node installed (see: <https://nodejs.org/en/about/previous-releases>).

For the pnpm monorepo, you need to install [`pnpm`](https://pnpm.io/installation).

> [!NOTE]
> The monorepo version contains a backend within the `apps/api` folder. As of now, this backend is not being used. You can thus entirely ignore that folder.

## 💪 Getting Started

1. Clone the project

   ```sh
   git clone git@github.com:wellsterhealthtech/interview.git # ssh
   # or
   git clone https://github.com/wellsterhealthtech/interview.git # https
   ```

The next steps depend upon which of the two possibilities mentioned above you have selected.

### pnpm monorepo

2. Install the dependencies: `pnpm i`

3. Change into the `web` folder: `cd apps/web`

4. Run the dev server: `pnpm dev`

5. Open `localhost:5173`

### »standalone«

2. Change into the `hacks` folder: `cd hacks`

3. Install the dependencies: `npm i`

4. Run the dev server: `npm run dev`

5. Open `localhost:5173`

## 🧭 Project structure

The frontend application tries to stick to [Feature-Sliced Design](https://feature-sliced.design/). While knowledge about that methodology is beneficial, it is not required.
