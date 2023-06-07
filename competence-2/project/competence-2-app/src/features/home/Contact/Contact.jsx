import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    if (data.firstName === "" || data.lastName === "") {
      alert("Nama harus diisi");
      e.preventDefault();
      return;
    } else if (data.email === "") {
      alert("Email harus diisi");
      e.preventDefault();
      return;
    } else if (data.message === "") {
      alert("Pesan harus diisi");
      e.preventDefault();
      return;
    } else {
      alert(
        `
        Nama: ${data.firstName} ${data.lastName} 
        Email: ${data.email} 
        Pesan: ${data.message}
        `
      );
      setData(data);
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="container-fluid text-light">
        <div className="row p-5 d-flex justify-content-center ">
          <div className="col-md-7 align-self-center">
            <h1 className="fw-semibold">Contact Us</h1>
            <p className="mt-2 fw-medium">
              Need to get i touch with us? Either fill out form <br /> with your
              inquiry or find the <a href="">department email</a> <br />
              you'd like to contact below
            </p>
          </div>
          <div className="col-md-5 px-5 mt-5">
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-12 mt-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-12 mt-2">
                <label htmlFor="message" className="form-label">
                  What can we help you with?
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  onChange={handleInput}
                />
              </div>
              <div className="col-md-4 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary fw-semibold"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
