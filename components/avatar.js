import Date from "./date";

export default function Avatar({ name, picture, dateString }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="rounded-full mr-3 profimg" alt={name} />
      <div>
        <div className="text-l">{name}</div>
        <div className="dta">
          <Date dateString={dateString} />
        </div>
      </div>
    </div>
  )
}
