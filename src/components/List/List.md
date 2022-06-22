Champion component example:

```js
import { Champion } from '../../utils/champs'
const champs = [
  new Champion('Xayah', 4, ['Ragewing'], ['Swiftwing']),
]

function fakeToggleChamp(champ) {
  alert(`You clicked on ${champ.name}!`)
}
<List list={champs} toggleChamp={fakeToggleChamp} />
```