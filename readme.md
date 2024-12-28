# Booking app
1. Setup backend
    - Make `backend` folder
    ```
    npm init
        entry point: ./src/index.ts
    npm i express cors dotenv mongodb mongoose
    npm i @types/cors @types/express @types/node ts-node typescript nodemon --save-dev
    ```
    - In `package.json`:
    ```
    "scripts":{
        "dev":"nodemon"
    }
    ```
    - Create `backend/src/index.ts`
    - Make sure `tsconfig.json` exists, if not:
    ```
    tsc --init
    ```

2. Setup frontend
    - In root:
    ```
    npm create vite@latest
        Project name: frontend
        Framework: React
        Variant: TypeScript + SWC

    cd frontend
    npm install
    ```

3. Setup mongodb
    - Create new mongodb with admin user and a password, obtain connection string and save it in a `.env` inside the backend folder.
    - In `backend/src/index.ts`, import `mongoose`, and add before middleware:
        `mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);`

4. Install `tailwind css`, create `tailwindcss.config.js` and `postcss.config.js`:
    - In `frontend`:
        ```
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        ```
    - Specify file and file types to apply tailwind:
        In `tailwind.config.js`:
        ```
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
        ```
    - Delete `App.css` and clear contents of `index.css`
    - In `index.css` import tailwind libraries:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
    Check if `index.css` is imported in `frontend/src/main.tsx`
    - Changing `tailwind.config.js` to override styles
    ```js
      theme: {
    extend: {},
    container: {
        padding: "10rem"
    }
    ```

5. Add layout
    - Consider common elements
    - Add `frontend/src/layouts/Layout.tsx`
    - Add `frontend/src/components/Header.tsx` to Layout
    - Update `frontend/src/App.tsx`
    - Add `frontend/src/components/Hero.tsx` to Layout
    - Add `frontend/src/components/Footer.tsx` to Layout
    - Add props that will be passed to Layout:
      - Define `interface`
      - Create `<div>{children}</div>` between `Hero` and `Footer`

6. Authentication & Authorization
    - Registration - backend
      - Create type that represents the user in `backend/src/models/user.ts`
      - Create registration routes in `backend/src/routes/users.ts`
    - Login - backend
      - Create authentication routes in `backend/src/routes/auth.ts`
    - Registration - frontend
      - Pages folder holds the top level React component for a given page.
      - Create `frontend/src/pages/Register.tsx`
    - Link frontend to backend route
      - Create `frontend/src/api-client.ts` to put all the fetch requests.
    - AppContext & Toast
      - What happens an account is successfully create?
      - Allows to store the global state when using any additional third party libraries.
      - Create `frontend/src/contexts/AppContext.tsx`
    - Check user login state
    - Sign in
    - Sign out

7. Automated tests
    - E2E: create a new DB specifically for these tests, this will allow control over the tests by using predictable data.