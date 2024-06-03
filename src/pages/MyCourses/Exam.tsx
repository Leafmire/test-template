import React from "react";
import Layout from "../../components/Layout";
import ReactFullpage from "@fullpage/react-fullpage";
import { AuthProvider } from "../../States/AuthContext";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import ExamAnswerButton from "../../components/ExamAnswerButton";

const Exam = () => {
    return (
        <AuthProvider>
            <div className="font-body flex flex-col min-h-screen">
                <form method="post">
                    <div>
                        <ReactFullpage
                            credits={{ enabled: false, label: "", position: "right" }}
                            scrollOverflow={true}
                            render={({ state, fullpageApi }) => {
                                return (
                                    <ReactFullpage.Wrapper>
                                        <div className="section">
                                            <div className="max-w-screen-lg m-auto text-left mb-20 p-5 bg-white">
                                                <h1 className="md:text-xl text-lg text-gray-900 font-medium">필기모의시험</h1>
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div className="max-w-screen-lg m-auto text-left mb-20 p-5 bg-white">
                                                <div className="md:text-base text-sm text-orange-600 mb-3">문제 1</div>
                                                <div className="md:text-xl text-lg text-gray-900 font-medium mb-3">'.$question['q_content'].'</div>
                                                <ExamAnswerButton questionNo="1" questions={["choice1", "choice2", "choice3", "choice4", "choice5"]} />
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div className="max-w-screen-lg m-auto text-left mb-20 p-5 bg-white">
                                                <div className="md:text-base text-sm text-orange-600 mb-3">문제 2</div>
                                                <div className="md:text-xl text-lg text-gray-900 font-medium mb-3">'.$question['q_content'].'</div>
                                                <ExamAnswerButton questionNo="2" questions={["choice1", "choice2", "choice3", "choice4", "choice5"]} />
                                            </div>
                                        </div>
                                        <div className="section">
                                            <div className="max-w-screen-lg m-auto text-left mb-20 p-5 bg-white">
                                                <button type="submit" id="btn_submit" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                                                    제출
                                                </button>
                                            </div>
                                        </div>
                                    </ReactFullpage.Wrapper>
                                );
                            }}
                        />
                    </div>
                </form>
            </div>
        </AuthProvider>
    );
};

export default Exam;
