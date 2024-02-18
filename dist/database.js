'use strict';




const list = document.querySelector("#list");


//Die Datenbank
let gems = {
    "gems": [
        {
            "1": {
                "gem/trickshot_gem": {
                    "name": "Trickshot Gem",
                    "platin": 633,
                    "rating": "1"
                },
                "gem/everlasting_torment": {
                    "name": "Everlasting Torment",
                    "platin": 753,
                    "rating": "1"
                },
                "gem/the_black_rose": {
                    "name": "The Black Rose",
                    "platin": 524,
                    "rating": "1"
                },
                "gem/chained_death": {
                    "name": "Chained Death",
                    "platin": 542,
                    "rating": "1"
                },
                "gem/berserkers_eye": {
                    "name": "Berserker's Eye",
                    "platin": 675,
                    "rating": "1"
                },
                "gem/mocking_laughter": {
                    "name": "Mocking Laughter",
                    "platin": 602,
                    "rating": "1"
                },
                "gem/zod_stone": {
                    "name": "Zod Stone",
                    "platin": 581,
                    "rating": "1"
                },
                "gem/caarsens_invigoration": {
                    "name": "Ca'arsen's Invigoration",
                    "platin": 683,
                    "rating": "1"
                },
                "gem/defiant_soul": {
                    "name": "Defiant soul",
                    "platin": 519,
                    "rating": "1"
                },
                "gem/freedom_and_devotion": {
                    "name": "Freedom and Devotion",
                    "platin": 616,
                    "rating": "1"
                },
                "gem/respite_stone": {
                    "name": "Respite Stone",
                    "platin": 609,
                    "rating": "1"
                },
                "gem/seleds_weakening": {
                    "name": "Seled's Weakening",
                    "platin": 622,
                    "rating": "1"
                },
                "gem/pain_of_subjugation": {
                    "name": "Pain of Subjugation",
                    "platin": 604,
                    "rating": "1"
                },
                "gem/nightmare_wreath": {
                    "name": "Nightmare Wreath",
                    "platin": 539,
                    "rating": "1"
                },
                "gem/los_focused_gaze": {
                    "name": "Lo's Focused Gaze",
                    "platin": 644,
                    "rating": "1"
                },
                "gem/exigent_echo": {
                    "name": "Exigent Echo",
                    "platin": 655,
                    "rating": "1"
                },
                "gem/blessed_pebble": {
                    "name": "Blessed Pebble",
                    "platin": 517,
                    "rating": "1"
                },
                "gem/heartstone": {
                    "name": "Heartstone",
                    "platin": 507,
                    "rating": "1"
                },
                "gem/eye_of_the_unyielding": {
                    "name": "Eye Of The Unyielding",
                    "platin": 655,
                    "rating": "1"
                },
                "gem/unrefined_passage": {
                    "name": "Unrefined Passage",
                    "platin": 631,
                    "rating": "1"
                }
            },
            "2": {
                "gem/power_and_command": {
                    "name": "Power & Command",
                    "platin": 3949,
                    "rating": "2"
                },
                "gem/the_hunger": {
                    "name": "The Hunger",
                    "platin": 2518,
                    "rating": "2"
                },
                "gem/bloody_reach": {
                    "name": "Bloody Reach",
                    "platin": 2211,
                    "rating": "2"
                },
                "gem/cutthroats_grin": {
                    "name": "Cutthroats Grin",
                    "platin": 2115,
                    "rating": "2"
                },
                "gem/lightning_core": {
                    "name": "Lightning Core",
                    "platin": 2562,
                    "rating": "2"
                },
                "gem/followers_burden": {
                    "name": "Follower's Burden",
                    "platin": 4449,
                    "rating": "2"
                },
                "gem/unity_crystal": {
                    "name": "Unity Crystal",
                    "platin": 2393,
                    "rating": "2"
                },
                "gem/battleguard": {
                    "name": "Battleguard",
                    "platin": 2320,
                    "rating": "2"
                },
                "gem/the_abiding_curse": {
                    "name": "The Abiding Curse",
                    "platin": 2202,
                    "rating": "2"
                },
                "gem/volatility_shard": {
                    "name": "Volatility Shard",
                    "platin": 2239,
                    "rating": "2"
                },
                "gem/kir_sling": {
                    "name": "Kir Sling",
                    "platin": 2624,
                    "rating": "2"
                },
                "gem/pain_clasp": {
                    "name": "Pain Clasp",
                    "platin": 7202,
                    "rating": "2"
                },
                "gem/vipers_bite": {
                    "name": "Viper's Bite",
                    "platin": 5804,
                    "rating": "2"
                },
                "gem/ironbane": {
                    "name": "Ironbane",
                    "platin": 2243,
                    "rating": "2"
                },
                "gem/mothers_lament": {
                    "name": "Mother's Lament",
                    "platin": 14012,
                    "rating": "2"
                },
                "gem/igneous_scorn": {
                    "name": "Igneous Scorn",
                    "platin": 2945,
                    "rating": "2"
                }
            },
            "2_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 43604,
                    "rating": "2/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 23619,
                    "rating": "2/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 50388,
                    "rating": "2/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 22422,
                    "rating": "2/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 64000,
                    "rating": "2/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 24982,
                    "rating": "2/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 37613,
                    "rating": "2/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 57129,
                    "rating": "2/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 31516,
                    "rating": "2/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 41317,
                    "rating": "2/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 19027,
                    "rating": "2/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 61079,
                    "rating": "2/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 31204,
                    "rating": "2/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 33483,
                    "rating": "2/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 64000,
                    "rating": "2/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 57308,
                    "rating": "2/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 27891,
                    "rating": "2/5"
                }
            },
            "3_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 0,
                    "rating": "3/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 47690,
                    "rating": "3/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 94801,
                    "rating": "3/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 25146,
                    "rating": "3/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 0,
                    "rating": "3/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 35621,
                    "rating": "3/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 70196,
                    "rating": "3/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 73333,
                    "rating": "3/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 35956,
                    "rating": "3/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 69703,
                    "rating": "3/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 45663,
                    "rating": "3/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 107738,
                    "rating": "3/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 35306,
                    "rating": "3/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 57050,
                    "rating": "3/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 73574,
                    "rating": "3/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 75345,
                    "rating": "3/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 28607,
                    "rating": "3/5"
                }
            },
            "4_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 106489,
                    "rating": "4/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 80000,
                    "rating": "4/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 111659,
                    "rating": "4/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 93670,
                    "rating": "4/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 190771,
                    "rating": "4/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 0,
                    "rating": "4/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 128000,
                    "rating": "4/5"
                }
            },
            "5_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/maw_of_the_deep": { // B
                    "name": "Maw Of The Deep",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 0,
                    "rating": "5/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 0,
                    "rating": "5/5"
                }
            }
        }

    ]
};

//Globale Variable die die  "garantierte" Wahrscheinlichkeit angibt
var guaranteedPercentage = 0.99;

//Methode um alle gems zu holen
function getAllGems() {
   
    return gems.gems[0];
}
//Methode um alle gems unabhänig von den Sternen in einem Array zu haben
function getAllGemsInArray() {
    let gems = [];

    //geht jedes rating durch und push jeden einzelnen Gems in das Array gems
    Object.values(getAllGems()).forEach(elem => Object.values(elem).forEach(gem => gems.push(gem)));

    return gems;
}
//Methode um alle Gems mit gewissem rating zu kriegen
function getAllGemsByRating(rating) {
    return getAllGems()[rating];
}

//Methode um Gem abhängig vom Namen zu kriegen
function getGemByName(gemName) {
    return getAllGemsInArray().find(gem => gem.name === gemName);
}

//Methode um die Gems auf index.html auszugeben
//Dabei wird der div .list neue children angehängt
function updateList() {

    //Für alle gems 
    getAllGemsInArray().forEach(elem => {
        //Erstellung eines neuen div im dokument
        var gem = document.createElement('div');
        gem.className = 'gem';
        gem.setAttribute('name', elem.name)
        gem.innerHTML =
            
            '<h1>' + elem.name + '</h1>' +
        '<h2>' +'Rating: ' + elem.rating + '</h2>' +
        '<h2> ' + 'Platin: ' + elem.platin + '</h2>' +
        '<h2> ' + 'Eternal orb: ' + (elem.platin / 10) + '</h2>' +
        '<h2> ' + 'Euro: ' + (Math.round(elem.platin / 6) / 100) + '&euro;' + '</h2>'
        //Anhängen an list
        list.appendChild(gem);
    });

    addToggle()
}

//Methode um Gems auszuwählen
function toggleMarking(element) {
    //Alle markierten Gems werden geholt
    var check = document.querySelectorAll('.marked');
    //Wenn es keinen markierten Gem gibt, wird der derzeitige markiert
    if (check.length == 0) {
        element.classList.toggle('marked');
    //Falls es schon eins gibt, wird es ausgetauscht
    } else if (check.length != 0 && check[0] != element) {
        check[0].classList.toggle('marked');
        element.classList.toggle('marked');
    } else {
        check[0].classList.toggle('marked');
    }
}

//Methode um den neuerstellten Gems die Methode toggleMarking zu geben
function addToggle() {

    //Alle elemente mit Klasse ".gem" werden geholt
    //und denen wird die Methode togglemarking hinzugefügt
    document.querySelectorAll('.gem').forEach(function (element) {
        element.addEventListener('click', function () {
            toggleMarking(this);
        });
    });
}

//Berechung des Preises und Ausgabe
function calcPrice() {
    let name = document.querySelectorAll('.marked')[0].getAttribute('name');
    let amount = document.getElementById('valueAmount').value;
    let price =( Math.round(getGemByName(name).platin / 6) / 100) * amount ;
    alert('Preis: ' + price +  ' Euro' );
    return;
}


//Methode um Seitenverlinkung zu ermöglichen
function changeSite(site) { 

    window.open(site, '_self');

}



//Methode um die Eingabe in Prozent umzurechnen
function getCurrentGemPercentage() {

    let perc = 0;

    switch (document.getElementById('quality').value) {
        case "1":
            perc = 0.75395;
            break;
        case "2":
            perc = 0.20105;
            break;
        case "2/5":
            perc = 0.03375;
            break;
        case "3/5":
            perc = 0.009;
            break;
        case "4/5":
            perc = 0.0018;
            break;
        case "5/5":
            perc = 0.00045;
            break;
        default:
            console.log("versager");
    }


    return perc;

}

//Methode, die dazu dient N für den gegebenen Prozentwert zu berechnen
//Binmialverteilung
function findN(k, pis) {
    let n = k;
    let answer = binomialCoefficient(n, k) * pis ** k * (1 - pis) ** (n - k);
    //Wird solange multipliziert, bis das Ergebnis ÜBER guaranteedPercentage liegt
    while (answer < (guaranteedPercentage )) {

        answer = 1 - getCumulativePercentages(n, k, pis);
        n = n*2;
        
    }

    //Danach wird der Wert geviertelt, bis der Wert wieder drunter liegt
    while (answer > guaranteedPercentage) {
       
        n = n - Math.floor(n / 4);
        answer = 1 - getCumulativePercentages(n, k, pis);
        
    }
    //Als letztes wird einfach erhöht, bis das erste mal über guaranteedPercentage kommt
    while (answer < guaranteedPercentage) {
        answer = 1 - getCumulativePercentages(n, k, pis);
        n++;
        
    }

    //gerundet, um sicherzugehen, dass der Wert Element der natürlichen Zahlen ist
    return Math.ceil(n);

}
//Addieren des Gegenereignis
function getCumulativePercentages(n, k, pis) {

    let cum = 0;
    for (let i = 0; i < k; i++ ) {
      cum = cum +  binomialCoefficient(n, i) * pis ** i * (1 - pis) ** (n - i);
    }

    return cum;
}

function binomialCoefficient(n, k) {

    // Checking if n and k are integer 
    if (Number.isNaN(n) || Number.isNaN(k)) {
        return NaN;
    }

    if (k < 0 || k > n) {
        return 0
    }

    if (k === 0 || k === n) {
        return 1
    }

    if (k === 1 || k === n - 1) {
        return n
    }

    let res = n;
    for (let i = 2; i <= k; i++) {
        res *= (n - i + 1) / i;
    }

    return Math.round(res);
}

//Methode Ausgabe Prozent
function calcPercentage() {

    
    let calc = findN(document.getElementById('percentage').value, getCurrentGemPercentage())
    let doc = document.getElementById('outputPerc');
    let output = document.createTextNode('Du benötigst im Durschnitt ' + calc + ' Crest.');
 

    //Wenn es schon Ausgabe gibt, soll die alte Ausgabe gelöscht werden
    if (doc.children != null) {
        doc.removeChild(doc.firstChild)
    }
   

    doc.appendChild(output);

}

