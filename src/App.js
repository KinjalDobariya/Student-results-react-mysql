import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Button, Form, Col, Row, Table } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const [Arr, setarr] = useState([])

  let no, sname, sub1, sub2, sub3, sub4, sub5;



  const formhandler = (e) => {

    e.preventDefault();

    no = e.target.rno.value
    sname = e.target.s_name.value
    sub1 = e.target.sub1.value
    sub2 = e.target.sub2.value
    sub3 = e.target.sub3.value
    sub4 = e.target.sub4.value
    sub5 = e.target.sub5.value

    let symbol = 'X';

    let total= parseFloat(sub1)+parseFloat(sub2)+parseFloat(sub3)+parseFloat(sub4)+parseFloat(sub5);
    let pr=total/500*100;
    let min= Math.min(sub1,sub2,sub3,sub4,sub5)
    let max= Math.max(sub1,sub2,sub3,sub4,sub5)
    let grade,result;

    if (pr >90) {

      grade="A1";
      
    }
    else if (pr >80) {

      grade="A"
      
    }
    else if (pr >60) {

      grade="B"
      
    }
    else if (pr >50) {

      grade="C"
      
    }
    else if (pr >40) {

      grade="FAIL"
      
    }

    if (grade === "FAIL") {
      
      result ="FAIL";
    }
    else
    {
      result = 'PASS'
    }
    

    setarr([...Arr,{ no, sname, sub1, sub2, sub3, sub4, sub5,total,pr,min,max,grade,result,symbol}])

    e.target.rno.value='';
    e.target.s_name.value='';
    e.target.sub1.value='';
    e.target.sub2.value='';
    e.target.sub3.value='';
    e.target.sub4.value='';
    e.target.sub5.value='';

  } 

  const handleRemoveValue = (index) => {
    const arrdata = Arr.splice(index,1);
    const newArray = Arr.filter((item) => item !== index)
    console.log(Arr)
    setarr(newArray);
    
  }

  return (
    <>

      <div className="container">

        <div className="heading">
          <h1>Student Result</h1>
        </div>
        <div className="formarea">
          <Form onSubmit={formhandler}>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> Seat No : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='00' id="rno" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor="">Name : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="text" placeholder='Enter Name' id="s_name" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> Account : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='Marks' id="sub1" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> Statistics : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='Marks' id="sub2" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> B.A : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='Marks' id="sub3" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> Economic : </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='Marks' id="sub4" />
              </Col>
            </Row>
            <Row>
              <Col lg={2} sm={12}>
                <label htmlFor=""> English: </label>
              </Col>
              <Col lg={10} sm={12}>
                <input type="number" placeholder='Marks' id="sub5" />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-center ">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <br></br>
        <br></br>
        <div className="tablearea">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th > Seat No </th>
                <th>Name</th>
                <th>Acc</th>
                <th>Stat</th>
                <th>B.A</th>
                <th>Eco</th>
                <th>Eng</th>
                <th>Total</th>
                <th>Percentage</th>
                <th>Min</th>
                <th>Max</th>
                <th>Grade</th>
                <th>Result</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {Arr.map((item, index) => (

                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.sname}</td>
                  <td>{item.sub1}</td>
                  <td>{item.sub2}</td>
                  <td>{item.sub3}</td>
                  <td>{item.sub4}</td>
                  <td>{item.sub5}</td>
                  <td>{item.total}</td>
                  <td>{item.pr}</td>
                  <td>{item.min}</td>
                  <td>{item.max}</td>
                  <td>{item.grade}</td>
                  <td>{item.result}</td>
                  <td className='del ' onClick={() => handleRemoveValue(index)}>{item.symbol}</td>
                </tr>

              ))}


            </tbody>
          </Table>
        </div>

      </div>


    </>
  );
}

export default App;
