import React from "react";
import "./i18n";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import { store } from "./app/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

//const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);

// export const clearStorage = () => {
//   persistor.pause();
//   persistor.flush().then(() => {
//     return persistor.purge();
//   });
// };

// persistor.pause();
// persistor.flush().then(() => {
//   return persistor.purge();
// });

//root.render(
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
