import Link from "next/link"

const Card = ({data}) => {
    console.log(data)
  return (
  <Link href={"/caseStudies/userData"}>
      <div
    className="block  max-w-[450px] bg-white rounded-xl shadow-xl hover:opacity-90 cursor-pointer">
    <img className='rounded-t-xl' src={data.image} alt="" />
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {data.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {data.description}
      </p>
    </div>
  </div>
  </Link>
  
  )
}

export default Card
