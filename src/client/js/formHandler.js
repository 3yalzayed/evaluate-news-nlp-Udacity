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
    });

    try {
      let newData = await res.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };
  postData(localhost, { url: formText }).then(function (res) {
    console.log(res);
    document.getElementById("results").innerHTML = res.message;     
  });
}

export { handleSubmit };
