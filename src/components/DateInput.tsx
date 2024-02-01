import React, { CSSProperties, ComponentProps } from "react";
import styled from "styled-components";

type inputProps = ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: inputProps) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};

export default DateInput;

// Styles

const generalstyle: CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) 0.75rem ",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalstyle,
};
const inputStyle: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalstyle,
};