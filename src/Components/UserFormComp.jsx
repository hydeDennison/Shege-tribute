import styled from "styled-components";
import Attribution from "./AttributionComp";
import QuestionInput from "./QuestionInputCom";
import { useState } from "react";
import QuestionSelector from "./QuestionSelectorComp";

function UserForm() {
  const [questions, setQuestions] = useState(
    [
    "What has shege done to you? ",
    "How has garri saved you?",
    "Tell you heartbreak story?"
  ]);
  const [formValue, setFormValue] = useState("Tell us your story.... ");
  return (
    <UserFormContainer>
      <Attribution />
      <QuestionSelector questions={questions} setQuestions={setQuestions} />
      <QuestionInput formValue={formValue} setFormValue={setFormValue} />
    </UserFormContainer>
  );
}

const UserFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export default UserForm;
