import './IconList.css'
import { IconListProps, ListItem } from "./types"

/**
 * Component that renders the a unordered list with icons
 * @param {Array<IconListProps>} items - A Array of objects, in with object has a title, description and iconPath. (description is optional)
 *
 */
const IconList = ({ items, orientation }: IconListProps) => {
  return (
    <ul className={`list-wrapper | ${orientation === 'row' ? 'flex row' : ''}`}>
      {items.map((item: ListItem) => (
        <li key={item.title} className={`item-icon-container | flex ${orientation === 'column' ? 'column' : ''}`}>
          {orientation === 'row' ? (
            <img className='icon' src={item.iconPath} alt='testeee' />
          ) :
            (
              <div className="circle">
                <img className='icon' src={item.iconPath} alt='testeee' />
              </div>
            )
          }
          <div>
            <h3 className="fs-title fw-bold text-white">{item.title}</h3>
            {item.description && (<p className="icon-description | fs-body fw-regular text-white">{item.description}</p>)}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default IconList
