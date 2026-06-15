"use client";
// "use client";

// import { createContext, useContext, useState } from "react";

// const FormSubmitContext = createContext(null);

// export const FormSubmitProvider = ({ children }) => {
//   const [canAccessThankYou, setCanAccessThankYou] = useState(false);

//   return (
//     <FormSubmitContext.Provider
//       value={{ canAccessThankYou, setCanAccessThankYou }}
//     >
//       {children}
//     </FormSubmitContext.Provider>
//   );
// };

// export const useFormSubmit = () => {
//   return useContext(FormSubmitContext);
// };

import { createContext, useContext, useState } from "react";

const FormSubmitContext = createContext(null);

export const FormSubmitProvider = ({ children }) => {
  const [canAccessThankYou, setCanAccessThankYou] = useState(false);

  const grantAccess = () => {
    sessionStorage.setItem("thankyou_access", "1");
    setCanAccessThankYou(true);
  };

  const revokeAccess = () => {
    sessionStorage.removeItem("thankyou_access");
    setCanAccessThankYou(false);
  };

  const syncAccess = () => {
    const allowed = sessionStorage.getItem("thankyou_access") === "1";
    setCanAccessThankYou(allowed);
    return allowed;
  };

  return (
    <FormSubmitContext.Provider
      value={{
        canAccessThankYou,
        grantAccess,
        revokeAccess,
        syncAccess,
      }}
    >
      {children}
    </FormSubmitContext.Provider>
  );
};

export const useFormSubmit = () => useContext(FormSubmitContext);
