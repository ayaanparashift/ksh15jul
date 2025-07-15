// "use client";
// import React, { useState, useEffect } from "react";
// import Main from "./Main";
// import TabLineHead from "../Heading/TabLineHead";

// const Parent = ({ staticData }) => {
//   const [acbtn, setAcBtn] = useState("Case Studies");
//   const todos = staticData[acbtn] || [];
//   const [activeSidebar, setActiveSidebar] = useState(
//     todos[0] ? todos[0].id : null
//   );

//   useEffect(() => {
//     setActiveSidebar(todos[0] ? todos[0].id : null);
//   }, [todos]);

//   return (
//     <div className="bg-[url(/spotlightbg.webp)] bg-cover bg-no-repeat bg-center">
//       <div className="flex items-center justify-center fix12 h-fit">
//         <div className="flex flex-col justify-start w-full py-[75px] h-full">
//           <TabLineHead
//             acbtn={acbtn}
//             setAcBtn={setAcBtn}
//             heading={"Spotlight"}
//           />
//           <div className="flex flex-col flex-grow min-h-[300px]">
//             <Main
//               todos={todos}
//               acbtn={acbtn}
//               activeSidebar={activeSidebar}
//               setActiveSidebar={setActiveSidebar}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parent;

"use client";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import TabLineHead from "../Heading/TabLineHead";

const Parent = ({ staticData }) => {
  const [acbtn, setAcBtn] = useState("Case Studies");
  const [todos, setTodos] = useState(staticData[acbtn] || []);
  const [activeSidebar, setActiveSidebar] = useState(null);

  useEffect(() => {
    setTodos(staticData[acbtn] || []);
  }, [acbtn, staticData]);

  useEffect(() => {
    if (todos.length > 0) {
      setActiveSidebar(todos[0].id); // Ensure first item is set
    }
  }, [todos]);

  return (
    <div className="bg-[url(/spotlightbg.webp)] min-h-screen bg-cover bg-no-repeat bg-center">
      <div className="flex items-center justify-center fix12 h-fit">
        <div className="flex flex-col justify-start w-full py-[75px] h-full">
          <TabLineHead
            acbtn={acbtn}
            setAcBtn={setAcBtn}
            heading={"Spotlight"}
          />
          <div className="flex flex-col flex-grow min-h-[300px]">
            <Main
              todos={todos}
              acbtn={acbtn}
              activeSidebar={activeSidebar}
              setActiveSidebar={setActiveSidebar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
