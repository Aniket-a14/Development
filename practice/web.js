function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    document.querySelector(".duration").innerHTML = duration;

    document.querySelector(".title").innerHTML = title;

    if (views >= 1000000) views = views / 1000000 + "M";
    else if (views >= 1000) views = views / 1000 + "K";

    document.querySelector(".details").innerHTML = cName + " . " + views + " views . " + monthsOld + " months ago";
    
    document.querySelector(".image").src = thumbnail;
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"); 