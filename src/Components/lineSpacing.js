import React from "react";

export default function LineSpacing(props) {
  const inlineStyles = [
    { label: "line-100", value: "LINE_100" },
    { label: "line-200", value: "LINE_200" },
    { label: "line-300", value: "LINE_300" },
    { label: "line-400", value: "LINE_400" },
    { label: "line-500", value: "LINE_500" },
    { label: "line-600", value: "LINE_600" }
  ];

  return (
    <div>
      <select value={props.defaultValue} onChange={props.handleToggle}>
        {inlineStyles.map((type) => (
          <option key={type.label}>{type.label}</option>
        ))}
      </select>
    </div>
  );
}
