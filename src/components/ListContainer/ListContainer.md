ListContainer component example:

```js
import champs from '../../utils/champs'


function fakeToggleChamp(champ) {
  alert(`You clicked on ${champ.name}!`)
}
<ListContainer champs={champs} toggleChamp={fakeToggleChamp} />
```