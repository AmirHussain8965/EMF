import React from 'react';
import './TicketDetail.css';
import { Button } from 'react-bootstrap';

const TicketDetail = () => {
  return (
    <>
      <div className="TicketDetail_main">
      <div className="top_title">
                <h3>Support </h3>
            </div>
        <div className="TicketDetail_inner">
          {/* Ticket Card */}
          <div className="ticket-card">
            <div className="ticket-header">
              <div className="ticket-info">
                <p>
                  <strong>ID:</strong> 1001
                </p>
                <p>
                  <strong>Date & Time:</strong> 10/01/22 - 2:54 PM
                </p>
              </div>
              <Button className="back-button">Back</Button>
            </div>

            <div className="ticket-user-info">
              <p>
                <strong>NAME:</strong> John Doe
              </p>
              <p>
                <strong>EMAIL ADDRESS:</strong> Doe@gmail.com
              </p>
              <p>
                <strong>STATUS:</strong> <span className="status-open">OPEN</span>
              </p>
            </div>

            <div className="ticket-description">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </p>
            </div>

            <div className="ticket-closed-on">
              <p>Closed on</p>
            </div>

            <div className="ticket-actions">
              <Button className="mark-closed-button">Mark as Closed</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetail;