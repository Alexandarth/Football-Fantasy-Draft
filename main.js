const searchPlayer = async function(firstName, lastName) { 
     try{
         const resp = await fetch (`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${firstName}%${lastName}`);

         const data = await resp.json();
         console.log(data.player[0]);
     }catch(err){
         console.log(err);
     }
 };


searchPlayer("Stevan","Jovetic")