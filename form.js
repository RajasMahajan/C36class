class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game!!!");
        title.position(530,100);

        var input=createInput("Name");
        var button=createButton("PLAY");
        input.position(530,260);
        button.position(530,300);
        
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount=playerCount+1;
        player.updateCount(playerCount);
        player.update(name);

        var greeting=createElement('h3');
        greeting.html("Welcome"+name);
        greeting.position(550,200);
        });
    }
}