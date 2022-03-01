const searchPlayer = async function (firstName, lastName) {
  try {
    const resp = await fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${firstName}%${lastName}`
    );

    const data = await resp.json();
    console.log(data.player[0]);
  } catch (err) {
    console.log(err);
  }

  //strCutout slika
  //dateBorn
  //idPlayer
  //strHeight
  //strWeight
  //strPlayer
  //sstrPosition
  //strSigning cena
  //strTeam
  //strNationality
};

searchPlayer('Neymar', '');
