import './grid.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Grid, GridItem } from './grid'

export type { GridProps, GridItemProps } from './grid'

//使用attachPropertiesToComponent将Item和Grid绑定在一起。
export default attachPropertiesToComponent(Grid, {
  Item: GridItem,
})
