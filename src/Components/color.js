export default function CustomColors(props) {
  const colorStyles = [
    { label: "red-bg", style: "redBackground" },
    { label: "green-bg", style: "greenBackground" }
  ];

  return (
    <>
      {colorStyles.map((type) => (
        <button
          key={type.label}
          onMouseDown={(e) => {
            e.preventDefault();
            props.handleToggle(type.style);
          }}
        >
          {type.label}
        </button>
      ))}
    </>
  );
}
