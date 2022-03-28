const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    
    fetch(url).then((res) => {
        console.log(res);

        if (res.status != "200") {
            pokeImage("./img/pokeball_not.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) { 
            let text="";
            //image
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //types
            text = text+"TYPE 1: "+ data.types[0].type.name;
            if(data.types.length >1)
            {
                text = text+"\nTYPE 2: "+ data.types[1].type.name;
            }
            //stats
            text = text+"\nHP: "+ data.stats[0].base_stat;
            text = text+"\nATTACK: "+ data.stats[1].base_stat;
            text = text+"\nDEFENCE: "+ data.stats[2].base_stat;
            text = text+"\nSPECIAL ATTACK: "+ data.stats[3].base_stat;
            text = text+"\nSPECIAL DEFENCE: "+ data.stats[4].base_stat;
            text = text+"\nSPEED: "+ data.stats[5].base_stat;
            pokeInfo(text);
            //moves
            text=""
            for(var i=0;i<data.moves.length;i++)
            {
                text=text+data.moves[i].move.name+"\n";
            }
            pokeMoves(text);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeInfo = (text) => {
    const pokeinfo = document.getElementById("pokeInf").innerHTML=text;
}

const pokeMoves = (text) => {
    const pokeinfo = document.getElementById("pokeMoves").innerHTML=text;
}