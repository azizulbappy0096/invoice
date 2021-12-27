import "./App.css";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

let mockData = [
  {
    service: "Design",
    description: "Creating a website design",
    rate: 50.0,
    qty: 10,
    amount: 500,
  },
  {
    service: "Development",
    description: "Website Development",
    rate: 120.0,
    qty: 10,
    amount: 1200.0,
  },
  {
    service: "SEO",
    description: "	Optimize the site for search engines (SEO)",
    rate: 450.0,
    qty: 1,
    amount: 450,
  },
];

function PrintIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  );
}

function App() {
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    for (let i = 0; i < mockData.length; i++) {
      setSubTotal((prev) => prev + mockData[i].amount);
      setTax((prev) => prev + mockData[i].amount * 0.15);
      setTotal((prev) => prev + mockData[i].amount * 0.15 + mockData[i].amount);
    }
  }, []);

  return (
    <div id="invoice" className="invoice">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-6">
            <h3> LOGO </h3>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <h3 className="text-capitalize"> Invoice </h3>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-md-6">
            <h6 className="fw-light">
              <span className="fw-bold">Date:</span> 05/12/2020{" "}
            </h6>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <h6 className="fw-light">
              <span className="fw-bold">Invoice No:</span> 16835{" "}
            </h6>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-md-6">
            <strong className="text-capitalize"> Invoiced to: </strong>
            <address>
              Mr. Saul <br />
              15 Hodges Mews, High Wycombe
              <br />
              HP12 3JL
              <br />
              United Kingdom
            </address>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <strong className="text-capitalize"> Pay to: </strong>
            <address>
              Koice Inc <br />
              2705 N. Enterprise St
              <br />
              Orange, CA 92865
              <br />
              contact@koiceinc.com
            </address>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Table responsive>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th className="text-center">Rate</th>
                  <th className="text-center">QTY</th>
                  <th className="text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.service}</td>
                    <td style={{fontSize: 14}}>{data.description}</td>
                    <td className="text-center">${data.rate.toFixed(2)}</td>
                    <td className="text-center">{data.qty}</td>
                    <td className="text-end">${data.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Sub Total:
                  </td>

                  <td className="text-end">${subTotal.toFixed(2)} </td>
                </tr>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Tax:
                  </td>
                  <td className="text-end">${tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Total:
                  </td>
                  <td className="text-end">${total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4 text-center">
            <p className="text-muted">
              {" "}
              <span className="fw-bold">Note:</span> To download invoice as PDF, click on print and save as PDF
              format.{" "}
            </p>
            <a href="javascript:window.print()" className="invoice__btn">
              {" "}
              <PrintIcon /> Print{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
