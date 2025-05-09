import React, { useState } from "react";
import { Table, Modal, Button, Row, Col } from "react-bootstrap";
import Table1 from "../../components/img/table1.svg";
import Table2 from "../../components/img/table2.svg";
import Eye from "../../components/img/eye.svg";
import Edit from "../../components/img/edit.svg";
import "./MyTable2.css";

const MyTable2 = ({
  headers = [],
  rows = [],
  renderModalContent,
  modalSize = "lg",
  modalCentered = true,
  renderActions, // <-- Add this
}) => {
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedRow(null);
  };

  return (
    <div className="mytable2_main">
      <Table bordered>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>
                <div className="mytable2_head_main">
                  <p>{header.label}</p>
                  <div className="mytable2_head_icons">
                    <img src={Table1} alt="..." />
                    <img src={Table2} alt="..." />
                  </div>
                </div>
              </th>
            ))}
            <th>
              <div className="mytable2_head_main">
                <p>Action</p>
                <div className="mytable2_head_icons">
                  <img src={Table1} alt="..." />
                  <img src={Table2} alt="..." />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {headers.map((header, i) => (
                <td key={i}>
                  {header.key === "checkbox" ? (
                    <input type="checkbox" />
                  ) : header.key === "true" ? (
                    <input type="checkbox" checked readOnly />
                  ) : (
                    row[header.key]
                  )}
                </td>
              ))}
              <td>
                {renderActions ? (
                  renderActions(row, handleOpen)
                ) : (
                  <div className="mytable2_btns">
                    <Button onClick={() => handleOpen(row)}>
                      <img src={Eye} alt="" /> View
                    </Button>
                    <Button className="Edit_btn">
                      <img src={Edit} alt="" /> Edit
                    </Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        size={modalSize}
        show={show}
        onHide={handleClose}
        centered={modalCentered}
        dialogClassName="mytable2_modal_main"
        style={{
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}

      >
        <Modal.Header closeButton />
        <Modal.Body>
          {renderModalContent ? (
            renderModalContent(selectedRow, handleClose)
          ) : (
            <div>
              <h5>No modal content provided.</h5>
              <Button onClick={handleClose}>Close</Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyTable2;
