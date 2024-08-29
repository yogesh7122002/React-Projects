import React from 'react'

function About() {
  return (

    <>

<div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>



      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Welcome to our About page! We are a team of dedicated professionals committed to providing the best service possible.
            Our mission is to deliver high-quality solutions that meet the needs of our clients. We believe in continuous learning
            and innovation, ensuring that we stay ahead in the industry.
          </p>

          <div className="my-6">
            <img
              src="https://img.freepik.com/free-vector/business-people-teamwork-suit-clothes_40876-2435.jpg?w=900&t=st=1724896602~exp=1724897202~hmac=5035c0ccef497c64f79cd3166c517ce211002c2ee918c4fddd2267e2397f919e"
              alt="Our Team"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our team is made up of experienced developers, designers, and strategists who are passionate about their work.
            We collaborate closely with our clients to understand their requirements and provide tailored solutions that drive results.
          </p>

          <div className="my-6">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15788.jpg?t=st=1724898076~exp=1724901676~hmac=dbdc8a8b874c8c22f7ad0e11c748efb98748b5bd0e4150bcbbb2115f1138cae0&w=996"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join us on our journey as we continue to innovate and deliver exceptional value to our clients. We're excited about the future and
            are always looking for new ways to improve and grow.
          </p>
        </div>
      </div> </>
  )
}

export default About
