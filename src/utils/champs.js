export class Champion {
  static id = 0
  constructor(name, cost, origin, classes) {
    this.id = Champion.id++
    this.name = name
    this.cost = cost
    this.origin = origin
    this.classes = classes
    this.selected = false
  }
}
//  Astral Dragon Guild Jade Mirage Ragewing Revel Scalescorn Shimmerscale Tempest Trainer Whispers

//  Assassin Bard Bruiser Cannoneer Cavalier Dragonmancer Evoker Guardian Legend Mage Mystic Shapeshifter Spell-Thief Starcaller Swiftshot Warrior
export default [
  new Champion('Aatrox', 1, ['Shimmerscale'], ['Warrior']),
  new Champion('Anivia', 3, ['Jade'], ['Evoker', 'Legend']),
  new Champion('Ao Shin', 10, ['Tempest','Dragon'], []),
  new Champion('Ashe', 2, ['Jade'], ['Dragonmancer', 'Swiftshot']),
  new Champion('Aurelion Sol', 10, ['Astral', 'Dragon'], ['Evoker']),
  new Champion('Bard', 5, ['Guild'], ['Mystic', 'Bard']),
  new Champion('Braum', 2, ['Scalescorn'], ['Guardian']),
  new Champion('Corki', 4, ['Revel'], ['Cannoneer']),
  new Champion('Daeja', 8, ['Mirage', 'Dragon'], []),
  new Champion('Diana', 3, ['Scalescorn'], ['Assassin']),
  new Champion('Elise', 3, ['Whispers'], ['Shapeshifter']),
  new Champion('Ezreal', 1, ['Tempest'], ['Swiftshot']),
  new Champion('Gnar', 2, ['Jade'], ['Shapeshifter']),
  new Champion('Hecarim', 4, ['Ragewing'], ['Cavalier']),
  new Champion('Heimerdinger', 1, ['Trainer'], ['Mage']),
  new Champion('Idas', 8, ['Shimmerscale','Dragon'], ['Guardian']),
  new Champion('Illaoi', 3, ['Astral'], ['Bruiser']),
  new Champion('Jinx', 2, ['Revel'], ['Cannoneer']),
  new Champion('Karma', 1, ['Jade'], ['Dragonmancer']),
  new Champion('Kayn', 2, ['Ragewing', 'Shimmerscale'], ['Assassin']),
  new Champion('Lee Sin', 3, ['Tempest'], ['Dragonmancer']),
  new Champion('Leona', 1, ['Mirage'], ['Guardian']),
  new Champion('Lillia', 2, ['Scalescorn'], ['Cavalier', 'Mage']),
  new Champion('Lulu', 3, ['Trainer'], ['Mystic', 'Evoker']),
  new Champion('Nami', 2, ['Astral'], ['Mage', 'Mystic']),
  new Champion('Neeko', 4, ['Jade'], ['Shapeshifter']),
  new Champion('Nidalee', 1, ['Astral'], ['Shapeshiter']),
  new Champion('Nunu', 3, ['Mirage'], ['Cavalier']),
  new Champion('Olaf', 3, ['Scalescorn'], ['Bruiser', 'Warrior']),
  new Champion('Ornn', 4, ['Tempest'], ['Bruiser', 'Legend']),
  new Champion('Pyke', 5, ['Whispers'], ['Assassin']),
  new Champion('Qiyana', 2, ['Tempest'], ['Assassin']),
  new Champion('Ryze', 3, ['Guild'], ['Mage']),
  new Champion('Sejuani', 1, ['Guild'], ['Cavalier']),
  new Champion('Senna', 1, ['Ragewing'], ['Cannoneer']),
  new Champion('Sett', 1, ['Ragewing'], ['Dragonmancer']),
  new Champion('Shen', 2, ['Ragewing'], ['Bruiser', 'Warrior']),
  new Champion('Shi Oh Yu', 8, ['Jade', 'Dragon'], ['Mystic']),
  new Champion('Shyvana', 10, ['Ragewing', 'Dragon'], ['Shapeshifter']),
  new Champion('Skarner', 1, ['Astral'], ['Bruiser']),
  new Champion('Sona', 4, ['Revel'], ['Evoker']),
  new Champion('Soraka', 5, ['Jade'], ['Starcaller']),
  new Champion('Swain', 3, ['Ragewing'], ['Dragonmancer', 'Shapeshifter']),
  new Champion('Sy\'fen', 8, ['Whispers', 'Dragon'], ['Bruiser']),
  new Champion('Sylas', 3, ['Whispers'], ['Mage', 'Bruiser']),
  new Champion('Tahm Kench', 1, ['Revel'], ['Bruiser']),
  new Champion('Talon', 4, ['Guild'], ['Assassin']),
  new Champion('Taric', 1, ['Jade'], ['Guardian']),
  new Champion('Thresh', 2, ['Whispers'], ['Guardian']),
  new Champion('Tristana', 2, ['Trainer'], ['Cannoneer']),
  new Champion('Twitch', 2, ['Guild'], ['Swiftshot']),
  new Champion('Varus', 3, ['Astral'], ['Swiftshot']),
  new Champion('Vladimir', 1, ['Astral'], ['Mage']),
  new Champion('Volibear', 3, ['Shimmerscale'], ['Dragonmancer', 'Legend']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftshot']),
  new Champion('Yasuo', 5, ['Mirage'], ['Dragonmancer', 'Warrior']),
  new Champion('Yone', 2, ['Mirage'], ['Warrior']),
  new Champion('Zoe', 5, ['Shimmerscale'], ['Spellthief', 'Mage']),
]