import { Link } from "react-router-dom";
<<<<<<< HEAD
import User from './User';
=======
import { useState } from "react";
>>>>>>> a9714c0 (styled side bar a little bit)

const SideNav = () => {
    const [active, setActive] = useState<string>("");

    return (
        <div 
            className="w-1/6 max-h-screen min-h-screen fixed py-10 flex flex-col 
            justify-between items-center text-gray-400 border border-[#272727] 
            border-e-[#727272]"
        >
            <div className="flex flex-col items-center gap-y-2">
                <Link 
                    to='/todo'
                    className={`w-full flex justify-center px-2 py-1 border-2 
                    rounded-md hover:text-white hover:border-white 
                    ${active == "todo" ? "text-white border-white" : "border-gray-400"}`}
                    onClick={() => setActive("todo")}
                >
                    To-do List
                </Link>
                <Link 
                    to='/habits'
                    className={`w-full flex justify-center px-2 py-1 border-2 
                    rounded-md hover:text-white hover:border-white 
                    ${active == "habits" ? "text-white border-white" : "border-gray-400"}`}
                    onClick={() => setActive("habits")}
                >
                    Habit Tracker
                </Link>
                <Link 
                    to='/timetable'
                    className={`w-full flex justify-center px-2 py-1 border-2 
                    rounded-md hover:text-white hover:border-white 
                    ${active == "timetable" ? "text-white border-white" : "border-gray-400"}`}
                    onClick={() => setActive("timetable")}
                >
                    Timetable
                </Link>
                <Link 
                    to='/workouts'
                    className={`w-full flex justify-center px-2 py-1 border-2 
                    rounded-md hover:text-white hover:border-white 
                    ${active == "workouts" ? "text-white border-white" : "border-gray-400"}`}
                    onClick={() => setActive("workouts")}
                >
                    Workouts
                </Link>
                <Link 
                    to='/workout-tracker'
                    className={`w-full flex justify-center px-2 py-1 border-2 
                    rounded-md hover:text-white hover:border-white 
                    ${active == "workout-tracker" ? "text-white border-white" : "border-gray-400"}`}
                    onClick={() => setActive("workout-tracker")}
                >
                    Workout Tracker
                </Link>
            </div>
            <User />
        </div>
    );
};

export default SideNav;
