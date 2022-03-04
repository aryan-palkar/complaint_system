import React from "react";

export default function Informations() {
    let myStyle = {
        minHeight: "100vh"
      }
    return (
    <div className="container py-3" style={myStyle}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is the Use of Grivances?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Main use of Grivances is that students or staff related 
                to the working of the general purpose activities of the institution.
                </strong>Students or Staff can make their id's here and then apply
                for the grivances, from their own account.<code></code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can we apply for Grievances?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Student need to signup through the link given above, then file your complaint
              related to the department. If you are unable to choose the related department,
              please contact the respective authorities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How does it helps staff?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Staff can watch out for the dashboard and Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum debitis ut culpa exercitationem quo quas ea eaque illum eum beatae! Inventore deleniti omnis dicta debitis cum modi deserunt aperiam reprehenderit!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
