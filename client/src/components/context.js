import React, { createContext, useState } from "react";

export const MessageContext = createContext();

function context({ children }) {
  return <MessageContext.Provider>{children}</MessageContext.Provider>;
}

export default context;
