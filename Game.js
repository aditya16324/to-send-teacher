class Game {

    upadteGmaeState(bowl1){
        database.ref('/').update({
       gameState : bowl1
        });
        
      }





      gatGameState(){
        var goDataBase  = database.ref("gameState");
        goDataBase.on("value",function(data){
        gameStatefreezer = data.val();
        })
       
      }
    
    
  
}