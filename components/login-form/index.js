export default function loginForm(){
    return (
        <div style={{
            backgroundColor: "rgba(170, 170, 170, 1)",
            width: "400px",
            height: "460px",
            margin: "50px",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
        }}>
            <img style={{
                backgroundColor: "rgba(63, 143, 193, 1)",
                width: "18rem",
                height: "11rem",
                marginBottom: "1.7rem",
            }}></img>
            <button style={{
                padding: "18px 5px",
                marginBottom: "1.7rem",
                backgroundColor: "rgba(56, 192, 102, 1)",
                borderRadius: "12px",
                width: "160px",
            }}>DM</button>
            <p style={{
                marginBottom: "1.7rem",
                color: "rgb(22,22,22)"
            }}>@username</p>
            <p style={{
                color: "rgb(22,22,22)"
            }}>bio...............</p>

        </div>
    );
}