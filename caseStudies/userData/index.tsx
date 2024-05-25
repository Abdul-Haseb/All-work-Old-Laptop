
import { Header, HeroSection, Footer} from "../components";

const UserData = () => {


  return (
  <>
   <div className='px-8 lg:px-16'
     style={{
    backgroundImage: `url(${'/assets/caseStudy/shaneLewisMedium.png'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:"cover",
    backgroundColor:'rgba(0, 0, 0, 0.6)',
    backgroundBlendMode:'multiply',
    backgroundPosition:"center"
    }}>
    <Header/>
    <HeroSection/>
    </div>
    <div className='px-8 lg:px-16 pt-4 flex gap-4'>
      {/* TWITTER  */}
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src="/assets/caseStudy/twitter.png" alt="twitter" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </span>
        {/* LINKEDIN  */}
        <span>
          <a href="https://pk.linkedin.com/" target="_blank">
            <img src="/assets/caseStudy/linkedin.png" alt="linkedin" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </span>
        {/* FACEBOOK  */}
        <span>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/assets/caseStudy/facebook.png" alt="facebook" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </span>
        <span>
          <a href="https://www.vecteezy.com/" target="_blank">
            <img src="/assets/caseStudy/email.png" alt="vecteezy" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </span>
      </div>
    <div className="px-8 lg:px-16 py-8 lg:py-16 text-justify">
    <h4 className="font-semibold text-xl lg:text-2xl">Chef Jose Finds His Fit with WorkReel</h4>
    {/* SITUATION  */}
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Situation:</h5>
    <p className="text-base lg:text-xl">
    Meet Chef Jose, a seasoned culinary artist residing in the vibrant streets of southwest London. Like many professionals, he found the traditional job search process to be a bit of a headache – endless forms, generic resumes, and a lack of personal connection with potential employers. 
    </p>
    </div>
    {/* CHALLENGE  */}
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Challenge:</h5>
    <p className="text-base lg:text-xl">
    Jose, passionate about his craft, felt his skills and personality were getting lost in the paperwork. He desired a more authentic way to connect with employers, one that went beyond the limitations of traditional job applications. 
    </p>
    </div>
    {/* DISCOVERY  */}
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Discovery:</h5>
    <p className="text-base lg:text-xl">
    One day, while sipping coffee at Brickwood Cafe in Clapham, Jose noticed something different - a QR code on the hiring poster caught his eye. Curiosity piqued, he scanned it, leading him to WorkReel, a video-based recruitment platform. 
    </p>
    </div>
    {/* SOLUTION  */}
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Solution:</h5>
    <p className="text-base lg:text-xl">
    Excited about the opportunity, Jose quickly set up his WorkReel profile. Instead of the usual resume routine, he recorded a video introduction. This allowed him to showcase not just his skills but the real Chef Jose – his love for culinary arts, his dedication, and the personality that sets him apart. 
    </p>
    </div>
    {/* OUTCOME  */}
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Outcome:</h5>
    <p className="text-base lg:text-xl">
    Jose's WorkReel profile stood out to the hiring team at Nue Ground Café. They were able to see beyond the typical resume and get a genuine feel for Jose's skills and passion. Impressed, they extended an interview offer, recognizing the value of a more personal and dynamic approach to hiring. 
    </p>
    </div>
    <div className="pb-5 lg:pb-10">
    <h5 className="font-medium text-lg lg:text-xl pb-2">Impact:</h5>
    <p className="text-base lg:text-xl">
    WorkReel, with its innovative use of QR codes and video introductions, not only made Chef Jose's job search more enjoyable and effective but also gave Nue Ground Café a richer understanding of their potential team member. This realistic and personalized hiring process bridged the gap between job seekers and employers, creating connections based on skills and personality.
    </p>
    </div>
    </div>
    <hr />
    <Footer/>
  </>
  );
};

export default UserData;
