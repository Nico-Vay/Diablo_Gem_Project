'use strict';




const list = document.querySelector("#list");


//Die Datenbank
let gems = {
    "gems": [
        {
            "1": {
                "gem/trickshot_gem": {
                    "name": "Trickshot Gem",
                    "platin": 649,
                    "rating": "1"
                },
                "gem/everlasting_torment": {
                    "name": "Everlasting Torment",
                    "platin": 549,
                    "rating": "1"
                },
                "gem/the_black_rose": {
                    "name": "The Black Rose",
                    "platin": 508,
                    "rating": "1"
                },
                "gem/chained_death": {
                    "name": "Chained Death",
                    "platin": 547,
                    "rating": "1"
                },
                "gem/berserkers_eye": {
                    "name": "Berserker's Eye",
                    "platin": 593,
                    "rating": "1"
                },
                "gem/mocking_laughter": {
                    "name": "Mocking Laughter",
                    "platin": 542,
                    "rating": "1"
                },
                "gem/zod_stone": {
                    "name": "Zod Stone",
                    "platin": 626,
                    "rating": "1"
                },
                "gem/caarsens_invigoration": {
                    "name": "Caarsen's Invigoration",
                    "platin": 650,
                    "rating": "1"
                },
                "gem/defiant_soul": {
                    "name": "Defiant soul",
                    "platin": 560,
                    "rating": "1"
                },
                "gem/freedom_and_devotion": {
                    "name": "Freedom and Devotion",
                    "platin": 558,
                    "rating": "1"
                },
                "gem/respite_stone": {
                    "name": "Respite Stone",
                    "platin": 600,
                    "rating": "1"
                },
                "gem/seleds_weakening": {
                    "name": "Seled's Weakening",
                    "platin": 584,
                    "rating": "1"
                },
                "gem/pain_of_subjugation": {
                    "name": "Pain of Subjugation",
                    "platin": 614,
                    "rating": "1"
                },
                "gem/nightmare_wreath": {
                    "name": "Nightmare Wreath",
                    "platin": 563,
                    "rating": "1"
                },
                "gem/los_focused_gaze": {
                    "name": "Lo's Focused Gaze",
                    "platin": 605,
                    "rating": "1"
                },
                "gem/exigent_echo": {
                    "name": "Exigent Echo",
                    "platin": 780,
                    "rating": "1"
                },
                "gem/blessed_pebble": {
                    "name": "Blessed Pebble",
                    "platin": 591,
                    "rating": "1"
                },
                "gem/heartstone": {
                    "name": "Heartstone",
                    "platin": 534,
                    "rating": "1"
                },
                "gem/eye_of_the_unyielding": {
                    "name": "Eye Of The Unyielding",
                    "platin": 750,
                    "rating": "1"
                },
                "gem/unrefined_passage": {
                    "name": "Unrefined Passage",
                    "platin": 583,
                    "rating": "1"
                }
            },
            "2": {
                "gem/power_and_command": {
                    "name": "Power & Command",
                    "platin": 4042,
                    "rating": "2"
                },
                "gem/the_hunger": {
                    "name": "The Hunger",
                    "platin": 2886,
                    "rating": "2"
                },
                "gem/bloody_reach": {
                    "name": "Bloody Reach",
                    "platin": 2307,
                    "rating": "2"
                },
                "gem/cutthroats_grin": {
                    "name": "Cutthroats Grin",
                    "platin": 2365,
                    "rating": "2"
                },
                "gem/lightning_core": {
                    "name": "Lightning Core",
                    "platin": 2823,
                    "rating": "2"
                },
                "gem/followers_burden": {
                    "name": "Follower's Burden",
                    "platin": 3521,
                    "rating": "2"
                },
                "gem/unity_crystal": {
                    "name": "Unity Crystal",
                    "platin": 2418,
                    "rating": "2"
                },
                "gem/battleguard": {
                    "name": "Battleguard",
                    "platin": 2192,
                    "rating": "2"
                },
                "gem/the_abiding_curse": {
                    "name": "The Abiding Curse",
                    "platin": 2100,
                    "rating": "2"
                },
                "gem/volatility_shard": {
                    "name": "Volatility Shard",
                    "platin": 2164,
                    "rating": "2"
                },
                "gem/kir_sling": {
                    "name": "Kir Sling",
                    "platin": 2100,
                    "rating": "2"
                },
                "gem/pain_clasp": {
                    "name": "Pain Clasp",
                    "platin": 7169,
                    "rating": "2"
                },
                "gem/vipers_bite": {
                    "name": "Viper's Bite",
                    "platin": 5900,
                    "rating": "2"
                },
                "gem/ironbane": {
                    "name": "Ironbane",
                    "platin": 2076,
                    "rating": "2"
                },
                "gem/mothers_lament": {
                    "name": "Mother's Lament",
                    "platin": 13500,
                    "rating": "2"
                },
                "gem/igneous_scorn": {
                    "name": "Igneous Scorn",
                    "platin": 3205,
                    "rating": "2"
                }
            },
            "2_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 45430,
                    "rating": "2/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 24523,
                    "rating": "2/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 44780,
                    "rating": "2/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 27850,
                    "rating": "2/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 39713,
                    "rating": "2/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 24631,
                    "rating": "2/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 23835,
                    "rating": "2/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 61907,
                    "rating": "2/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 27577,
                    "rating": "2/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 39551,
                    "rating": "2/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 24000,
                    "rating": "2/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 64000,
                    "rating": "2/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 31749,
                    "rating": "2/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 43698,
                    "rating": "2/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 64000,
                    "rating": "2/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 56243,
                    "rating": "2/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 20000,
                    "rating": "2/5"
                }
            },
            "3_5": {
                "gem/bottled_hope": {
                    "name": "Bottled Hope",
                    "platin": 64730,
                    "rating": "3/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 41000,
                    "rating": "3/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 79833,
                    "rating": "3/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 27827,
                    "rating": "3/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 75913,
                    "rating": "3/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 42496,
                    "rating": "3/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 80224,
                    "rating": "3/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 77875,
                    "rating": "3/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 37313,
                    "rating": "3/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 69703,
                    "rating": "3/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 37574,
                    "rating": "3/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 66466,
                    "rating": "3/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 42195,
                    "rating": "3/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 65547,
                    "rating": "3/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 93000,
                    "rating": "3/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 75354,
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
                    "platin": 85000,
                    "rating": "4/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 110400,
                    "rating": "4/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 130000,
                    "rating": "4/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 80000,
                    "rating": "4/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 90000,
                    "rating": "4/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 111360,
                    "rating": "4/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 93670,
                    "rating": "4/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 95000,
                    "rating": "4/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 54000,
                    "rating": "4/5"
                },
                "gem/maw_of_the_deep": {
                    "name": "Maw Of The Deep",
                    "platin": 100000,
                    "rating": "4/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 50000,
                    "rating": "4/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 120000,
                    "rating": "4/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 67737,
                    "rating": "4/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 190771,
                    "rating": "4/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 120000,
                    "rating": "4/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 90000,
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
                    "platin": 100000,
                    "rating": "5/5"
                },
                "gem/phoenix_ashes": {
                    "name": "Phoenix Ashes",
                    "platin": 190000,
                    "rating": "5/5"
                },
                "gem/bsj": {
                    "name": "Blood-Soaked Jade",
                    "platin": 160000,
                    "rating": "5/5"
                },
                "gem/chip_of_stoned_flesh": {
                    "name": "Chip of Stoned Flesh",
                    "platin": 98000,
                    "rating": "5/5"
                },
                "gem/echoing_shade": {
                    "name": "Echoing Shade",
                    "platin": 90000,
                    "rating": "5/5"
                },
                "gem/howlers_call": {
                    "name": "Howler's Call",
                    "platin": 150000,
                    "rating": "5/5"
                },
                "gem/zwensons_haunting": {
                    "name": "Zwenson's Haunting",
                    "platin": 110000,
                    "rating": "5/5"
                },
                "gem/seeping_bile": {
                    "name": "Seeping Bile",
                    "platin": 97000,
                    "rating": "5/5"
                },
                "gem/blessing_of_the_worthy": {
                    "name": "Blessing of the Worthy",
                    "platin": 85000,
                    "rating": "5/5"
                },
                "gem/maw_of_the_deep": { // B
                    "name": "Maw Of The Deep",
                    "platin": 154000,
                    "rating": "5/5"
                },
                "gem/hellfire_fragment": {
                    "name": "Hellfire Fragment",
                    "platin": 90000,
                    "rating": "5/5"
                },
                "gem/starfire_shard": {
                    "name": "Starfire Shard",
                    "platin": 140000,
                    "rating": "5/5"
                },
                "gem/spiteful_blood": {
                    "name": "Spiteful Blood",
                    "platin": 90000,
                    "rating": "5/5"
                },
                "gem/frozen_heart": {
                    "name": "Frozen Heart",
                    "platin": 240000,
                    "rating": "5/5"
                },
                "gem/gloom_cask": {
                    "name": "Gloom Cask",
                    "platin": 180000,
                    "rating": "5/5"
                },
                "gem/void_spark": {
                    "name": "Void Spark",
                    "platin": 120000,
                    "rating": "5/5"
                },
                "gem/concentrated_will": {
                    "name": "Concentrated Will",
                    "platin": 160000,
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

