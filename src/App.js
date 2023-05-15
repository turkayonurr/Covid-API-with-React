import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [veri, setVeri] = useState();
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setVeri(res.data[tarih]))
      .catch((err) => console.log(err));
  }, [veri, tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-5">
              TÜRKİYE COVİD-19 ARAMA MOTORU
            </h2>
            <input
              type="text"
              placeholder="GG/AA/YYYY"
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            />
            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test sayısı</th>
                  <th scope="col">Hasta sayısı</th>
                  <th scope="col">Vefat sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ color: "white" }} scope="row">
                    {veri === undefined ? "Veri Bekleniyor.." : veri.date}
                  </th>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                    style={{ color: "white" }}
                  >
                    {veri === undefined ? "Veri Bekleniyor.." : veri.totalTests}
                  </td>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                    style={{ color: "white" }}
                  >
                    {veri === undefined ? "Veri Bekleniyor.." : veri.patients}
                  </td>
                  <td
                    className={veri === undefined ? "bg-danger" : "bg-success"}
                    style={{ color: "white" }}
                  >
                    {veri === undefined ? "Veri Bekleniyor.." : veri.deaths}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
