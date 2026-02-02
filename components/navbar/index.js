export default function NavBar() {
  return (
    <div style = {{
        padding: "20px",
        height: "200px",
        width: "450px",
        backgroundColor: "rgba(170, 170, 170, 1)",
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    }}>
        <div>@username</div>
        <div>comment 1 lorem ipsum yadi yadi yadi so..........................</div>
        <div style={{
            marginLeft: "auto",
            fontStyle: "italic"
        }}>dd/mm/yyyy - 00:00:00</div>
        <button style={{
            width: "100px",
            height: "100px",
            marginLeft: "auto"
        }}>Reply</button>
    </div>
  );
}