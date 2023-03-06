import React from "react";

export const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="story-note">
    <div>{children}</div>
  </div>
);
