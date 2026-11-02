# GoIT React Homework #6 - Phonebook with Redux Toolkit

This project is the sixth homework assignment within the GoIT React Developer program. It refactors the Phonebook application to use global state management with **Redux Toolkit** (`createSlice`, `configureStore`) and state persistence with **Redux Persist** instead of local component states.

## 🚀 Live Demo
- [View Live Application on Vercel](https://goit-react-hw-06-tau-self.vercel.app/)

## 🛠️ Key Architecture & Features
1. **Redux Toolkit Slices (`src/redux/`):**
   - `contactsSlice.js`: Manages contact entries with `addContact` and `deleteContact` reducers, exporting the `selectContacts` selector.
   - `filtersSlice.js`: Manages the name filter string with `changeFilter` reducer, exporting the `selectNameFilter` selector.
2. **State Persistence (`redux-persist`):** Configured `store.js` to persist the `contacts` array into `localStorage` across page reloads.
3. **Decoupled Components:** Component tree refactored using `useSelector` and `useDispatch` hooks—eliminating unnecessary prop drilling.
4. **Form Handling & Validation:** Formik with Yup validation schema.

## 📂 Project Structure
- `src/redux/store.js` — Redux store configuration & Redux Persist integration
- `src/redux/contactsSlice.js` — Contacts slice actions and selectors
- `src/redux/filtersSlice.js` — Filters slice actions and selectors
- `src/components/ContactForm/` — Form component dispatching `addContact`
- `src/components/SearchBox/` — Search box component dispatching `changeFilter`
- `src/components/ContactList/` — Contact list rendering filtered results via `useSelector`
- `src/components/Contact/` — Individual contact card dispatching `deleteContact`
- `src/App.jsx` — Root component layout

## 🛠️ Technologies & Tools Used
- **React (v18+):** Functional components & hooks.
- **State Management:** Redux Toolkit & React Redux.
- **State Persistence:** Redux Persist.
- **Form Management & Validation:** Formik & Yup.
- **ID Generator:** nanoid.
- **Bundler:** Vite.
- **Styling:** CSS Modules.
- **Deployment:** Vercel.