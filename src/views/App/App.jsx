import Home from "../../pages/Home";
import { FilterCareerLevel } from "../../pages/FilteredCareerLevel";
// import JobDescription from "../../pages/JobDescription";


import { Routes , Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-level/:level" element={<FilterCareerLevel />} />
        {/* <Route path="/:company" element={<JobDescription />} /> */}
      </Routes>
    </>
  )
}

export default App