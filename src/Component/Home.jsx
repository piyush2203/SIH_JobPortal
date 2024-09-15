import React from 'react'

const Home = () => {
  return (
    <div className=' w-screen  overflow-x-hidden'>
      <div className='h-[90vh] w-[100%]  relative flex flex-col'>
            <div className='absolute top-[10%] left-[18%]' style={{width: '116px',
                height: '124px' , flexShrink: 0 , borderRadius: '93.522px',
                background: 'rgba(255, 230, 0, 0.10)', 
                boxShadow: '0px 5.938px 84.17px 0px rgba(255, 230, 0, 0.25)'}}>

            </div>
            <div className='absolute top-[2%] left-[26%]' style={{width: '116px',
                height: '104px' , flexShrink: 0 , borderRadius: '93.522px',
                
                background: 'rgba(0, 255, 87, 0.10)', 
                boxShadow: '0px 5.938px 84.17px 0px rgba(0, 255, 87, 0.25)'}}>

            </div>
            <div className=' w-full  '>
                <div ><img src="STAND OUT.png" alt="STAND OUT" className='w-[50%] mt-[7%] ml-[25%] z-[10] select-none' /></div>
                <div className='flex pl-[30%] pt-[2%]'>
                    <div className=''><img src="&.png" className='h-[65%] select-none ' alt="" /></div>
                    <div className='pt-[2.4%]'><img src="GET PLACED.png " className='h-[40%]  select-none ' alt="" /></div>
                </div>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>Stand Out, Shine Bright, and Get Placed. Unlock Your Future with Confidence!</p>
                <button className='py-2 mt-7 px-6 text-xl bg-green-600 hover:bg-green-700 rounded-lg'>Get Started</button>
            </div>

            <div className='w-full flex flex-end relative  h-[30vh]'>
                <img src="page1man.png" alt=""  className='absolute select-none right-0 pt-[1%] w-[88%]'/>
            </div>
      </div>

      {/* Page 2  */}


      <div className='h-[70vh] w-full   flex justify-center items-center'>
        <div className='h-[75%] w-[75%] flex  '>
          {/* left  */}
          <div className="left h-full w-[55%]  font-[inter] leading-tight ">

            <h1 className='text-[2.9vw] pl-[10%] pt-[15%] font-bold'>Your Path to Success: </h1>
            <h1 className=' font-bold text-[2.5vw] pl-[10%] text-[#40A87B] pt-0'>Test, Improve, and Get Hired</h1>

            <p className='w-[80%] m-auto text-[0.8vw]  pt-[3%] text-start '>Start your journey towards a successful career with SkillLink. Take personalized skill tests to discover your strengths, enhance your profile with expert guidance, and get matched with job opportunities that perfectly align with your skills. Whether you’re looking for local, global, or government roles, we make getting hired easier and faster</p>

            <button className='px-[5%] py-[0.5%] bg-green-600 hover:bg-green-700 text-white mt-[5%] text-xl rounded-sm shadow-black shadow-sm ml-[10%] font-[poppins]'>Start Test</button>
          </div>



          {/* right */}
          <div className="right h-full w-[45%]  flex items-center  justify-center">
            <div className=' relative h-[80%] w-[95%]'>
              <img src="Rectangle 8.png" alt="" className='h-full w-full' />
              <img src="laptop.png" alt="" className='absolute bottom-[2%] right-[2%] w-[90%]' />
              <img src="test.png" alt="" className='absolute top-0 left-0 h-[90%]' />
            </div>
            
          </div>
        </div>

      </div>


      {/* page3  */}

      <div className='h-[80vh] w-[80%] m-auto bg-[#EEF4F6] rounded-lg text-[#013C44] font-[poppins]'>
        <div className=' flex flex-col items-center justify-center text-5xl font-semibold pt-[4%]'>
          <div className='t'>AI Mock Interview :</div>
          <div>Prepare To Impress</div>
        </div>
        <div className='w-[80%] flex justify-center items-center pt-[3%] text-center m-auto'>
          <p>Boost your confidence and ace your next interview with our AI-powered mock interviews. Get real-time feedback on your performance, refine your answers, and practice under pressure—all in a risk-free environment.</p>
        
        </div>
        <div className='flex items-center justify-between mt-[3%] px-[8%] h-[40%]'>
              <div className='h-[90%] rounded-lg shadow-black bg-white shadow-sm w-[30%] '>
                <img src="feedback.png" alt="" className='h-[20%] mt-[15%] ml-[5%]' />  
                <h1 className='text-[1.5vw] ml-[5%] mt-[2%]'>Personalised Feedback</h1>
                <p className='mt-[2%] text-[0.7vw] pl-[6%] pr-[15%]'>Get insights into your strengths and areas for improvement</p>
              </div>
              <div className='h-[90%] rounded-lg shadow-black bg-[#024751] shadow-sm w-[30%] text-white '>
                <img src="copypen.png" alt="" className='h-[20%] mt-[15%] bg-green-600 rounded-lg ml-[5%]' />  
                <h1 className='text-[1.5vw] ml-[5%] mt-[2%]'>Realistic Practice</h1>
                <p className='mt-[2%] text-[0.7vw] pl-[6%] pr-[15%]'>Simulate real interview scenarios tailored to your job role</p>
              </div>
              <div className='h-[90%] rounded-lg shadow-black bg-white shadow-sm w-[30%] '>
                <img src="confident.png" alt="" className='h-[20%] mt-[15%] ml-[5%]' />  
                <h1 className='text-[1.5vw] ml-[5%] mt-[2%]'>Boost Confidence</h1>
                <p className='mt-[2%] text-[0.7vw] pl-[6%] pr-[15%]'>Enter your next interview fully prepared and ready to impress</p>
              </div>
        </div>

        <div className='flex items-center justify-center mt-[3%]'>
          <button className='bg-green-500 text-[1.5vw] text-white px-[2%] rounded-lg hover:bg-green-700'>Start Now</button>
        </div>
      </div>


      {/* page 4  */}
      <div className='h-[70vh] w-full   flex justify-center items-center '>
        <div className='h-[75%] w-[75%] flex  '>

          {/* left  */}

        <div className="left h-full w-[45%]  flex items-center  justify-center">
            <div className=' relative h-[80%] w-[95%] mt-[30%]'>
              <img src="Rectangle 8.png" alt="" className='h-full w-full' />
              <img src="profile.png" alt="" className='absolute top-[5%] left-[5%] h-[50%]' />
              <img src="buissness man.png" alt="" className='absolute bottom-[1.5%] right-[2%] w-[80%]' />
              
            </div>
            
          </div>

          {/* right  */}
          <div className="right h-full w-[55%]  font-[inter] ">

            <h1 className='text-[2.9vw] pl-[10%] pt-[18%] font-bold'>Mentee Connect </h1>
            <h1 className=' font-bold text-[2.9vw] pl-[10%] text-[#40A87B] leading-tight pt-0'>Personalized Mentorship for Your Career Growth </h1>

            <p className='w-[80%] m-auto text-[0.9vw]  pt-[1%] text-start '>Take the next step in your career with the guidance of experienced professionals through our Mentee Connect feature. Whether you're navigating your first job, switching industries, or seeking career advancement</p>

            <button className='px-[3%] py-[0.5%] bg-green-600 hover:bg-green-700 text-white mt-[3%] text-xl rounded-sm shadow-black shadow-sm ml-[30%] font-[poppins]'>Connect Now</button>
          </div>



          {/* right */}
          
        </div>

      </div>


      {/* page 5  */}

      <div className='h-[85vh] w-full border-black pt-[5%] flex gap-[5%] justify-center items-center'>
        <div className='h-[90%] w-[32.5%] bg-[#024751] rounded-lg relative overflow-hidden flex flex-col items-center  '>
          <div className='h-[70vw] absolute right-0 top-[22%] w-[75vw] rounded-full bg-[rgba(173, 173, 173, 0.20)]' style={{background:"rgba(173, 173, 173, 0.20)"}}></div>
          <h1 className='text-4xl pt-[5%] font-[inter] text-white'>Internships</h1>
          <p className='w-[70%] text-center mt-[2%] text-gray-400'> Your Gateway to Career-Defining Opportunities</p>
          <img src="male.png" className='absolute bottom-0 right-0' alt="" />

        </div>
        <div className='h-[90%] w-[32.5%] bg-[#024751] rounded-lg relative overflow-hidden flex flex-col items-center'>
        <div className='h-[70vw] absolute right-0 bottom-[22%] w-[75vw] rounded-full bg-[rgba(173, 173, 173, 0.20)]' style={{background:"rgba(173, 173, 173, 0.20)"}}></div>
        <h1 className='text-4xl pt-[5%] font-[inter] text-white'>Global Jobs</h1>
          <p className='w-[70%] text-center mt-[2%] text-gray-400'> Explore Opportunities Worldwide</p>
          <img src="female.png" className='absolute bottom-0 right-0' alt="" />
        </div>
      </div>

      {/* page6  */}

      <div className='h-[80vh] flex justify-center items-center w-full select-none mt-[8%] relative'>
        <div className='w-[90%] h-full '>
          <img src="page6.png" className='w-full h-full object-contain mt-[2%]' alt="" />
        </div>
        <button className='absolute bg-green-600 px-[2%] text-[1.4vw] text-white font-[inter] md:block hidden rounded-lg left-[29%] bottom-[17%] fixed  hover:bg-green-700 ]'> Build Now</button>
      </div>

      {/* page7 */}

      <div className='mt-[5%] relative w-full select-none'>
        <img src="skilllink.png" alt="" className='w-[15%] top-[5%] left-[7%] absolute h-[18%] bg-white'/>

        <img src="foot.png" alt="" className='w-full'/>
      </div>
    </div>
  )
}

export default Home
