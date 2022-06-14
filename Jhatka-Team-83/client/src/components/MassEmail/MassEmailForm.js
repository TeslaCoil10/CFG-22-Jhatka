import React, {useState} from 'react'
import { addDoc, collection } from "firebase/firestore";

function AddSkills() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // const massEmaildb = collection();

  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUserData({ ...userData, [name]: value });
  // };

  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const {username, email, message} = userData;

  //    if (username && email && message){
  //      await addDoc(massEmaildb, {
  //        username,
  //        email,
  //        message
  //      });
  //    }
  // }



  return (
    <>
      <section className="contactus-section ">
        <div className="container">
          <div className="row">
            <div className='Title'>
              <h2>Please Fill the message to send to the Volenteer</h2>
            </div>

            <div className="col-10 col-lg-6 mx-auto card card-form">
              <div className="row">
              
                {/* right side contact form  */}
                <div className="contact-rightside col-12 ">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="username"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.username}
                          // onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          // onChange={postUserData}
                        />
                      </div>
                    </div>
                                     

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          // onChange={postUserData}
                        />
                      </div>
                    </div>
                    

                    <button
                      type="submit"
                      className="btn btn-dark btn-style w-100"
                      //onClick={submitData}
                      >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddSkills
