import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const [data, setData] = useState(baseData);
  const regex = /^[A-Za-z]*$/;
  const [errorMassage, setErrorMassage] = useState(null);
  const suratKesungguhan = useRef("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regex.test(value)) {
        setErrorMassage("");
      } else {
        setErrorMassage("Nama Harus Berupa huruf");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const handleSubmit = (e) => {
    if (errorMassage !== "") {
      alert("Terdapat data yang tidak sesuai");
    } else {
      alert(`Data pendaftar "${data.nama}" Berhasil Diterima`);
    }
    e.preventDefault();
  };

  const resetData = () => {
    setData(baseData);
  };

  return (
    <div>
      <div>
        <h1 className="App">Pendaftaran Peserta Coding Bootcamp</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Nama Lengkap:</p>
          <input className="input-styled" type="text" name="nama" value={data.nama} onChange={handleInput}></input>
        </label>
        <label>
          <p>Email:</p>
          <input className="input-styled" type="text" name="email" value={data.email} onChange={handleInput}></input>
        </label>
        <label>
          <p>No Handphone:</p>
          <input className="input-styled" type="text" name="noHandphone" value={data.noHandphone} onChange={handleInput}></input>
        </label>
        <label>
          <p>Latar Belakang Pendidikan:</p>
          <input type="radio" name="pendidikan" value="IT" onChange={handleInput} />
          IT
          <input type="radio" name="pendidikan" value="Non IT" onChange={handleInput} />
          Non IT
        </label>
        <label>
          <p>Kelas Coding yang Dipilih:</p>
          <select name="kelas" onChange={handleInput}>
            <option value="">Pilih Salah Satu Program</option>
            <option value="Coding Backend with Golang">Coding Backend with Golang</option>
            <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </label>
        <label>
          <p>Foto Surat Kesungguhan:</p>
          <input type="file" refs={suratKesungguhan} />
        </label>
        <div>
          <p>Harapan Untuk Coding Bootcamp Ini:</p>
          <textarea className="checkbox-styled" name="harapan" onChange={handleInput} />
        </div>
        <span>{errorMassage}</span> <br />
        <input className="button-styled" type="submit" value="Submit" />
        <button onClick={resetData}>Reset</button>
      </form>
    </div>
  );
}

export default App;
