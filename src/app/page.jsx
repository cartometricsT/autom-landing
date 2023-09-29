import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';


export default function Homepage() {
  return (
    <div >
      <Navbar />
      <HeroSection />
      
      
      {/*section one: What we Offer*/}
      <section id="One" className="container py-8 mt-20 sm:mt-40">
        <div className="border border-black h-4 w-1/6 ml-auto "></div>
        <div 
          className="flex flex-col md:flex-row items-center justify-between bg-cover bg-center py-10 mt-2"
          style={{ backgroundImage: 'url(/images/backgroundOne.png)' }}>

          <div className="container mb-4 md:mb-0 md:ml-8 flex-grow">
            <h2 className="text-5xl text-center sm:text-7xl sm:text-center md:text-right font-bold">What we Offer</h2>
          </div>

          <div className="container  border-l border-black ml-4 ">
            <p className="text-xl text-left text-black font-mono">We provide AI-driven process automation services. Unlike traditional automation, our AI technology can understand unstructured data, such as customer emails or documents, and make intelligent decisions based on the information within.</p>
          </div>
        </div>
        <div className="border border-black h-4 w-2/4 mt-2"></div>
        <div className="border  h-4 w-1/4 mt-2" style={{ backgroundImage: 'url(/images/backgroundOne.png)' }}></div>
      </section>



       {/*section two: Practical Applications*/}
      <section id="Two" className="container py-8 mt-20">
        <h2 className="text-5xl text-center sm:text-7xl font-bold mb-10">Practical Applications</h2>

        <div className="border-b border-black mx-auto mb-20">
          <div className="flex flex-col sm:flex-row items-center">
            <img src="/images/icono1.svg" alt="Icon" className="h-14 mr-4" />
            <h3 className="text-2xl text-center mb-5  sm:text-4xl sm:text-left font-semibold">Personalized Automated Responses</h3>
            <p className="ml-4 text-2xl text-center text-slate-400 sm:text-right mb-5 font-mono">Deliver instant, customized responses to your clients through various channels, including website chatbots, email, and social media interactions.</p>
          </div>
        </div>

        <div className="border-b border-black mx-auto mb-20">
          <div className="flex flex-col sm:flex-row items-center">
            <img src="/images/icono2.svg" alt="Icon" className="h-14 mr-4 " />
            <h3 className="text-2xl text-center mb-5 sm:text-4xl sm:text-left font-semibold">Precise Data Extraction</h3>
            <p className="ml-4 text-2xl text-center text-slate-400 sm:text-right mb-5 font-mono">Extract crucial data from documents in your preferred format, eliminating manual tasks.</p>
          </div>
        </div>

        <div className="border-b border-black mx-auto mb-20">
          <div className="flex flex-col sm:flex-row items-center">
            <img src="/images/icono3.svg" alt="Icon" className="h-14 mr-4" />
            <h3 className="text-2xl text-center mb-5 sm:text-4xl sm:text-left font-semibold">Creative Content Generation</h3>
            <p className="ml-4 text-2xl text-center text-slate-400 sm:text-right mb-5 font-mono">Create social media content based on your instructions and keywords, saving you time and effort.</p>
          </div>
        </div>

        

    
      </section>







      {/*section three: Benefits*/}
      
      <section id="Three" className="container py-8 mt-20 sm:mt-20">
          <div className="border border-black flex flex-col md:flex-row justify-between bg-cover bg-center py-10">

            <div className="container text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-5xl sm:text-7xl font-bold mb-10">Benefits</h2>
              <p className="text-2xl font-mono text-slate-400">Busy entrepreneurs often struggle to find time for process analysis and improvement. Our mission is to assist you in realizing your business's full potential while eliminating the sense that things could be done better.</p>
            </div>
            
            <div className="bg-cover mr-9 ml-9" style={{ backgroundImage: 'url(/images/backgroundTwo.png)' }}>
              <div className="mb-4 p-4">
                <h4 className="text-1xl text-center font-semibold mb-2 sm:text-left sm:text-2xl">Cost Savings and Scalability</h4>
                <p className="font-mono text-center sm:text-left">Automation reduces operational costs, provides valuable data insights, and scales with your business, offering a competitive edge.</p>
              </div>
              <div className="mb-4 p-4">
                <h4 className="text-1xl text-center font-semibold mb-2 sm:text-left sm:text-2xl">Customer Satisfaction</h4>
                <p className="font-mono text-center sm:text-left">Personalized and prompt responses improve customer service, increasing satisfaction and loyalty while reducing response times.</p>
              </div>
              <div className="mb-4 p-4">
                <h4 className="text-1xl text-center font-semibold mb-2 sm:text-left sm:text-2xl">Efficiency and Productivity</h4>
                <p className="font-mono text-center sm:text-left">Cutting-Edge Technology. Our team of experts specialises in developing state-of-the-art Language Models that set industry standards.</p>
              </div>
            </div>
            
          </div>
      </section>
        
      


      {/*section four: Work with Us*/}
      <section id= "Four" className="py-8 mt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl mb-2 text-center text-slate-400 sm:text-left sm:text-3xl" >Work with Us</h2>
        <p className="text-3xl mb-4 font-mono text-center sm:text-left sm:text-5xl">We're a team of highly skilled professionals with extensive experience in artificial intelligence, software development, and process optimization. Our passion for innovation and efficiency drives us to deliver exceptional solutions for your business.</p>
        
        <div className="flex flex-col items-center sm:items-start">
          <div className="bg-cover h-4 w-3/4" style={{ backgroundImage: 'url(/images/backgroundOne.png)' }}></div>
          <div className="border border-black h-4 w-2/4 mt-2"></div>
        </div>
      </div>
    </section>



      {/*section five: Form*/}
      <section id= "Five" className="py-8 mt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl sm:text-7xl font-bold mb-10">Get in Touch</h2>
        <p className="container mb-8 text-2xl font-mono">Let's identify the processes that will have the greatest impact on your bottom line.</p>

        <p className="container mb-8">ouremail@company.com</p>
        
        
      </div>
    </section>




    <Footer />

    </div>
    
  );
  
}