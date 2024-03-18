import { IconListProps, ListItem } from "./types"

/**
 * Component that renders the a unordered list with icons
 * @param {Array<IconListProps>} items - A Array of objects, in with object has a title, description and iconPath. (description is optional)
 *
 */
const IconList = ({ items }: IconListProps) => {
  return (
    <ul className='perks-wrapper'>
      {items.map((item: ListItem) => (
        <li key={item.title}>
          <div>
            <img src={item.iconPath} alt='testeee' />
          </div>
          <div>
            <h3>{item.title}</h3>
            {item.description && (<p>{item.description}</p>)}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default IconList
