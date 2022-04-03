import React, {useEffect, useMemo, useRef, useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Link, Navigate, Redirect, Route, Router, Routes, Switch} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}>

                </Route>
                <Route path="/posts" element={<Posts/>}>

                </Route>
                <Route path="/error" element={<Error/>}>

                </Route>
                <Route path="*"
                    element={<Navigate to="/error" replace/>}
                />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
