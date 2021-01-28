function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const url = "http://localhost:8081/add-url";

  console.log("::: Form Submitted :::");

  // Function to POST data
  const postData = async (url = "", data = {}) => {
    console.log(data);
    let res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      let newData = await res.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };
  postData(url, { url: formText }).then(function (res) {
    console.log(res);
    document.getElementById("score_tag").innerText = res.score_tag;
    document.getElementById("agreement").innerText = res.agreement;
    document.getElementById("subjectivity").innerText = res.subjectivity;
    document.getElementById("irony").innerText = res.irony;
    document.getElementById("confidence").innerText = res.confidence;
  });
}

export { handleSubmit };
