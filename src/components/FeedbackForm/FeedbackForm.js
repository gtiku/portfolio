import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FeedbackForm.scss";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  let API_URL = `${process.env.REACT_APP_API_URL}/messages`;
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    setMessage(event.target.value);
    setValid(
      event.target.value.trim().length > 10 &&
        event.target.value.trim().length < 500
    );
  };

  const errorMessage = (
    <p className="feedback__error">
      Please enter a valid message. (min 10 chars, max 500 chars)
    </p>
  );

  const postMessage = async () => {
    try {
      await axios.post(API_URL, {
        portfolio_page: document.title,
        text: message,
      });
      console.log("POST sent");
    } catch (error) {
      console.error(error);
    }
  };

  const notify = () => {
    toast.success("Thank you for your feedback!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!valid) {
      setError(true);
    } else {
      postMessage();
      setMessage("");
      setError(false);
      setValid(false);
      notify();
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, "10000");
  }

  return (
    <section className="feedback">
      <h2 className="feedback__heading">Feedback</h2>
      <form className="feedback__form" onSubmit={handleSubmit}>
        <label name="message" className="feedback__label">
          <h5 className="feedback__label-text">
            Thank you for visiting my portfolio website! Please take a moment
            and share your first impressions, comments, and/or suggestions.
          </h5>
          <textarea
            name="message"
            placeholder="Please help me improve by sharing anonymous feedback."
            className={`feedback__textarea ${
              error ? "feedback__textarea--invalid" : ""
            }`}
            value={message}
            onChange={onChangeHandler}
          />
        </label>
        {error ? errorMessage : ""}
        <button className="feedback__button">Send</button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default FeedbackForm;
