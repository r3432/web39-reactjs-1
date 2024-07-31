import { useState } from "react";

const App = () => {
  const [name, setName] = useState(1);

  console.log(name);

  return (
    <>
      <h1>{name}</h1>
      <button onClick={()=> setName(name + 1)}>Increment</button>
    </>
  );
};

export default App;

// Ve Phai
// useState() -> Hook trong react, dung de dinh nghia 1 sate co ten la "name"
// useState("Web39!"); -> ("Web39!" : gia tri ban dau minh muon gan cho bien "name", khong de thi undefine!

// Ve Trai
// name: Ten state tu minh dinh nghia
// setName: Phuong thuc de minh co the cap nhat lai state "Name", do minh tu dinh nghia
