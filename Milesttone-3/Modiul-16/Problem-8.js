const printObjectDetails = (obj,loopType) => {

    if (loopType !== "forin" && loopType !== "forofentries" && loopType !== "entriesDestructure") {
        return "Invalid";
    }


    let addArr = [];

    if (loopType === "forin"){
        for (const key in obj){
            addArr.push(`${key}: ${obj[key]}`)
        }
    }

    let entriesObj = Object.entries(obj)

    if(loopType ==="forofentries"){
        
        for(entry of entriesObj){
            addArr.push(`${entry[0]}: ${entry[1]}`)
        }
    }

    if(loopType === "entriesDestructure"){
        for(const [key,value] of entriesObj){
            addArr.push (`${key} : ${value}`)
        }
    }

    return addArr;
}

console.log(printObjectDetails({fruit: "Mango", price: 50}, "entriesDestructure"));