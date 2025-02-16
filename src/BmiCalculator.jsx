import React, { useState } from 'react'

const BmiCalculator = () => {
    const[weight,setWeight]=useState()
    const[height,setHeight]=useState()
    const[bmi,setBmi]=useState(null)
    const[bmiStatus,setBmiStatus]=useState()
    const[error,setError]=useState("")

    function CalculateBmi(){
       
            

        if(weight && height){
            const heightInMeters=height/100
            const bmiValue=weight/(heightInMeters*heightInMeters)
            setBmi(bmiValue.toFixed(2))
            if(bmiValue <=18.4){
                setBmiStatus("Under Weight")
            }
            else if(bmiValue>=18.5 && bmiValue<=25){
                setBmiStatus("Normal Weight")
            }
            else if(bmiValue>25 && bmiValue<=30){
                setBmiStatus("Over Weight")
            }
            else{
                setBmiStatus("Obese")
            }
            
            setHeight("")
            setWeight("")
            setError("")
        }
        else{
            setHeight("")
            setWeight("")
            setBmi(null)
            setBmiStatus("")
            setError("PLS ENTER VALID DATA")
        }
       
        if(weight){
            setError("PLS ENTER HEIGHT")
        }
        else if(height){
            setError("PLS ENTER WEIGHT")
        }
        else{
            setError("PLS ENTER VALID DATA")
        }
    }
    
  return (
    <>
    <div className="container">
    <h1 className='text-primary'>BMI CALCULATOR</h1>

    <div className='form-group my-4'>
        <label htmlFor=''>WEIGHT :</label>
        <input type="text" placeholder='Weight in KG' onChange={(e)=>{setWeight(e.target.value)}} value={weight}/>
    </div>
    <div className='form-group my-4'>
        <label htmlFor="">HEIGHT :</label>
        <input type="text" placeholder='Height in cm' onChange={(e)=>{setHeight(e.target.value)}} value={height}/>
    </div>
    <button className='btn-primary' onClick={CalculateBmi}>CALCULATE BMI</button>
    <div>
        <p className='text-danger'>{error}</p>
    </div>
    {bmi !=null &&<div id='result' className='my-2'>
        <p>Your Bmi value :{bmi}</p>
        <p>Your Bmi Status :{bmiStatus}</p>
        </div>}
    </div>
         
    </>
  )
}

export default BmiCalculator


// import React, { useState } from "react";

// function BMICalculator() {
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [bmi, setBmi] = useState(null);

//   const calculateBMI = () => {
//     if (!weight) {
//       setErrorMessage("Please Enter Weight");
//       setBmi(null);
//       return;
//     }
//     setErrorMessage("");
//     if (!height) {
//         setErrorMessage("Please Enter Height");
//         setBmi(null);
//         return;
//       }
//       setErrorMessage("");
//     const heightInMeters = height / 100;
//     const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBmi(calculatedBMI);
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "20px",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
//           backgroundColor: "pink",
//           width: "300px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ color: "green" }}>BMI CALCULATOR</h2>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Weight:</label>
//           <input
//             type="number"
//             placeholder="Weight in kg"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "8px",
//               marginTop: "5px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label>Height:</label>
//           <input
//             type="number"
//             placeholder="Height in cm"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             style={{
//               width: "100%",
//               padding: "8px",
//               marginTop: "5px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <button
//           onClick={calculateBMI}
//           style={{
//             padding: "10px",
//             backgroundColor: "tomato",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Calculate BMI
//         </button>
//         {errorMessage && (
//           <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
//         )}
//         {bmi && (
//           <p style={{ marginTop: "10px", fontWeight: "bold" }}>
//             Your BMI: {bmi}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BMICalculator;