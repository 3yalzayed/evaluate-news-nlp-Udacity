function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const localhost = "http://localhost:8081/addURL";
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");

  // Function to POST data
  const postData = async (url = "", data = {}) => {
    console.log(data);
    let res = await fetch(localhost, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById("results").innerHTML = res.message;
        document.getElementById("subjectivity").innerHTML =
          res.body.subjectivity;
        document.getElementById("confidence").innerHTML = "the confidence " +res.body.confidence;
        document.getElementById("agreement").innerHTML = "the agreement " +res.body.agreement;
        document.getElementById("irony").innerHTML = "the irony " +res.body.irony;
        document.getElementById("score").innerHTML = "the score " + res.body.score;
      });
    try {
      let newData = await res.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };
}

export { handleSubmit };
