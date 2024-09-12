// import React, { useEffect, useState } from "react"

// function CatFacts() {
//     const [data, setData] = useState(null)
//     let getData = async () => {
//         let response = await fetch("https://catfact.ninja/breeds")
//         response = await response.json();
//         // console.log(typeof (response['data']))
//         setData(response['data'])
//         console.log("Data: ", data)

//     }
//     useEffect(() => {
//         getData();
//     },[])
//     return (<>
//         {data ? (<>
//             <h2>data Fetched Sucessfully</h2>
//             {data.map((item,index) => (
//                 <ul key={index}>
//                     <li>Breed Name :{item.breed}</li>
//                     <li>Country Of Origin:{item.country}</li>
//                     <li>coat:{item.coat}</li>
//                     <li>pattern :{item.pattern}</li>
//                 </ul>))}
//         </>) : (<>


//             <p>Loading....</p>
//             <p>fetching Data From API</p>
//         </>)}


//     </>)

// }

// export default CatFacts


// {/* "breed": "Abyssinian",
//       "country": "Ethiopia",
//       "origin": "Natural/Standard",
//       "coat": "Short",
//       "pattern": "Ticked" */}



import React, { useEffect, useState } from "react";

function CatFacts() {
  const [data, setData] = useState(null);

  let getData = async () => {
    try {
      let response = await fetch("https://catfact.ninja/breeds");
      response = await response.json();
      setData(response.data);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <h2>Data Fetched Successfully</h2>
          {data.map((item, index) => (
            <ul key={index}>
              <li>Breed Name: {item.breed}</li>
              <li>Country Of Origin: {item.country}</li>
              <li>Coat: {item.coat}</li>
              <li>Pattern: {item.pattern}</li>
            </ul>
          ))}
        </>
      ) : (
        <>
          <p>Loading....</p>
          <p>Fetching Data From API</p>
        </>
      )}
    </>
  );
}

export default CatFacts;
