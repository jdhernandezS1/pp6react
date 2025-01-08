import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Trainer from "../pages/Trainer";
import WorkoutApp from "../pages/Workout";

const RoutesList = () => {
    return (

        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="trainer" element={<Trainer />} />
            <Route path="workouts" element={<WorkoutApp />} />
        </Routes>
    );
};

export default RoutesList;