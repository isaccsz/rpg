let GLOBAL_HP = 100
let GLOBAL_MANA = 100
let GLOBAL_DPS = 10

class wizard {

    wizard_name
    wizard_img
    wizard_hp = GLOBAL_HP
    wizard_mana = GLOBAL_MANA
    wizard_exp = 0
    wizard_dps = GLOBAL_DPS

    constructor(nome, img) {
        this.wizard_name = nome;
        this.wizard_img = document.createElement('img')
        this.wizard_img.className = "wizard"
        this.wizard_img.src = img

    }

    receberDano(danoRecebido) {

        this.wizard_hp -= danoRecebido

    }

    receberCura(curaRecebida) {

        this.wizard_hp += curaRecebida

    }

    usarMagia(magiaEscolhida) {

        if (magiaEscolhida === "primario") {
            if (this.wizard_mana < GLOBAL_MANA) {
                this.wizard_mana += 25
            }
        }
        else if (magiaEscolhida === "boladefogo")
            this.wizard_mana -= 20
        else if (magiaEscolhida === "raio")
            this.wizard_mana -= 40
        else if (magiaEscolhida === "cura")
            this.wizard_mana -= 50


    }

    receberMana(manaRecebido) {

        this.wizard_mana += manaRecebido

    }

    receberExp(expRecebido) {

        this.wizard_exp += expRecebido

        if (expRecebido === 100) {

            GLOBAL_DPS += 10
            GLOBAL_HP += 20
            GLOBAL_MANA += 20
            this.wizard_exp = 0

            this.wizard_hp = GLOBAL_HP
            this.wizard_mana = GLOBAL_MANA

        }

    }

}

export { wizard }