import { Answer } from "./answer.model";

export class Question {
    ques_id: string;
    ques_content: string;
    answers: Answer[];
    type: string;
    created_at: number;
    updated_at: number;
    score: number;
    // is_disabled: boolean;
}