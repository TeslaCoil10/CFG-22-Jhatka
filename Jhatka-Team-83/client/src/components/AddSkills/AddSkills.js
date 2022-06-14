import React, {useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {db} from '../../firebase-config';
import './AddSkills.css';

function AddSkills() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4]=useState("");
  const [skill5, setSkill5]=useState(0);

  const localdb =collection(db, "Users");

  const onFormSubmit = async(skillData) => {
    const {skill1,skill2,skill3,skill4,skill5} = skillData;
    await addDoc(localdb, {
         skills:[skill1,skill2,skill3,skill4,skill5]
       });
    console.log(skillData)
  }
  


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
      <Container fluid>
      <div className="backg4">
      <h3 className="text-center font-link p-4">Add Your 5 Top Skills</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="education-form bg-light mx-auto border border-dark rounded p-3"
      >

        <div className="mb-3">
          <label htmlFor="skill1" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 1</div>
            </div>
          </label>

          <input
            type="text"
            id="skill1"
            onChange={(event) => {
              setSkill1(event.target.value);
            }
          }
            className="form-control"
            //{...register("skill1", { required: true })}
          />
          {errors.skill1?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="skill2" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 2</div>
            </div>
          </label>

          <input
            type="text"
            id="skill2"
            onChange={(event) => {
              setSkill2(event.target.value);
            }
          }
            className="form-control"
            //{...register("skill2", { required: true })}
          />
          {errors.skill2?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>
       
        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 3</div>
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
            //{...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 4</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            onChange={(event) => {
              setSkill4(event.target.value);
            }
          }
            className="form-control"
            //{...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="percent" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Skill 5</div>
            </div>
          </label>

          <input
            type="text"
            id="percent"
            onChange={(event) => {
              setSkill5(event.target.value);
            }
          }
            className="form-control"
            //{...register("percent", { required: true })}
          />
          {errors.percent?.type === "required" && (
            <p className="text-danger">*Enter your Skill</p>
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
