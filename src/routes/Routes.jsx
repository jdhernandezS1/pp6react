import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Calculator from "../pages/Calculator";
import WorkoutApp from "../pages/Workout";

const RoutesList = () => {
    return (

        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="workouts" element={<WorkoutApp />} />
        </Routes>
    );
};

export default RoutesList;