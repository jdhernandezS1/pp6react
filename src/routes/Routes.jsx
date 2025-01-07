import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Trainer from "../pages/Trainer";
const RoutesList = () => {
    return (

        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="trainer" element={<Trainer />} />
        </Routes>
    );
};

export default RoutesList;