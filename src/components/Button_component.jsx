import React from "react";

const Button_component = (props) => {
  const btn_text = props.btn_text;
  const href = props.href;
  const text_color = props.text_color;
  const target = props.target;
  return (
    <a
      href={href}
      className={`border uppercase font-bold border-yellow-400 rounded shadow-[inset_0_1px_2px_rgba(0,0,0/0.5)] shadow-yellow-100 hover:shadow-none px-2 py-1 ${text_color}`}
      target={target}
    >
      {btn_text}
    </a>
  );
};

Button_component.defaultProps = {
  text_color: "text-white",
  target: "",
};

export default Button_component;
