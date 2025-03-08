// import { Routes, Route } from "react-router-dom";
// import SignUp from "./component/SignUp1";

// import Login from "./component/Login";
// import HomePage from "./component/pages/HomePage";

// function App() {
//   return (
//     <div className="App">
//     {/* <Navbar/> */}
//     <HomePage/>
//       <Routes>
//       <Route path="/" element={<HomePage />} />
        
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp1";  // Ensure correct folder name
import Login from "./component/Login";
// import HomePage from "./component/HomePage"; // Ensure correct path

function App() {
  return (
    <div className="App">
      <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;