let items = [{
        name: "placeholder 1",
        image: "images/PlcH.png",
        desc: "first description",
        location: 0
    },
    {
        name: "placeholder 2",
        image: "images/PlcH.png",
        desc: "second description",
        location: 0
    },
    {
        name: "placeholder 3",
        image: "images/PlcH.png",
        desc: "third description",
        location: 0
    }];
   


function updPage(name, desc, img) { //location will be added later
    $("#desc").text(desc);
    $("#name").text(name);
    $("#thumb").attr("src", img);

};

let count = 0;

$("#left").click(function(){
    if (count > 0) {
        count-=1;
        let thC = items[count-1];
        updPage(thC.name, thC.desc, thC.image);
    }
});

$("#right").click(function(){
    if (count < items.length) {
        count++;
        let thC = items[count-1];
        updPage(thC.name, thC.desc, thC.image);


    }
});