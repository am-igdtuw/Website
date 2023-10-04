import React from 'react';


const CollaborateUsForm = () => {
  return (
    <>
      <h1>Collaborate Us</h1>
      <div className="form-container">
        <form>
          <div className="form-element">
            <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
            <input type="text" placeholder="Name" id="name" name="name" /><br />
          </div>

          <div className="form-element">
            <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
            <input type="email" placeholder="Email" id="email" name="email" /><br />
          </div>
          
          <div className="form-element">
            <label htmlFor="phone_no"><i className="fa-solid fa-phone"></i></label>
            <input type="number" placeholder="Phone No." id="phone_no" name="phone_no" /><br />
          </div>

          <div className="form-element">
            <label htmlFor="Company/Organisation"><i className="fa-solid fa-building"></i></label>
            <input type="text" placeholder="Company/Organisation" id="Company/Organisation" name="Company/Organisation" /><br />
          </div>

          <div className="form-element">
            <label htmlFor="textarea"><i className="fa-solid fa-memo"></i></label>
            <textarea placeholder="Collaboration Proposal" id="textarea" name="textarea" rows="4" cols="50"></textarea><br />
          </div>

          <div className="form-element">
            <label htmlFor="twitter_id"><i className="fa-brands fa-x-twitter"></i></label>
            <input type="text" placeholder="Twitter" id="twitter_id" name="twitter_id" /><br />
          </div>

          <div className="form-element">
            <label htmlFor="instagram_id"><i className="fa-brands fa-instagram"></i></label>
            <input type="text" placeholder="Instagram" id="instagram_id" name="instagram_id" /><br />
          </div>

          <div className="form-element">
            <label htmlFor="linkedin_id"><i className="fa-brands fa-linkedin"></i></label>
            <input type="text" placeholder="LinkedIn" id="linkedin_id" name="linkedin_id" /><br />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default CollaborateUsForm;
