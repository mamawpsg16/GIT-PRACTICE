const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
});

console.log(blob,'blob');
console.log(file,'file');
console.log(JSON.stringify(obj, null, 2),'JSON.stringify(obj, null, 2)');

const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

function reader(file, callback) {
    const fr = new FileReader();
    fr.onload = () => callback(null, fr.result);
    fr.onerror = (err) => callback(err);
    fr.readAsText(file);
  }

  
// filepicker.addEventListener("change", (event) => {
//     const file = event.target.files[0]
//     reader(file, (err, res) => {
//         console.log(err,res); // Base64 `data:image/...` String result.
//     });
  
// });


filepicker.addEventListener("change", (event) => {
    const file = event.target.files[0]
    const reader = new FileReader();
    reader.onload = (evt) => {
        if(reader.readyState == 2){
            console.log(evt.target.result,'event');
        }
        console.log(reader,'reader');
    };
    reader.readAsText(file);
    //   for (const file of files) {
    //     const li = document.createElement("li");
    //     li.textContent = file.name;
    //     output.appendChild(li);
    //   }
});



