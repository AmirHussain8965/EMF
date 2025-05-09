import { React, useState } from "react";
import MyTableTwo from "../components/mytable2/MyTable2";
import { Modal, Button, Row, Col } from "react-bootstrap";
import Eye from "../components/img/eye.svg";
import Edit from "../components/img/edit.svg";
import { InfoOutlined } from '@mui/icons-material';

const headers = [
  { key: "checkbox", label: "Select" }, // Add this for the checkbox column
  { key: "datetime", label: "Date / time" },
  { key: "customer", label: "Customer" },
  { key: "vehicle", label: "Vehicle" },
  { key: "leadtype", label: "Lead Type" },
];

const rows = [
  { id: "101", checkbox:"active", datetime: "2/2/2022 - 4:45PM", customer: "Firstname Lastname", vehicle: "None", leadtype:"Contact us", leaddata: {name: "Dohn Doea", phone: "(373) 323-2834", email: "email@email.com", message: "this is message"} },
  { id: "102", checkbox:"active", datetime: "2/2/2022 - 4:45PM", customer: "Firstname Lastname", vehicle: "2017 Rolls Royce Dawn", leadtype:"Vehicle Inquiry", leaddata: { vehicle: "Rolls Royce Dawn", name: "Dohn Doea",  phone: "(373) 323-2834",  email: "email@email.com", message: "this is message"} },
  { id: "103", checkbox:"active", datetime: "2/2/2022 - 4:45PM", customer: "Firstname Lastname", vehicle: "2017 Rolls Royce Dawn", leadtype:"Finance App", leaddata: { name: "Dohn Doea",  phone: "(373) 323-2834",  email: "email@email.com"} },
];

const renderActions = (row, openModal) => (
  <div className="mytable2_btns">
    <Button onClick={() => openModal(row)}>
      <img src={Eye} alt="" /> View Lead
    </Button>
    {/* <Button className="Edit_btn">
      <img src={Edit} alt="" /> Edit
    </Button> */}
  </div>
);

const renderModalContent = (row, closeModal) => (
    <div
      
    >
      <div className="d-flex align-items-center mb-4">
        <InfoOutlined style={{ fontSize: '2rem', color: '#3f51b5', marginRight: '0.5rem' }} />
        <h4 style={{ margin: 0 }}>Lead Type: <span style={{ color: '#3f51b5' }}>{row?.leadtype}</span></h4>
      </div>
  
      <div className="mb-4">
        {row?.leaddata && Object.entries(row.leaddata).map(([key, value]) => (
          <div
            className="row mb-3"
            key={key}
            style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '0.5rem' }}
          >
            <div className="col-3 text-secondary fw-semibold" style={{ fontSize: '0.95rem' }}>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </div>
            <div className="col-auto" style={{ fontSize: '1rem' }}>{value}</div>
          </div>
        ))}
      </div>
  
      <div className="text-end">
        <Button color="primary" onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>
  );

const Leads = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              renderModalContent={renderModalContent}
              modalTitle="Leads"
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

      <div>
        
      </div>
    </>
  );
};

export default Leads;
