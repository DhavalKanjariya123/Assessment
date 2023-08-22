import React from "react";
import { useState } from "react";
import "react-bootstrap";
import { Table, Form } from "react-bootstrap";



function App() {

  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues(values => ({ ...values, [e.target.name]: e.target.value }));
  };

  const [userName, setUserName]=useState("");

  var userdata = { userName };
  if (userdata < 3) {
    console.log("userdata");
  }
  else {
    userdata = "";
  }



  return (
    <>
      <div className="bg-light p-2 w-50 m-auto">
        <h4>Register Here</h4>
        <h2>USER REGISTRATION</h2>
        <p className="mt-4">Fields marked <span className="text-danger" >*</span> are required...</p>
        <Form >
          <Table className="w-100 m-auto">
            <tr>
              <th className="float-end">
                <p>Email <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ''}
                  required />
              </td>
            </tr>
            <tr>
              <th className="float-end">
                <p>Password <span className="text-danger" >*</span></p>
              </th>
              <td >
                <input className="ms-5 w-75" type="password" required={true} />
              </td>
            </tr>

            <tr>
              <th>
                <p className="float-end">Retype password <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="password" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">First Name <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input id="first"  className="ms-5 w-75" name="first" type="text" minLength="4"     required={true}           />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Last Name <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Phone Number <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="number" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Address <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="invisible">Address <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Town</p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Region <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Postcode/Zip <span className="text-danger" >*</span></p>
              </th>
              <td>
                <input className="ms-5 w-75" type="text" required={true} />
              </td>
            </tr>
            <tr>
              <th>
                <p className="float-end">Country <span className="text-danger" >*</span></p>
              </th>
              <td>
                <select className="ms-5 w-75" style={{ width: "205px" }}>
                  <option value="India">India</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </td>
            </tr>
          </Table>
          <div className="text-center">
            <button type="submit" className="bg-success text-white p-3 fs-5 mt-3 mb-5 w-25" >Register</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default App;
