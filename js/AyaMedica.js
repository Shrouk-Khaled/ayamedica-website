//Events Page Functions
function bookDoctor(doctor){
    sessionStorage.setItem("DoctorPay_Data", JSON.stringify({
        name :doctor.name,
        clinicName: doctor.clinicName,
        location: doctor.location,
        description: doctor.description,
        packageIncludes: doctor.packageIncludes
    }));
}
function getDoctorCard_HTML(doctor, id){
    return `
        <div id="w-node-_1f97add2-f964-179c-128a-f4f060375681-6037567b" class="doctor-card">
            <div><img src="${doctor.imgPath}" loading="eager"
                sizes="(max-width: 479px) 30vw, (max-width: 1439px) 68vw, 852px" height="125" width="125" alt=""
                class="doctor-img">
            </div>
            <div class="doctor-details">
                <div class="title-box">
                    <span class="title-name">Doctor's Name: </span>
                    <span class="title-text">${doctor.name}</span>
                </div>
                <div class="title-box">
                    <span class="title-name">Clinic's Name: </span>
                    <span class="title-text">${doctor.clinicName} </span>
                </div>
                <div class="title-box">
                    <span class="title-name">Link: </span>
                    <span class="title-text"><a class="herf-style"
                        href=${doctor.link}>${doctor.link}</a>
                    </span>
                </div>
                <div class="title-box">
                    <span class="title-name">Location: </span>
                    <span class="title-text">${doctor.location}</span>
                </div>
                <div class="title-box">
                    <span class="title-name">Description: </span>
                    <span class="title-text">${doctor.description}</span>
                </div>
            </div>
            <div class="book-box" >
                <a class="watch-btn" id= "book-btn-${id}" href="payment.html?doctor=${doctor.name}">Book Now</a>
            </div>
        </div>
`;
}


//Payment Page Functions
function setDoctorPayment_Info(doctor){
    document.querySelector('.doctor-name span').innerText = doctor.name;
    document.querySelector('.clinic-name span').innerText = doctor.clinicName;
    const locationDiv= document.querySelector('.doctor-location .locations');
    doctor.location.split('/').forEach(address=>{
        locationDiv.insertAdjacentHTML('beforeend', `<button class="location-btn">${address}</button>`);
    });
    document.querySelector('.doctor-description span').innerText = doctor.description.split('\n')[0];
    const packageDiv= document.querySelector('.package-includes .package-list');
    doctor.packageIncludes.forEach(item=>{
        packageDiv.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    });


}
//Events Page
if(document.title === "Events"){
    var Doctors_Data= [
        //Doctor Assem
        {
            imgPath: 'images/drassem.jpg',
            name: 'Assem Zahran',
            clinicName: 'Ophthanlmology Consultant',
            link: 'https://youtu.be/T0qQ21D2_fg',
            location: 'International femto lasik centre - new cairo / Zahran eye center - Damiette',
            description: `Dr. Assem Zahran is a consultant ophthalmologist who provides the most advanced refractive eye procedures for vision correction, leveraging the centers' cutting-edge technology. Dr. Assem has over 20 years of experience in this field.
            Dr. Assem Zahran is Cataract and low vision surgeries consultant, He invented the keratoconus lift linked with cataract surgery, as well as the procedure for correcting astigmatism associated with cataracts. Dr. Zahran is the inventor of the present theory of lateral strabismus and the discoverer of the method of treating lateral strabismus without surgery. He discovered seven new migraine triggers related to eye muscles. He was awarded International certifications of excellence for obtaining the greatest global rates in femto lasik, LASIK SPK, and multifocal lens implants. Furthermore, he used femtolaser technology to execute seven new operations for the first time in the world. He developed the circular fragmentation approach to cure fossilized cataracts. Dr. Zahran was the first in the world to implant a second secondary lens. He is the director of the International Femtolasik Center (IFLC) The International Femtolasik Center (IFLC)which is one of nine worldwide accredited centers in femto smile and femto lasik surgeries.`,
            packageIncludes: [
                "Meet and Assist",
                "Hotel accommodation",
                "Transportaion"
            ]
        },
        //Doctor Magdy
        {
            imgPath: 'images/drmagdy.jpg',
            name: 'Magdy Khalaf',
            clinicName: 'i-vision',
            link: 'https://youtu.be/gHczffuexMg',
            location: 'i-vision - heliopolis',
            description: `Professor of Ophthalmology at Al-Azhar University's Faculty of Medicine University of Amsterdam Fellow, Netherlands University of Regensburg - Germany Fellow Member of the European Society of Cataract and Refractive Surgery and the American Society of Cataract and Refractive Surgery
            Dr. Magdy Khallaf is a corneal, vision correction, and keratoconus surgery consultant. He holds fellowships at the University of Amsterdam and the University of Regensburg in Germany. In addition, he is an honorary president of the International Society of Cataract Surgery. He won an award and a letter of appreciation from the World Eye Conference in Hong Kong for the best study on the treatment of corneal transplant complications, and he has several worldwide keratoconus studies. He is also a corneal and keratoconus surgery consultant at i-vision Eye Hospital in Heliopolis.
            `,
            packageIncludes: [
                "Meet and Assist",
                "Hotel accommodation",
                "Transportaion"
            ]
        },
        //Doctor Mahmoud
        {
            imgPath: 'images/drahmedelmassry.jpg',
            name: 'Mahmoud Ismail',
            clinicName: 'Cliinic name',
            link: 'https://youtu.be/D1S-oRz9Mho',
            location: 'loaction',
            description: `Dr. Mahmoud Ismail, Professor of Ophthalmology and Head of Ophthalmology at Al-Azhar University, is also a Professor of Ophthalmology at the University of Alicante in Spain.    
            He is the medical director of Nour Al-Hayah Hospital in Egypt. Moreover, he is the first and only non-Spanish doctor to receive the Spanish National Research Award on a global scale. He is an innovator of the International Innovation Award for Postal Lens Implantation for the Treatment of Ulcers, requiring one horn procedure for three surgeries. Dr. Ismail is a Member of the International Committee of Experts, the Court for Research of the European Association for White Water and Visual Defects, and the European Association for White Water and Visual Defects. He has an annual course at the American Academy conferences in his honor. He is also one of the worldwide doctors that established laser surgery guidelines in the nineties.
            `,
            packageIncludes: [
                "Meet and Assist",
                "Hotel accommodation",
                "Transportaion"
            ]
        },
    ]
    var Service_Wrapper= document.querySelector(".services-wrapper");
    let cardHTML= "";
    let counter= 1;
    Doctors_Data.forEach(doctor => {
        cardHTML= getDoctorCard_HTML(doctor, counter)
        Service_Wrapper.insertAdjacentHTML('beforeend', cardHTML);
        document.getElementById(`book-btn-${counter}`).onclick= (ev)=>{
            bookDoctor(doctor);
        };
        counter++;
    });
    
}else if(document.title === "Payment"){ //Payment Page
    const Doctor= JSON.parse(sessionStorage.getItem("DoctorPay_Data"));
    setDoctorPayment_Info(Doctor);
}
