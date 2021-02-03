function getLIarrayFromSection(section){
    if(section.className.includes("--collapsed")){
        $(section).children("h3").children().click();
        section = $("#" + $(section).attr('id'))[0];
    }
    return $(section).children("ul").children().toArray();
}

function countTime(section){
    let minutes = 0;
    let seconds = 0;
    const liArray = getLIarrayFromSection(section);
    liArray.forEach(element => {
        let text = $(element).children("a").children(".classroom-toc-item__content").children(".t-12").children("span").text();
        if(text !== ""){
            if(text.includes("m")){
                minutes += Number(text.split("m")[0]);
                seconds += parseInt(text.split("m")[1])
            } else {
                seconds += parseInt(text);
            }
        }
        
    })
    minutes += Math.floor(seconds/60);
    seconds = seconds % 60;
    return minutes + "m" + seconds + "s";
}

$(".classroom-layout-sidebar-body").children().toArray().forEach(element => {
    $("<span style=\"margin-right:5px;\" class=\"t-12\">" + countTime(element) + "</span>").insertAfter($(element).children("h3").children("button").children(".t-14"));
});