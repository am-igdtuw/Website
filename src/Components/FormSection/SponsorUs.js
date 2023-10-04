import React from 'react';


const SponsorUsForm = () => {
  return (
    <>
    <style>
        {`
          body, .form-container {
            background-color: black;
            color: white; 
            margin-top: 50px;
          }

          body, h1, form, label, input, textarea, input[type="submit"] {
            margin: 0;
            padding: 0;
            border: 0;
            font-family: Arial, sans-serif;
          }

          .form-container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #fff; /* White text color for the heading */
          }

          /* Style the labels and icons */
          form label {
            display: inline-block;
            width: 30px;
            text-align: center;
            font-size: 20px;
            color: #fff; /* White text color for labels */
            margin-right: 10px;
          }

          form input[type="text"],
          form input[type="email"],
          form input[type="number"],
          form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;
            color: #333; /* Change input text color to dark gray */
            background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white background for inputs */
          }

          /* Style the submit button */
          form input[type="submit"] {
            background-color: #f0c14b; /* Change to your desired button background color */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 3px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease; 
          }

          form input[type="submit"]:hover {
            background-color: #ffdb58; 
          }

          form label i {
            font-size: 1.2em;
          }

          /* Style the textarea */
          form textarea {
            resize: vertical; 
          }

          /* Style the social media input fields */
          form input[type="text"][placeholder="Twitter"],
          form input[type="text"][placeholder="Instagram"],
          form input[type="text"][placeholder="LinkedIn"] {
            background-color: #f5f5f5; 
            color: #333;
            border: 1px solid #ccc;
            border-radius: 3px;
            padding: 10px;
            width: 100%;
            margin-bottom: 15px;
            font-size: 16px;
          }

          form label[for="Social_twitter"],
          form label[for="Social_insta"],
          form label[for="Social_linkedin"] {
            margin-right: 0;
            margin-bottom: 5px;
            display: block;
          }

          form input[type="submit"] {
            display: block;
            margin: 20px auto;
          }

          .form-element {
            display: flex;
          }
        `}
      </style>

      <h1>Sponsor Us</h1>
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
            <textarea placeholder="Sponsorship related query" id="textarea" name="textarea" rows="4" cols="50"></textarea><br />
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

export default SponsorUsForm;
