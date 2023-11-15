import { Box } from "@mui/material";

const LoginTextField = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        borderRadius: "0.75rem",
        backgroundColor: "var(--color-primary-light-2)",
        padding: "0rem 1.5rem",
        ...props.sx
      }}
    >
      <span
        style={{
          color: "var(--color-info-dark)",
          fontSize: "1rem",
        }}
        class="material-symbols-outlined"
      >
        {props.icon}
      </span>
      <input
        name={props.name}
        ref={props.inputRef}
        style={{
          outline: "none",
          border: "none",
          background: "none",
          width: "100%",
          height: "3rem",
        }}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export { LoginTextField };
