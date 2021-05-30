const link = "https://picsum.photos/200/300?grayscale";
const div_style = {
  width: "33%",
  padding: "0",
  paddingBottom: "1rem",
  textAlign: "center",
  border: "1px solid black",
  borderRadius: "15px",
  fontSize: "18px"
};
const img_style = {
  width: "100%",
  borderRadius: "15px 15px 0 0"
};
export default function Cards(props) {
  return (
    <>
      <div style={div_style}>
        <img style={img_style} src={link} alt="randon" />
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
        <button href={props.link}>Watch Here!</button>
      </div>
    </>
  );
}
