const fs = require('fs');

// read file //

fs.readFile("./docs/titled.txt", function(error, data){
  if(error){
    console.log(`Oops!, Something went wrong`);
  }
  else{
    console.log(data.toString());
  }
})

// write file //

let content = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.';

fs.writeFile("./docs/titled.txt", content, function(){
  console.log("successfully changed");
})

// check directories exist //
if(fs.existsSync("./images")){
  console.log("folder already exists")
}
else{
    fs.mkdir("./images", (err, data) =>{
      if(err){
        console.log("oops! error")
      }
      else{
        console.log(data);
      }
    })
}

// delete files //
fs.unlink("./docs/title.txt", (onError, onSuccess)=>{
  if(onError){
    console.log("oops! error");
  }
  else{
    console.log("file deleted!");
  }
})