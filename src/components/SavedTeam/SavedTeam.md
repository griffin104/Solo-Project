SavedTeam component example:

```js
import { Champion } from '../../utils/champs'
const champs = [
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing'])
]

function fakeDeleteTeam() {
  alert(`You deleted the team!`)
}

function fakeLoadTeam() {
  alert(`You loaded the team!`)
}
<SavedTeam team={champs} teamName='Example Team' deleteTeam={fakeDeleteTeam} loadTeam={fakeLoadTeam}/>
```