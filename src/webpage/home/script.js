function follow(mouse_position) {
    var ghost = document.getElementById("animated_ghost_emoji_container");
    ghost.style.left = mouse_position.pageX + 'px';
    ghost.style.top = mouse_position.pageY + 'px';
    ghost.style.transition = "all 2s linear 0s";
}

function show_ghost_message_popup() {
    const messages = [ "Hello!", "Hi!", "Greetings!", "Welcome!", "Check one of the contents above!" ];
    const random_number = Math.floor(Math.random() * messages.length);
    var ghost_message = document.getElementById("ghost_message_popup");

    ghost_message.innerHTML = messages[random_number];
    ghost_message.style.margin = "0 0 -20px 60px";
    ghost_message.style.padding = "15px";
    ghost_message.style.backgroundColor = "black";
    ghost_message.style.color = "white";
    ghost_message.style.borderRadius = "10px";
    ghost_message.style.position = "relative";
    ghost_message.style.textAlign = "center";
    ghost_message.style.boxSizing = "border-box";
    ghost_message.style.opacity = "1";
    ghost_message.style.transition = "all 0.25s linear 0s";

    setTimeout(hide_ghost_message_popup, 3000);
}

function hide_ghost_message_popup() {
    var ghost_message = document.getElementById("ghost_message_popup");
    
    ghost_message.style.borderRadius = "100%";
    ghost_message.style.opacity = "0";
    ghost_message.style.transition = "all 0.75s linear 0s";

    setTimeout(show_ghost_message_popup, 2000);
}

setTimeout(show_ghost_message_popup, 3000); // Launch automatically
document.onmousemove = follow;
