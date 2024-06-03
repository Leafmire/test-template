import { Field, Label, Input } from "@headlessui/react";
import { useState } from "react";

const labels = ["①", "②", "③", "④", "⑤"];

export default function ExamInput(props: { questionNo: string; questions: string[] }) {
    const inputs = () => {
        props.questions.map((question, index) => {
            return (
                <Field>
                <Label>labels[index]</Label>
                <Input type="text" name={`choice1_${index + 1}`} />
                </Field>
            )});
    } 
    return (
        <>
        <p className="md:text-xl text-lg text-gray-900 font-medium mb-3">{index} 번 문제</p>
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
         </>
    );
}
