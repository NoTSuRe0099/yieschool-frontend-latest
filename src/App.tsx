import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./Components/Navbar/Navbar";
type Props = {};

const App: React.FC<Props> = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="" element={<h1>Home</h1>} />
            </Routes>
        </>
    );
};

export default App;
