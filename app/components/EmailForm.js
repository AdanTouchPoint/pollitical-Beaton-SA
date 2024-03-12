"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/cjs/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/cjs/Col";
import Alert from "react-bootstrap/Alert";
import Loader from "react-loader-spinner";
import { fetchData } from "../assets/petitions/fetchData";
import { fetchLeads } from "../assets/petitions/fetchLeads";
import { urlEncode } from "../assets/helpers/utilities";
const EmailForm = ({
  setDataQuestions,
  dataQuestions,
  setQuestions,
  questions,
  setShowThankYou,
  setShowFindForm,
  dataUser,
  setDataUser,
  showEmailForm,
  setShowEmailForm,
  emailData,
  setEmailData,
  clientId,
  backendURLBase,
  endpoints,
  backendURLBaseServices,
  mainData,
  allDataIn,
  setAllDataIn,
  configurations,
  setHideInstructions,
}) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadSpin, setShowLoadSpin] = useState(false);
  const [hideLastQuestion, setHideLastQuestion] = useState(true);
  const [hideAllQuestions, setHideAllQuestions] = useState(false);
  const predefinedEmail = "Hello,\nI am writing to express my concern over payroll taxes on GPs, which threaten their operation and our healthcare quality. These taxes add financial strain, potentially leading to longer wait times and reduced access for the public.\nPlease consider the negative impact of these taxes on healthcare availability and support opposing them. Your action can help maintain a robust healthcare system for our community.";
  const handleTickBox = (e) => {
    hideLastQuestion === true
      ? setHideLastQuestion(false)
      : setHideLastQuestion(true);
  };
  const handleDefaultEmail = (e) => {
    e.preventDefault();
    hideAllQuestions === true
      ? setHideAllQuestions(false)
      : setHideAllQuestions(true);
  };
  
  const handleQuestions = (e) => {
    e.preventDefault();
    setQuestions({
      ...questions,
      [e.target.name]: e.target.value
        .replace(/\n\r?/g, "<br/>")
        .replace(/#/g, " "),
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      ...emailData,
      [e.target.name]: e.target.value.replace(/\n\r?/g, "<br/>"),
    });
    setEmailData({
      ...dataUser,
      ...emailData,
      [e.target.name]: e.target.value.replace(/\n\r?/g, "<br/>"),
    });
  };
  const { userName, subject } = dataUser;
  const send = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (userName?.trim() === "" || subject?.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    const payload = await fetchData(
      "GET",
      backendURLBaseServices,
      endpoints.toSendEmails,
      clientId,
      `questions=${urlEncode(JSON.stringify(questions))}&user=${urlEncode(
        JSON.stringify(dataUser)
      )}`
    );
    setShowLoadSpin(false);
    if (payload.success === true) {
      fetchLeads(
        true,
        backendURLBase,
        endpoints,
        clientId,
        dataUser,
        emailData,
        questions
      );
      setShowEmailForm(true);
      setShowThankYou(false);
    }
    if (payload.success !== true) {
      fetchLeads(
        false,
        backendURLBase,
        endpoints,
        clientId,
        dataUser,
        emailData,
        questions
      );
      return (
        <Alert>
          El correo no ha sido enviado con éxito, por favor intente de nuevo más
          tarde
          <Button
            className={"button-email-form"}
            variant={"dark"}
            onClick={back}
          >
            Regresar
          </Button>
        </Alert>
      );
    }
  };
  const back = (e) => {
    e.preventDefault();
    setHideInstructions(false);
    setShowFindForm(false);
    setShowEmailForm(true);
  };
  console.log(showEmailForm);
  return (
    <div className="email-form-container">

    <div className={"emailContainer"} hidden={showEmailForm}>
      {error ? (
        <Alert variant={"danger"}>
          All fields are required, please fill in the missing ones.
        </Alert>
      ) : null}
      
      <Form name="fm-email" onSubmit={send} noValidate validated={validated} className="fm-email">
        <div className={"formEmail"}>
          <Col>
            <Form.Group>
              <Form.Label>{mainData.emailFormUserNameLabel}</Form.Label>
              <Form.Control
                plaintext="true"
                id="username-emailform"
                type="text"
                placeholder={mainData.emailFormUserNamePlaceholder}
                name="userName"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>{mainData.emailFormUserLabel}</Form.Label>
              <Form.Control
                plaintext="true"
                id="email-emailForm"
                type="email"
                placeholder={emailData.emailUser}
                onChange={handleChange}
                name="emailUser"
                readOnly
              />
            </Form.Group>
          </Col>
        </div>
        <Col>
          <Form.Label>{mainData.emailFormInfoRepLabel}</Form.Label>
        </Col>
        <div className={"formEmail"}>
          <Col>
            <Form.Group>
              <Form.Control
                plaintext="true"
                id="to-emailForm"
                as={"input"}
                readOnly
                type="text"
                placeholder={emailData.name}
                name="nameTo"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                plaintext="true"
                id="state-emailForm"
                as={"input"}
                readOnly
                type="text"
                placeholder={`${emailData.state}`}
                name="state-city"
              />
            </Form.Group>
          </Col>
        </div>
        <div className="formEmail">
          <Col>
            <Form.Group>
              <Form.Label>{mainData.emailFormSubjectPlaceholder}</Form.Label>
              <Form.Control
                plaintext="true"
                id="subject-emailform"
                onChange={handleChange}
                as="input"
                type="text"
                name="subject"
                defaultValue={dataUser.subject}
                required
              />
            </Form.Group>
          </Col>
        </div>
        {
          <Col className="questions">
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                plaintext="true"
                id="message-emailform"
                onChange={handleQuestions}
                type="text-area"
                as="textarea"
                name={"question1"}
                defaultValue={predefinedEmail}
                rows={"5"}
                required
              />
            </Form.Group>
          </Col>
        }
        <Loader
          visible={showLoadSpin}
          type="Puff"
          color="#000000"
          height={100}
          width={100}
          timeout={5000}
        />
        <Form.Group
          style={{ textAlign: "justify" }}
          className="field select-styles-form"
          controlId="tickBox"
        >
          <Form.Check
            name="tickBox"
            onClick={handleTickBox}
            required
            label={
              <p>
                Would an increase in GP pricing due to this issue make you
                consider your voting preference at the next election?
              </p>
            }
          />
        </Form.Group>
        <div hidden={hideLastQuestion} className="questions">
          <Col className="questions">
            <Form.Group>
              <Form.Label>
                Tell your MP this sort of increase would make you consider
                voting against them or their Party in the next election.
              </Form.Label>
              <Form.Control
                plaintext="true"
                id="message-emailform"
                onChange={handleQuestions}
                name="question1"
              />
            </Form.Group>
          </Col>
        </div>
      </Form>
      <div className={"container buttons-container-email-form"}>
        <Button
          id="backButton-emailform"
          
          className={"button-email-form"}
          onClick={back}
        >
          {emailData.backButton
            ? "please enter a back-button text on your dashboard"
            : "Back"}
        </Button>
        <div className="personalice-btn-cont">
            <span className="personalice-msg-btn">We would love you to personalise this email - feel free to edit it before you send to reflect your views.</span>
          <Button
            id="sendButton-emailform"
            type={"submit"}
            
            className={"button-email-form"}
            onClick={send}
          >
            {emailData.sendButton
              ? "please enter a send-button text on your dashboard"
              : "Send"}
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmailForm;
