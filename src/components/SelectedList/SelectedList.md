SelectedList example component:

```js
/* import { Champion } from '../../utils/champs.js'
const champs = [
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing'])
];

const teams = [
  {
    name: 'Example 1',
    team: champs
  },
  {
    name: 'Example 2',
    team: champs
  },
  {
    name: 'Example 3',
    team: champs
  }
];

function fakeToggleChamp(champ) {
  alert(`You clicked on ${champ.name}!`)
}
  <SelectedList addTeam={() => alert('Team Added!')} champs={champs} currentTeam={'Example Team Name'}
  deleteTeam={() => alert('Team Deleted!')} loadTeam={() => alert('Team Loaded!')} savedTeams={teams}
  toggleChamp={fakeToggleChamp} updateCurrentTeam={() => alert('Please implement redux into this :(')}/> */

```