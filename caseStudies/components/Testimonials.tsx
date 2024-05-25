
import Card from "./Card"

const Testimonials = () => {
  const testimonialDataArrAY =[ 
    {
      title: "Unsplash",
      image: "https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      description: "Family-owned home health and hospice agency, Alacare, partnered with Indeed Hire to fill their pipeline with highly sought-after Registered Nurses."
    },
    {
      title: "Unsplash",
      image: "https://images.unsplash.com/photo-1682686581663-179efad3cd2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
      description: "Family-owned home health and hospice agency, Alacare, partnered with Indeed Hire to fill their pipeline with highly sought-after Registered Nurses."
    },
    {
      title: "Unsplash",
      image: "https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
      description: "Family-owned home health and hospice agency, Alacare, partnered with Indeed Hire to fill their pipeline with highly sought-after Registered Nurses."
    }
  ]
  return (
    <div>
      <div className="flex gap-6 md:gap-10 px-8 md:px-16 mt-4">
      <h5 className="text-xl md:text-[24px] underline underline-offset-4 decoration-[#03A4F5] decoration-4">All</h5>
      <h5 className="text-xl md:text-[24px] mb-2">Hospitality</h5>
      </div>
      <hr />
      <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 px-8 md:px-16">
        {testimonialDataArrAY.map((data, index)=> (
          <Card key={index} data={data}/>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
