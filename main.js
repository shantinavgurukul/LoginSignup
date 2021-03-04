const readlineSync = require("readline-sync")
const fs = require("fs")
const userData = require('./userDetails.json')
var user = readlineSync.question("what you want to do sign-up/login=")

if(user == "S" || user == "s"){
    var user_name = readlineSync.question("Enter the name=")
    var user_password = readlineSync.question("Enter the password=")
    var DOB = readlineSync.question("Enter the DOB = ")
    var Gender = readlineSync.question("Enter the Gender = ")
    var Profile = readlineSync.question("Enter the profile = ")

    var user_details ={
        "name" : user_name,
        "password": user_password,
        "DOB": DOB,
        "Gender": Gender,
        "Profile": Profile
    }




    fs.readFile("./userDetails.json","utf8",(err ,data)=>{
        if(err) throw err
        let obj_data=JSON.parse(data)
        let flag=false
        for(let i =0; i<obj_data.length;i++){
            if(obj_data[i].name == user_details.name ){
                flag=true
                break;
            }
        }
        if(flag){
            console.log("Already -exit")
        }
        else{
            userData.push(user_details)
            console.log(userData)
            fs.writeFile("./userDetails.json", JSON.stringify(userData), err => {
                if(err){
                    err()
                }
                else{
                    console.log("sign up")
                }
            });
    

            }

    });

}

else if(user == "L" || user =="l"){
    
    const user_name = readlineSync.question("Enter the user new name =")
    const user_password = readlineSync.question("Enter the user new password=")

    fs.readFile("./userDetails.json","utf8",(err ,data)=>{
        if (err){
            throw err
        }
        let check =false;
        for (let i =0 ; i<userData.length;i++){
            if (user_name == userData[i].name && user_password == userData[i].password){
                check =  true;
                break;
            }
        }
        if(check){
            console.log("login successfully")
        }
        else{
            console.log("password is wrong")
            // break;
        }
        
})
}