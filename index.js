let items = [
    {
        name: "McHenry Graffiti",
        image: "images/mchenry-graffiti.png",
        desc: "description placeholder",
        x: 55,
        y: 45
    },
    {
        name: "McHenry Sticker",
        image: "images/mchenry-sticker.png",
        desc: "description placeholder",
        x: 55,
        y: 40
    },
    {
        name: "Merrill Magazine",
        image: "images/merril-magazine.png",
        desc: "description placeholder",
        x: 80,
        y: 23
    },
    {
        name: "Porter Flyer",
        image: "images/porter-flyer.png",
        desc: "description placeholder",
        x: 25,
        y: 45
    }
];

function updPage(name, desc, img) {
    $("#desc").text(desc);
    $("#name").text(name);
    $("#thumb").attr("src", img);
}

let count = 0;

function showItem(index) {
    count = index;
    let thC = items[count];
    updPage(thC.name, thC.desc, thC.image);

    $(".point").removeClass("active");
    $(`.point[data-index="${count}"]`).addClass("active");
}

// Create a clickable point on the map for each item using its x/y coordinates
items.forEach(function (item, index) {
    let $point = $("<button>", {
        class: "point",
        "data-index": index,
        title: item.name,
        "aria-label": item.name
    }).css({
        left: item.x + "%",
        top: item.y + "%"
    });

    $point.click(function () {
        showItem(index);
    });

    $("#map-wrapper").append($point);
});

// Show the first artifact on page load
showItem(0);

$("#left").click(function () {
    if (count > 0) {
        showItem(count - 1);
    }
});

$("#right").click(function () {
    if (count < items.length - 1) {
        showItem(count + 1);
    }
});


$("#title").click(function () {
    $(this).fadeOut(1500);
    setTimeout(function () {
        $(this).toggleClass("invis");
    }, 1500)

})