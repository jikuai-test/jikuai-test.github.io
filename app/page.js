export default function Home() {
  return (
    <main>
      <div style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1>
          你有認真聽前面組別的報告嗎 :)
        </h1>
        <img src="/demo.gif" alt="Demo video" style={{
          top: "50vh"
        }} />
      </div>
    </main>
  );
}
