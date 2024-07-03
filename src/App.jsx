import Student from "./Student.jsx";

function App() {

  return (
    <>
      <Student name="spongebob" age="30" isStudent={true} />
      <Student name="Patrick" age={32} isStudent={false} />
      <Student name="Henry" age={21} isStudent={true} />
      <Student />
    </>
  );

}


export default App



