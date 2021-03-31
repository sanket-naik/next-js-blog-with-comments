import Date from "./date";
import LazyImage from './utils/LazyImage'

export default function Avatar({ name, picture, dateString, className }) {
  return (
    <div className={"flex items-center "+className}>
      <LazyImage src={picture} className="rounded-full mr-3 profimg" alt={name} />
      <div>
        <div className="text-l">{name}</div>
        <div className="dta">
          <Date dateString={dateString} />
        </div>
      </div>
    </div>
  )
}
