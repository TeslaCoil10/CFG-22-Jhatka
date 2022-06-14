import React, {useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {db} from '../../firebase-config';
import '../AddSkills/AddSkills.css';

function AddSkills() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [institute, setSkill1] = useState("");
  const [degree, setSkill2] = useState("");
  const [percent, setSkill3] = useState("");
  const [gradyear, setSkill4]=useState("");
  const localdb = collection(db, "Users");

  const onFormSubmit = async(EduData) => {
    console.log(EduData)
    const {institute,degree,percent,gradyear} = EduData;
    await addDoc(localdb, {
        Education: [institute,
         degree,
         percent,
         gradyear]
       });
  }
  

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
      <Container fluid>
      <div className="backg4">
      <h3 className="text-center font-link p-4">Add Education Details</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="education-form bg-light mx-auto border border-dark rounded p-3"
      >

        <div className="mb-3">
          <label htmlFor="institute" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>School/College/University</div>
            </div>
          </label>

          <input
            type="text"
            id="institute"
            onChange={(event) => {
              setSkill1(event.target.value);
            }
          }
            className="form-control"
            //{...register("institute", { required: true })}
          />
          {errors.institute?.type === "required" && (
            <p className="text-danger">*Enter your Institute</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Degree</div>
            </div>
          </label>

          <input
            type="text"
            id="degree"
            onChange={(event) => {
              setSkill2(event.target.value);
            }
          }
            className="form-control"
            //{...register("degree", { required: true })}
          />
          {errors.degree?.type === "required" && (
            <p className="text-danger">*Enter your Degree</p>
          )}
        </div>
       
        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Marks/Percentage/GPA</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            onChange={(event) => {
              setSkill3(event.target.value);
            }
          }
            className="form-control"
           // {...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your marks</p>
          )}
        </div>

         <div className="mb-3">
          <label htmlFor="gradyear" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Graduation Date</div>
            </div>
          </label>

          <input
            type="date"
            id="gradyear"
            onChange={(event) => {
              setSkill4(event.target.value);
            }
          }
            className="form-control"
            //{...register("gradyear", { required: true })}
          />
          {errors.gradyear?.type === "required" && (
            <p className="text-danger">*Enter your the Data</p>
          )}
        </div>

        <button className="d-block mx-auto btn btn-primary mb-2" type="submit">
          Submit
        </button>
      </form>

    </div>
    </Container>

    </>
  )
}

export default AddSkills
