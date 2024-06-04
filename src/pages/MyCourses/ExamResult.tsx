import React from "react";
import Layout from "../../components/Layout";

const ExamResult = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            내 강의실
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">모의시험 성적</h1>
                </div>
            </div>
            <div className="text-center pt-36 pb-24">
                <p className="text-lg font-semibold"><span className="text-orange-600">USER </span> 님의 점수</p>
                <h1 className="mt-4 text-6xl font-bold tracking-tight text-gray-900 sm:text-8xl">100</h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" className="text-sm font-semibold text-gray-900">
                        메인 화면으로 <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ExamResult;
