import { wizard } from "./wizard.js"
import { Enemy } from "./enemy.js"

const lifeBarMultiplier = 1
const mago = new wizard('Merlin', './assets/img/wizard.png')
const enemy = new Enemy('Demon', './assets/img/enemy.png', 300, 25)

//Definindo a tela do jogo
let gameBoard = document.getElementById('gameboard')
//Nome do jogador
document.getElementById('wizard_name').innerHTML = mago.wizard_name
//Nome do inimigo
document.getElementById('enemy_name').innerHTML = enemy.enemy_name

//criando as barras de vida do jogador
let barraDeVida = document.createElement('div')
let barraDeMana = document.createElement('div')
barraDeVida.className = "lifeBar"
barraDeMana.className = "manaBar"
barraDeVida.style.width = mago.wizard_hp + 'px'
barraDeMana.style.width = mago.wizard_mana + 'px'

//Criando a barra de vida do inimigo
let enemyLifeBar = document.createElement('div')
enemyLifeBar.className = "enemyLifeBar"
enemyLifeBar.style.width = (enemy.enemy_hp * lifeBarMultiplier) + 'px'

//Criando a exibição dos Danos
let playerDamage = document.createElement('span')

//adcionando tudo a tela do jogo
gameBoard.appendChild(mago.wizard_img)
gameBoard.appendChild(enemy.enemy_img)
gameBoard.appendChild(barraDeVida)
gameBoard.appendChild(barraDeMana)
gameBoard.appendChild(enemyLifeBar)


// Selecionando os botões pelas classes
const botaoFeiticoPrimario = document.querySelector('.b1')
const botaoFeiticoBolaDeFogo = document.querySelector('.b2')
const botaoFeiticoThunderbolt = document.querySelector('.b3')
const botaoFeiticoCura = document.querySelector('.b4')

//Event Listeners

botaoFeiticoPrimario.addEventListener('click', usarFeiticoPrimario)
botaoFeiticoBolaDeFogo.addEventListener('click', usarFeiticoBolaDeFogo)
botaoFeiticoThunderbolt.addEventListener('click', usarFeiticoThunderbolt)
botaoFeiticoCura.addEventListener('click', usarFeitiçoCura)

// Função para desabilitar os botões de feitiço
function desabilitarBotoesFeitico() {
    botaoFeiticoPrimario.disabled = true
    botaoFeiticoBolaDeFogo.disabled = true
    botaoFeiticoThunderbolt.disabled = true
    botaoFeiticoCura.disabled = true
}

// Função para habilitar os botões de feitiço
function habilitarBotoesFeitico() {
    botaoFeiticoPrimario.disabled = false
    botaoFeiticoBolaDeFogo.disabled = false
    botaoFeiticoThunderbolt.disabled = false
    botaoFeiticoCura.disabled = false
}


function usarFeiticoPrimario() {
    mago.usarMagia('primario')
    enemy.enemy_hp -= mago.wizard_dps
    enemyLifeBar.style.width = (enemy.enemy_hp * lifeBarMultiplier) + 'px'
    barraDeMana.style.width = mago.wizard_mana + 'px'
    if (enemy.enemy_hp <= 0)
        alert("Player Win")

    playerDamage.innerHTML = mago.wizard_dps + '!!'
    playerDamage.style.color = 'white'
    gameBoard.appendChild(playerDamage)
    playerDamage.addEventListener('animationend', function () {
        if (playerDamage.parentNode) {
            gameBoard.removeChild(playerDamage);
        }
    });

    enemy.enemy_img.classList.add('enemy_shake')
    enemy.enemy_img.addEventListener('animationend', function () {
        if (enemy.enemy_img.parentNode) {
            enemy.enemy_img.classList.remove('enemy_shake');
        }
    });

    desabilitarBotoesFeitico()

}

// Função a ser executada quando o botão de Bola de Fogo é clicado
function usarFeiticoBolaDeFogo() {
    if (mago.wizard_mana >= 20) {
        mago.usarMagia("boladefogo")
        enemy.enemy_hp -= mago.wizard_dps * 2
        enemyLifeBar.style.width = (enemy.enemy_hp * lifeBarMultiplier) + 'px'
        barraDeMana.style.width = mago.wizard_mana + 'px'
        //Animação do spellCast
        let magic = document.createElement('img')
        magic.className = 'spellCast'
        magic.src = './assets/img/BolaDeFogo.png'
        gameBoard.appendChild(magic)
        magic.addEventListener('animationend', function () {
            if (magic.parentNode) {
                gameBoard.removeChild(magic);
            }
        });

        if (enemy.enemy_hp <= 0) {
            alert("Player Win")
        }

        //Animação do dano causado
        playerDamage.innerHTML = (mago.wizard_dps * 2) + '!!'
        playerDamage.style.color = 'yellow'
        gameBoard.appendChild(playerDamage)
        playerDamage.addEventListener('animationend', function () {
            if (playerDamage.parentNode) {
                gameBoard.removeChild(playerDamage);
            }
        });

        enemy.enemy_img.classList.add('enemy_shake')
        enemy.enemy_img.addEventListener('animationend', function () {
            if (enemy.enemy_img.parentNode) {
                enemy.enemy_img.classList.remove('enemy_shake');
            }
        });



    }
    desabilitarBotoesFeitico()

}

// Função a ser executada quando o botão de Thunderbolt é clicado
function usarFeiticoThunderbolt() {

    if (mago.wizard_mana >= 40) {



        mago.usarMagia('raio')
        enemy.enemy_hp -= mago.wizard_dps * 4
        enemyLifeBar.style.width = (enemy.enemy_hp * lifeBarMultiplier) + 'px'
        barraDeMana.style.width = mago.wizard_mana + 'px'

        let magic = document.createElement('img')
        magic.className = 'spellCast'
        magic.src = './assets/img/Raio.png'
        gameBoard.appendChild(magic)
        magic.addEventListener('animationend', function () {
            if (magic.parentNode) {
                gameBoard.removeChild(magic);
            }
        });

        if (enemy.enemy_hp <= 0) {
            alert("Player Win")
        }

        playerDamage.innerHTML = (mago.wizard_dps * 4) + '!!'
        playerDamage.style.color = '#89CFF0'
        gameBoard.appendChild(playerDamage)
        playerDamage.addEventListener('animationend', function () {
            if (playerDamage.parentNode) {
                gameBoard.removeChild(playerDamage);
            }
        });

        enemy.enemy_img.classList.add('enemy_shake')
        enemy.enemy_img.addEventListener('animationend', function () {
            if (enemy.enemy_img.parentNode) {
                enemy.enemy_img.classList.remove('enemy_shake');
            }
        });


    }

    desabilitarBotoesFeitico()

}

function usarFeitiçoCura() {

    if (mago.wizard_mana >= 50) {

        mago.usarMagia('cura')
        barraDeMana.style.width = mago.wizard_mana + 'px'
        mago.wizard_hp += 50
        barraDeVida.style.width = mago.wizard_hp + 'px'

        let healAnimation = document.createElement('img')
        healAnimation.className = 'cast-heal'
        healAnimation.src = './assets/img/MagoVector_heal.png'

        gameBoard.appendChild(healAnimation)

        healAnimation.addEventListener('animationend', function () {
            if (healAnimation.parentNode) {
                gameBoard.removeChild(healAnimation);
            }
        });

    }

    desabilitarBotoesFeitico()

}

function enemyMakesMove() {

    mago.wizard_hp -= 10
    barraDeVida.style.width = mago.wizard_hp + 'px'
    if(mago.wizard_hp <= 0)
        alert("Enemy Wins")
    
    

}

let PlayerAtual = document.getElementById('VezDoJogador')
function jogadorFazTurno() {
    // Desabilita os botões de feitiço durante o turno do jogador
    habilitarBotoesFeitico();


    // Atualize a barra de tempo para 10 segundos
    const timeBar = document.createElement('div');
    timeBar.className = 'time-bar'

    // Inicia a animação da barra de tempo
    gameBoard.appendChild(timeBar)

    //Vez do jogador
    let PlayerAtual = document.getElementById('VezDoJogador')
    PlayerAtual.innerHTML = mago.wizard_name

    // Aguarde 10 segundos antes do turno do inimigo
    setTimeout(function () {
        desabilitarBotoesFeitico();
        PlayerAtual.innerHTML = enemy.enemy_name
        const timeBar2 = document.createElement('div')
        timeBar2.className = 'time-bar'
        gameBoard.appendChild(timeBar2)
        enemyMakesMove()
        mago.wizard_img.classList.add('enemy_shake')
        mago.wizard_img.addEventListener('animationend', function(){
            if(mago.wizard_img.parentNode){
                mago.wizard_img.classList.remove('enemy_shake')
            }
        })

        setTimeout(function () {
            habilitarBotoesFeitico();
            PlayerAtual.innerHTML = mago.wizard_name
            // Remove a barra de tempo
            gameBoard.removeChild(timeBar2)
            jogadorFazTurno()
        }, 5000); // 10 segundos
        // Remove a barra de tempo
        gameBoard.removeChild(timeBar)
    }, 5000); // 10 segundos
}

jogadorFazTurno()