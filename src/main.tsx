import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import Introduce from "./pages/About/Introduce.tsx";
import Gallery from "./pages/Services/Gallery.tsx";
import Board from "./pages/Services/Board.tsx";
import Notice from "./pages/Services/Notice.tsx";
import ExamSchedule from "./pages/About/ExamSchedule.tsx";
import Classroom from "./pages/OnlineClassrooms/Classroom.tsx";
import Lab from "./pages/OnlineLearningLab/Lab.tsx";
import Examinationcriteria from "./pages/About/Examinationcriteria.tsx";
import Resistration from "./pages/About/Registration.tsx";
import Exam from "./pages/MyCourses/Exam.tsx";
import ExamResult from "./pages/MyCourses/ExamResult.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/introduce",
        element: <Introduce />,
    },
    {
      path: "/exam-schedule",
      element: <ExamSchedule />,
    },
    {
      path: "/exam-creiteria",
      element: <Examinationcriteria />,
    },
    {
        path: "/Resistration",
        element: <Resistration />,
    },
    {
        path: "/exam",
        element: <Exam />,
    },
    {
        path: "/exam-result",
        element: <ExamResult />,
    },
    {
        path: "/board",
        element: <Board />,
    },
    {
        path: "/notice",
        element: <Notice />,
    },
    {
        path: "/online-classroom",
        element: <Classroom />,
    },
    {
        path: "/online-learning-lab",
        element: <Lab />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);
