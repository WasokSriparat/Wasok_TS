// 1.1
let employees:[number,string,number,number,number,string][];
employees=[
    [1001,"Kongpop",5,20000,0,""],
    [1002,"Wasok",3,30000,0,""],
    [1003,"Tanad",1,15000,0,""],
    [1004,"Jr",4,35000,0,""],
    [1005,"Bas",6,50000,0,""]
];

// 1.2
employees.forEach((e)=>{

    if(e[2]<2){
        e[4] = e[3] * 0;
    }else if(e[2]<4){
        e[4] = e[3] * 1;
    }else if(e[2]<6){
        e[4] = e[3] * 2;
    }else{
        e[4] = e[3] * 3;
    }

    if(e[2]<4){
        e[5] = "rice Cooker";
    }else{
        e[5] = "Microwave Oven";
    }

    console.log("====================================");
    console.log(`ID: ${e[0]}`);
    console.log(`Name: ${e[1]}`);
    console.log(`WorkYear: ${e[2]}`);
    console.log(`Salary: ${e[3].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`);
    console.log(`Bonus: ${e[4].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`);
    console.log(`Gift: ${e[5]}`);
    console.log("====================================");
});