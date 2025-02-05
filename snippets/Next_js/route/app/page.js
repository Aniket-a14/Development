"use client"

export default function Home() {
  const handleclick = async () => {
    let data = {
      name: "Aniket",
      profile: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res)
  };
  return (
    <div>
      I am a div
      <button onClick={handleclick}>Click me</button>
    </div>
  );
}
