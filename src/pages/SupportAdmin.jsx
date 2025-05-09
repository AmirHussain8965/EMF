import { React, useState } from "react";
import MyTableTwo from "../components/mytable2/MyTable2";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Eye from "../components/img/eye.svg";
import Edit from "../components/img/edit.svg";
import { useNavigate } from "react-router-dom";

const headers = [
  { key: "id", label: "ID" },
  { key: "name", label: "Ticket Name" },
  { key: "datatime", label: "Date & Time" },
  { key: "status", label: "Status" },
];

const rows = [
  { id: "101", name: "Jhon Doe", datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "102", name: "Sarah" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "102", name: "Jhon Doe" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "103", name: "Sarah" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "104", name: "Jhon Doe" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "105", name: "Sarah" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "106", name: "Jhon Doe" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
  { id: "107", name: "Sarah" , datatime: "13/07/22 - 2:34 PM", status: "Closed" },
];

  
const SupportTicketView = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // ✅ Use hook at top level   

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const renderActions = (row) => (
    <div className="mytable2_btns">
      <Button onClick={() => navigate("/TicketDetail")}>
        <img src={Eye} alt="" /> View
      </Button>
    </div>
  );

  return (

    
    <>
      <div className="pages_main_component">
        <div className="last_right">
          <Button onClick={handleShow}>
            <i class="bi bi-plus-lg"></i> Add Users
          </Button>
        </div>
        <div className="ManUserCom_inner">
          <div className="ManUserCom_table_div">
            <MyTableTwo
              headers={headers}
              rows={rows}
              renderActions={renderActions}
            />
          </div>
        </div>
      </div>
      {/* Modal component */}
      <Modal
        size="lg"
        dialogClassName="mytable2_modal_main"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="mytable2_modal_inner">
            <h5>User Information </h5>
            <div className="mytable2_inputs_main">
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <div className="theinputs_inner">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <div className="theinputs_inner">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="" id="" />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <div className="theinputs_inner">
                    <label htmlFor="">Access Level</label>
                    <select name="" className="form-select">
                      <option value="">Select Access Level</option>
                      <option value="">Manager</option>
                      <option value="">Standard User</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <div className="check_box_active">
                <input
                  type="checkbox"
                  name="Active_checkbox"
                  id="Active_checkbox"
                />
                <label htmlFor="Active_checkbox">Active</label>
              </div>
            </div>
            <div className="last_three_buttons">
              <Button>Send password reset link</Button>
              <div className="last_three_buttons_inner">
                <Button onClick={handleClose}>Save</Button>
                <Button onClick={handleClose} className="last3_active">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SupportTicketView;
