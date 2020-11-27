class Game{

    constructor(){}
    readState()
    {
        var gameStateRef=database.ref('gamestate');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.readCount();
            form=new Form()
            form.display();
        }
    }
}