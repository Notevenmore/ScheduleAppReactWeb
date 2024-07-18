function storeData(url, redirectUrl, sendData) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(sendData),
  })
    .then((response) => response.json())
    .then(() => (window.location.href = redirectUrl))
    .catch((error) => console.error("Error: ", error));
}
export default storeData;
