SavedTeamsModal component example:

```js
import { Champion } from '../../utils/champs.js'
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

function fakeDeleteTeam() {
  alert(`You deleted the team!`)
}

function fakeLoadTeam() {
  alert(`You loaded the team!`)
}

const [open, setOpen] = React.useState(false);
<div>
  <button className='button is-large is-link' onClick={() => {setOpen(!open)}}>Open Modal</button>
  {open ? <SavedTeamsModal close={() => {setOpen(!open)}} loadTeam={fakeLoadTeam}
  deleteTeam={fakeDeleteTeam} savedTeams={teams}/> : null}
</div>
```