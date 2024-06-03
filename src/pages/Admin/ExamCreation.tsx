import React from "react";
import Layout from "../../components/Layout";
import { Field, Input, Label } from '@headlessui/react'

const Exam = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            내 강의실
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">필기모의시험</h1>
                </div>
            </div>
            <div>
            <form method="post">

    <div>
       {index} 번 문제 <div class="write_div"><div class="wr_content"></div></div>
       <Field>
        <Label>①</Label>
        <Input type="text" name={`choice1_${index}`} />
        </Field>
        <Field>
        <Label>②</Label>
        <Input type="text" name={`choice2_${index}`} />
        </Field>
        <Field>
        <Label>③</Label>
        <Input type="text" name={`choice3_${index}`} />
        </Field>
        <Field>
        <Label>④</Label>
        <Input type="text" name={`choice4_${index}`} />
        </Field>
        <Field>
        <Label>⑤</Label>
        <Input type="text" name={`choice5_${index}`} />
        </Field>
        <Field>
        <Label>정답</Label>
        <Input type="text" name={`answer_${index}`} />
        </Field>
        <label for="q_item_1_'.$i.'">①</label> <input type="text" name="q_item_1_'.$i.'" value="'.$question['q_item_1'].'" id="q_item_1_'.$i.'" placeholder="1번 보기" style="width:90%;">
        <label for="q_item_2_'.$i.'">②</label> <input type="text" name="q_item_2_'.$i.'" value="'.$question['q_item_2'].'" id="q_item_2_'.$i.'" placeholder="2번 보기" style="width:90%;">
        <label for="q_item_3_'.$i.'">③</label> <input type="text" name="q_item_3_'.$i.'" value="'.$question['q_item_3'].'" id="q_item_3_'.$i.'" placeholder="3번 보기" style="width:90%;">
        <label for="q_item_4_'.$i.'">④</label> <input type="text" name="q_item_4_'.$i.'" value="'.$question['q_item_4'].'" id="q_item_4_'.$i.'" placeholder="4번 보기" style="width:90%;">
        <label for="q_item_5_'.$i.'">⑤</label> <input type="text" name="q_item_5_'.$i.'" value="'.$question['q_item_5'].'" id="q_item_5_'.$i.'" placeholder="5번 보기" style="width:90%;">
        <label for="q_key_'.$i.'">정답</label> <input type="text" name="q_key_'.$i.'" value="'.$question['q_key'].'" id="q_key_'.$i.'" placeholder="정답">';
    </div>
    <div class="btn_confirm write_div">
        <button type="submit" id="btn_submit" class="btn_submit btn">등록</button>
    </div>
    </form>                
            </div>
        </Layout>
    );
};

export default Exam;
