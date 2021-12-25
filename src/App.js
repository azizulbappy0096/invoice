import { Table } from "react-bootstrap";
import "./App.css";
import html2pdf from "html2pdf.js";

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

function DownloadIcon() {
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
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
}

function App() {

  const handleDownload = () => {
    const pp = document.getElementById("invoice").innerHTML
    html2pdf().from(pp).toPdf().save()
  }
  
  return (
    <div id="invoice" className="invoice">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-6">
            <h3> KOICE </h3>
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
                <tr>
                  <td>Design</td>
                  <td>Creating a website design</td>
                  <td className="text-center">$50.00</td>
                  <td className="text-center">10</td>
                  <td className="text-end">$500.00</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Creating a website design</td>
                  <td className="text-center">$50.00</td>
                  <td className="text-center">10</td>
                  <td className="text-end">$500.00</td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>Creating a website design</td>
                  <td className="text-center">$50.00</td>
                  <td className="text-center">10</td>
                  <td className="text-end">$500.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Sub Total:
                  </td>
                  <td className="text-end">$2150.00</td>
                </tr>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Tax:
                  </td>
                  <td className="text-end">$2150.00</td>
                </tr>
                <tr>
                  <td colSpan={4} className="fw-bold text-end">
                    Total:
                  </td>
                  <td className="text-end">$2150.00</td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-4 text-center">
            <a href="javascript:window.print()" className="invoice__btn">
              {" "}
              <PrintIcon /> Print{" "}
            </a>
            <a onClick={handleDownload} className="invoice__btn">
              {" "}
              <DownloadIcon /> Download{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
