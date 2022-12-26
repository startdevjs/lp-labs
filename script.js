async function requestSignature(ev) {
  ev.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch("https://lp-api.startdevjs.com.br/signature", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });
  alert("Inscrição realizada com sucesso");
}
