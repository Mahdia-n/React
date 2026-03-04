import Certificate from "./Certificate"
import Component from "./component"
function App() {
  

  return (
    <>
      <div>
        <Component name="Mahdia" lastName="Noori"/>
        <Component name="Ali" lastName="Ahmadi"/>
        <Component name="Farzana" lastName="Arefi"/>
        <Certificate name="Mahdia" label="React Basics" value="A+"/>
        <Certificate name="Ali" label="JavaScript Fundamentals" value="B+"/>
        <Certificate name="Farzana" label="HTML & CSS Mastery" value="A-"/>

        <Component name="student" ></Component>
      </div>
    </>
  )
}

export default App
