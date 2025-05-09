import React, { useEffect, useRef } from "react";
import "./templatePreview.css";
import UploadIcon from "@mui/icons-material/CloudUpload";

const TemplatePreview = ({
  primary,
  secondary,
  text,
  font,
  setHone,
  hone,
  btnColor,
  btnColorText,
}) => {
  const style = {
    "--primary-color": primary,
    "--secondary-color": secondary,
    "--text-color": text,
    "--btnColor": btnColor,
    "--btnColorText": btnColorText,
    "--font": font,
  };

  const h2Ref = useRef();
  const templateRef = useRef(null); // Ref for the template container

  const logoRef = useRef(null); // for image element
  const [logoImage, setLogoImage] = React.useState(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const logoUrl = URL.createObjectURL(file);
      setLogoImage(logoUrl);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      document.documentElement.style.setProperty(
        "--bg-image",
        `url(${imageUrl})`
      );
    }
  };

  useEffect(() => {
    const handleClick = (event) => {
      // Check if the clicked element or any of its parents are contenteditable
      const isEditable = event.target.closest('[contenteditable="true"]');
      if (isEditable) return; // If yes, do nothing

      // Otherwise, highlight all contenteditable elements inside the template
      const editableElements = templateRef.current.querySelectorAll(
        '[contenteditable="true"]'
      );
      editableElements.forEach((el) => {
        el.classList.add("contenteditable-highlight");
        setTimeout(() => {
          el.classList.remove("contenteditable-highlight");
        }, 1000);
      });
    };

    // Add event listener to the template container (using the ref)
    const templateContainer = templateRef.current;
    templateContainer.addEventListener("click", handleClick);

    // Cleanup function to remove event listener
    return () => {
      templateContainer.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div ref={templateRef} style={style}>
      <section className="Header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <div className="d-flex align-items-center gap-2">
                {logoImage ? (
                  <img
                    ref={logoRef}
                    src={logoImage}
                    alt="Logo"
                    style={{ height: "40px", objectFit: "contain" }}
                  />
                ) : (
                  <span className="navbar-brand">LOGO</span>
                )}

                <label
                  htmlFor="logo-upload"
                  className="template_editing_btn"
                  style={{ cursor: "pointer" }}
                >
                  <UploadIcon fontSize="small" />
                </label>
                <input
                  type="file"
                  id="logo-upload"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleLogoUpload}
                />
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                  <li className="nav-item">
                    <span className="nav-link active">Inventory</span>
                  </li>
                  <li className="nav-item">
                    <span contentEditable="true" className="nav-link">
                      Financing
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className="nav-link">Contact us</span>
                  </li>
                </ul>
                <form class="header2_btns">
                  <button type="button" class="btn btn-primary"  contentEditable="true">
                    Call
                  </button>
                  <button type="button" class="h2_btn_active btn btn-primary"  contentEditable="true">
                    Directions
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className="template_hero_section">
        {/* <div className="hero_img_slider_main">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[1, 2, 3].map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg" alt="slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{`Slide ${item}`}</h5>
                    <p>{`This is slide number ${item}.`}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}
        <label
          htmlFor="background-upload"
          className="template_editing_btn"
          style={{ cursor: "pointer" }}
        >
          <UploadIcon fontSize="small" />
        </label>
        <input
          type="file"
          id="background-upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </section>

      <div className="site_info_text">
        <div className="home_sec1_text_div text-center">
          <h2
            ref={h2Ref}
            suppressContentEditableWarning
            onBlur={() => {
              const text = h2Ref.current.innerText;
              setHone(text);
              console.log(text, "................................");
            }}
            contentEditable="true"
          >
            {hone}
          </h2>
          <p contentEditable="true">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit...
          </p>
          <button contentEditable="true" type="button">
            See Our Inventory
          </button>
        </div>
      </div>
      <div className="map_main_div">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="location"
        ></iframe>
      </div>

      <footer className="footer_template">
        <div className="container">
          <div className="row">
            {/* Company info */}
            <div className="col-lg-4 col-md-4">
              <div className="footer_text1">
                <h3 contentEditable="true">Company Name</h3>
                <p contentEditable="true">Company Address</p>
                <p contentEditable="true">Company Phone Number</p>
              </div>
            </div>
            {/* Opening hours */}
            <div className="col-lg-4 col-md-4">
              <div className="footer_text2">
                <h3>Opening hours</h3>
                <ul>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                    (day) => (
                      <li key={day}>
                        <span>{day}</span>
                        <span contentEditable="true">8:30 AM - 4:30 PM</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            {/* Contact form */}
            <div className="col-lg-4 col-md-4">
              <form className="footer_contact_form">
                <h3>Contact us</h3>
                <div className="row">
                  <div className="col-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-6">
                    <input type="number" placeholder="Phone number" />
                  </div>
                  <div className="col-12">
                    <input type="email" placeholder="Email address" />
                  </div>
                  <div className="col-12">
                    <textarea rows="5" placeholder="How may we help you?" />
                  </div>
                  <div className="col-12">
                    <button type="button">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="bottom_footer_txt1">
                  {["Inventory", "Contact us"].map((text, i) => (
                    <span key={i}>
                      <span>{text}</span>
                      {i < 5 ? <span>|</span> : null}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <div className="bottom_footer_txt2">
                  <p>© 2020. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplatePreview;
