let breathBall = document.getElementById('breath-ball');
let birdsSound = document.getElementById('birds-sound');
let seaSound = document.getElementById('sea-sound');
let relaxSound = document.getElementById('relax-sound');

let rewards = [];
let rewardList = document.getElementById('reward-list');
let breathCount = 0;

let exerciseScreen = document.getElementById('exercise-screen');
let menu = document.getElementById('menu');
let levels = document.getElementById('levels');

let level1 = document.getElementById('level1');
let level2 = document.getElementById('level2');
let level3 = document.getElementById('level3');

const exercises = {
  perushengitys: {
    title: "Perushengitysrytmi-harjoitus",
    description: "Hengitä sisään 4 sekuntia, ulos 4 sekuntia. Toista useita kertoja tasapainon ja rauhan saavuttamiseksi."
  },
  '478': {
    title: "Rauhoittava 4-7-8-hengitystekniikka",
    description: "Hengitä sisään 4 sekuntia, pidätä 7 sekuntia ja hengitä ulos 8 sekuntia. Tämä auttaa stressin ja ahdistuksen lievittämisessä."
  },
  musiikki: {
    title: "Rytmitetty musiikkihengitys",
    description: "Valitse ääniraita ja hengitä musiikin rytmissä. Tämä harjoitus auttaa syventämään rentoutumista musiikin tahdissa."
  },
  stressi: {
    title: "Stressin vapauttava syvähengitys",
    description: "Kuvittele hengittäväsi sisään positiivista energiaa ja ulos hengittäessäsi vapautat stressiä."
  },
  keho: {
    title: "Hengitys ja kehotietoisuus",
    description: "Tunne hengityksesi virtaus kehossasi ja keskity siihen, miltä hengitys tuntuu eri kehon osissa."
  }
};

function startExercise(exerciseType) {
  // Näytä harjoituksen ohjeet
  document.getElementById('exercise-title').innerText = exercises[exerciseType].title;
  document.getElementById('exercise-description').innerText = exercises[exerciseType].description;
  
  // Piilota valikko ja näytä harjoitusruutu
  menu.style.display = 'none';
  exerciseScreen.style.display = 'block';
}

function startBreathing() {
  // Aloita hengitysharjoitus
  breathCount = 0;
  breathBall.addEventListener('animationiteration', trackBreaths);
}

function trackBreaths() {
  breathCount++;
  if (breathCount === 3 || breathCount === 6 || breathCount === 9 || breathCount === 12 || breathCount === 15) {
    earnReward();
  }
  
  // Tasonousut
  if (rewards.length === 2) {
    level1.classList.add('active');
  }
  if (rewards.length === 5) {
    level2.classList.add('active');
  }
  if (rewards.length === 8) {
    level3.classList.add('active');
  }
}

function earnReward() {
  const reward = document.createElement('img');
  reward.src = 'images/kivi.jpg';
  reward.classList.add('reward');
  rewardList.appendChild(reward);
  
  rewards.push('reward');
  
  // Piilota harjoitus ja palaa valikkoon
  setTimeout(() => {
    exerciseScreen.style.display = 'none';
    menu.style.display = 'block';
  }, 2000);
}
