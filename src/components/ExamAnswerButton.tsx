import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

export default function ExamAnswerButton(props: { questionNo: string; questions: string[] }) {
    let [selected, setSelected] = useState("choice1");
    return (
        <RadioGroup name={`question${props.questionNo}`} value={selected} onChange={setSelected} aria-label="Server size">
            {props.questions.map((question, index) => (
                <Field key={`choice${index + 1}`} className="flex items-center gap-2">
                    <Radio
                        value={`choice${index + 1}`}
                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                    >
                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                    </Radio>
                    <Label className="flex flex-row items-center md:text-base text-sm">
                        <p className="flex flex-shrink-0 justify-center items-center w-10 h-10 border-r border-gray-300 transition ease-in-out duration-150">
                            {index + 1}
                        </p>
                        <span className="text-gray-700 inline-block ml-5">{question}</span>
                    </Label>
                </Field>
            ))}
        </RadioGroup>
    );
}
