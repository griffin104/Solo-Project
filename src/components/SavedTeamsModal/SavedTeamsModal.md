SavedTeamsModal component example:

```jsx
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
const [open, setOpen] = React.useState(false);
<div>
  <button onClick={() => {setOpen(!open)}}>Open Modal</button>
  {open ? <SavedTeamsModal /> : null}
</div>
```