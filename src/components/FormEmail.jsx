import React, { useEffect, useState } from "react";

const FormEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [saveEmail, setSaveEmail] = useState("");
  // const navigate = useNavigate();
  function onSubmit() {
    if (password !== password2) {
      alert("Неправильный пароль");
    } else if (password2 === " " || email === " " || password === " ") {
      alert("Заполните все поля ");
    } else {
      setSaveEmail(email);
      setShowEmail(true);
      // navigate("/enter");
    }
    setEmail("");
    setPassword("");
    setPassword2("");
  }

  useEffect(() => {}, [showEmail]);

  return (
    <div className="container">
      {showEmail && <h2>{saveEmail}</h2>}
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
        <button type="submit" onClick={onSubmit}>
          Войти
        </button>
      </form>
      {/* <EnterForm email={email} /> */}
    </div>
  );
};

export default FormEmail;
