
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Ruang merupakan suatu tempat di muka bumi yang dapat dimanfaatkan untuk individu maupun kelompok. Aspek ruang meliputi",
    answer: "Wilayah daratan, perairan, udara beserta kelengkapan berbagai organisme biotik dan abiotik",
    options: [
      "Wilayah daratan, perairan, udara beserta kelengkapan berbagai organisme biotik dan abiotik",
      "Wilayah daratan, pegunungan, Samudra beserta wilayah perdagangan biotik dan abiotik",
      "Wilayah daratan, antarruang, lautan beserta wilayah penduduk kota dan desa",
      "Wilayah daratan, kepulauan dan daerah perdagangan antar pulau"
    ]
  },
  {
    numb: 2,
    question: "Perbedaan karakteristik ruang antar wilayah meliputi",
    answer:       "Kandungan unsur hara lapisan tanah, kandungan mineral, keanekaragaman hayati, lapisan atmosfer",
    options: [
      "Kandungan unsur hara lapisan tanah, kandungan oksigen, lapisan udara, keanekaragaman hayati",
      "Kandungan unsur hara lapisan tanah, kandungan miyak, keanekaragaman biotik",
      "Kandungan unsur hara lapisan tanah, kandungan mineral, keanekaragaman hayati, lapisan atmosfer",
      "Kandungan unsur hara lapisan tanah, lapisan ozon, keanekaragaman hayati, kandungan mineral"
    ]
  },
  {
    numb: 3,
    question: "Prasyarat dasar yang memungkinkan terjadinya interaksi keruangan",
    answer: "Complementarity (saling melengkapi), intervening opportunity (kesempatan antara), transferability (kemudahan berpindah barang ataupun orang)",
    options: [
      "Infrastruktur transportasi, infrastruktur jaringan komunikasi, complementarity (saling melengkapi), transferability",
      "Complementarity (saling melengkapi), sosiality opportunity (kesempatan antara), transferability (kemudahan berpindah barang atau orang)",
      "Imigrasi, emigrasi, infrastruktur, transferability (kemudahan berpindah barang atau orang)",
      "Complementarity (saling melengkapi), intervening opportunity (kesempatan antara), transferability (kemudahan berpindah barang ataupun orang)"
    ]
  },
  {
    numb: 4,
    question: "Contoh pertukaran informasi",
    answer: "Siaran televisi, streaming, website, marketplace",
    options: [
      "Koran, undangan, radio, shope, pasar",
      "Siaran televisi, streaming, website, marketplace",
      "Website, sirkulasi, urbanisasi, pertokoan",
      "Siaran televisi, komunikasi, evakuasi"
    ]
  },
  {
    numb: 5,
    question: "Perpindahan Masyarakat dari desa ke kota adalah contoh penerapan konsep",
    answer: "Interaksi antar ruang",
    options: [
      "Imigrasi",
      "Evakuasi",
      "Komutasi",
      "Interaksi antar ruang"
    ]
  },
  {
    numb: 6,
    question: "Apa yang menyebabkan keterkaitan antar ruang",
    answer:       "Memiliki ciri khas yang berbeda-beda antara suatu ruang dengan ruang lainnya",
    options: [
      "Memiliki ciri khas yang berbeda-beda antara suatu ruang dengan ruang lainnya",
      "Adanya keadaan alam yang relatif sama antara satu ruang dengan ruang lainnya",
      "Adanya persamaan potensi alam yang dimiliki setiap ruang",
      "Suatu ruang memiliki iklim tropis di seluruh wilayah negara"
    ]
  },
  {
    numb: 7,
    question: "Interaksi antar ruang yang berwujud pergerakan manusia disebut",
    answer: "Mobilitas penduduk",
    options: [
      "Sensus penduduk",
      "Sosialisasi penduduk",
      "Mobilitas penduduk",
      "Populasi penduduk"
    ]
  },
  {
    numb: 8,
    question: "Apakah yang bisa dilakukan pemerintah supaya bisa memudahkan transfer barang kebutuhan pokok dari wilayah satu ke wilayah lainnya",
    answer: "Membangun jalan, jembatan, Pelabuhan dan bandara di seluruh wilayah Indonesia",
    options: [
      "Membangun industry dan pertanian untuk memenuhi kebutuhan Masyarakat Indonesia",
      "Membangun rumah sakit dan puskesmas sampai daerah terpencil",
      "Membangun sekolah dan puskesmas sampai daerah pelosok",
      "Membangun jalan, jembatan, Pelabuhan dan bandara di seluruh wilayah Indonesia"
    ]
  },
  {
    numb: 9,
    question: "Interaksi antarruang bidang informasi dilakukan dengan media",
    answer: "Televisi",
    options: [
      "Mesin industry",
      "Televisi",
      "Mesin fotocopy",
      "Mesin cetak"
    ]
  },
  {
    numb: 10,
    question: "Indonesia memiliki perbatasan darat internasional dengan tiga negara tetangga yaitu",
    answer: "Malaysia, Papua Nugini dan Timur Leste",
    options: [
      "Malaysia, Papua Nugini dan Timur Leste",
      "Malaysia, Singapura, Timur Leste",
      "Papua Nugini, Kamboja dan Malaysia",
      "Timur Leste, Tailan, Papua Nugini"
    ]
  },
  {
    numb: 11,
    question: "Letak geografis adalah",
    answer: "Letak suatu daerah dilihat dari posisinya berdasarkan kedudukan garis lintang dan garis bujur",
    options: [
      "Letak suatu daerah dilihat dari posisinya berdasarkan kedudukan garis lintang dan garis bujur",
      "Letak suatu negri dilihat dari posisi berdasarkan kedudukan garis simetri",
      "Letak kepulauan Indonesia berada di antara benua Asia dan Afrika",
      "Letak kepulauan Indonesia berada antara Samudra Indonesia dan Samudra Hindia"
    ]
  },
  {
    numb: 12,
    question: "Seseorang yang pergi ke tempat kerja karena penghasilannya mampu menutupi ongkos yang dikeluarkannya merupakan contoh interaksi antarruang yang disebut",
    answer: "Transportrasi",
    options: [
      "Mobilitas",
      "Komunikasi",
      "Transportrasi",
      "Interaksi"
    ]
  },
  {
    numb: 13,
    question: "Interaksi melalui perpindahan ide atau gagasan dan informasi baik secara langsung maupun tidak langsung disebut",
    answer: "Komunikasi",
    options: [
      "Mobilisasi",
      "Evakuasi",
      "Komunikasi",
      "Transformasi"
    ]
  },
  {
    numb: 14,
    question: "Salah satu bentuk interaksi antarruang adalah perpindahan penduduk, faktor yang mendorong perpindahan penduduk dari pedesaan ke perkotaan adalah",
    answer: "Daerah perkotaan menyediakan banyak lapangan pekerjaan",
    options: [
      "Di daerah perkotaan terdapat penampakan alam",
      "Penduduk di daerah perkotaan lebih heterogeny",
      "Di daerah perkotaan terdapat tanah yang relatif subur",
      "Daerah perkotaan menyediakan banyak lapangan pekerjaan"
    ]
  },
  {
    numb: 15,
    question: "Letak Indonesia yang sangat strategis dapat memberikan dampak yang merugikan yaitu",
    answer: "Budaya dari daerah lain yang tidak sesuai dengan budaya Indonesia masuk dan mempengaruhi kehidupan budaya",
    options: [
      "Budaya dari daerah lain yang tidak sesuai dengan budaya Indonesia masuk dan mempengaruhi kehidupan budaya",
      "Menyebabkan banyak kejahatan internasional",
      "Indonesia dijadikan tempat koruptor dari luar negri untuk bertempat tinggal di Indonesia sesuka hati",
      "Indonesia dapat melakukan eksport import secara gelap"
    ]
  },
  {
    numb: 16,
    question: "Apa yang menyebabkan terjadinya keterkaitan antarruang",
    answer: "Memiliki ciri khas yang berbeda-beda antara suatu ruang dengan ruang lainnya",
    options: [
      "Adanya kesamaan potensi alam yang dimiliki setiap ruang",
      "Suatu ruang memiliki iklim tropis di seluruh wilayah negara",
      "Memiliki ciri khas yang berbeda-beda antara suatu ruang dengan ruang lainnya",
      "Adanya perbedaan potensi alam di setiap ruang"
    ]
  },
  {
    numb: 17,
    question: "Tiga motif utama yang menjadi pertimbangan sebuah negara melakukan hubungan bilateral yaitu",
    answer: "Menjaga kepentingan nasional, menjaga perdamaian, menjaga kesejahteraan ekonomi",
    options: [
      "Menjaga kepentingan individu, menjaga perdamaian",
      "Menjaga kepentingan nasional, menjaga perdamaian, menjaga kesejahteraan ekonomi",
      "Menjaga keamanan, menjaga kerukunan, menjaga kestabilitasan negara",
      "Menjada keutuhan negara, menjaga desa, menjaga agar tidak bermusuhan"
    ]
  },
  {
    numb: 18,
    question: "Apa yang terjadi lewat perpindahan gagasan dan informasi?",
    answer: "Komunikasi",
    options: [
      "Urbanisasi",
      "Evolusi",
      "Komunikasi",
      "Transmigrasi"
    ]
  },
  {
    numb: 19,
    question: "Angin muson barat yang terjadi  di Indonesia akan menyebabkan musim",
    answer: "Hujan",
    options: [
      "Pancaroba",
      "Hujan",
      "Kemarau",
      "Dingin"
    ]
  },
  {
    numb: 20,
    question: "Pulau yang tidak mempunyai gunung api aktif adalah",
    answer: "Papua dan Kalimantan",
    options: [
      "Papua dan Kalimantan",
      "Sumatra dan Sulawesi",
      "Papua dan Sumatra",
      "Jawa dan Bali"
    ]
  }

];














//selecting all required elements
const start_btn_bab_1_soal_multiplai  = document.querySelector(".mulai-bab-1-soal-multiplai");
const box_bab_1_soal_multiplai = document.querySelector(".box-bab-1-soal-multiplai");
const result_box_bab_1_soal_multiplai = document.querySelector(".result-box-bab-1-soal-multiplai");
const option_box_bab_1_soal_multiplai = document.querySelector(".option-box-bab-1-soal-multiplai");
const button_bab_1_soal_multiplai = document.querySelectorAll(".soal-bab-1-isi-click");
const close_bab_1_soal_multiplai = document.querySelector(".close-soal-1-logo-close-multiple");


// if startQuiz button clicked
start_btn_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        },40) 
    })
})

close_bab_1_soal_multiplai.addEventListener('click', () => {
    box_bab_1_soal_multiplai.classList.remove("activeQuiz");
    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid';
        setTimeout(() => {
            element.style.opacity = '1';
        },215) 
    })
})




let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_bab_1_soal_multiplai = result_box_bab_1_soal_multiplai.querySelector(".buttons .restart-bab-1-soal-multiplai");


// if restartQuiz button clicked
restart_bab_1_soal_multiplai.onclick = ()=>{
    box_bab_1_soal_multiplai.classList.add("activeQuiz"); //show quiz box
    result_box_bab_1_soal_multiplai.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
}



const next_btn_bab_1_soal_multiplai = document.querySelector("footer .next-btn-bab-1-soal-multiplai");
const bottom_ques_counter_bab_1_soal_multiplai = document.querySelector("footer .total-que-bab-1-soal-multiplai ");

// if Next Que button clicked
next_btn_bab_1_soal_multiplai.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn_bab_1_soal_multiplai.classList.remove("show"); //hide the next button
    }else{
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_box_bab_1_soal_multiplai.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_box_bab_1_soal_multiplai.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_box_bab_1_soal_multiplai.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_box_bab_1_soal_multiplai.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_box_bab_1_soal_multiplai.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_box_bab_1_soal_multiplai.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_box_bab_1_soal_multiplai.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn_bab_1_soal_multiplai.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    box_bab_1_soal_multiplai.classList.remove("activeQuiz"); //hide quiz box
    result_box_bab_1_soal_multiplai.classList.add("activeResult"); //show result box
    const scoreText = result_box_bab_1_soal_multiplai.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Selamat , Kamu menjawab <p>'+ userScore +'</p> dari <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> dari <p>'+ questions.length +'</p> Soal</span>';
    bottom_ques_counter_bab_1_soal_multiplai.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter_bab_1_soal_multiplai
}















const kunci_jawaban_open = document.querySelector('.soal-bab-1-isi-click-kunci-jawaban') 
const kunci_jawaban = document.querySelectorAll('.soal-bab-1-kunci-jawaban')
const close_kunci_jawaban = document.querySelector('.header-soal-1-logo-close-kunci-jawaban')
const password_bab_1 = document.querySelectorAll('.scrollbox-inner-password')

kunci_jawaban_open.addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },50)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },50)
    })
})


close_kunci_jawaban.addEventListener('click', () => {

    kunci_jawaban.forEach(element => {
        element.style.transform = 'translateY(200%)'
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },220)
    })
})


document.querySelector('.back-soal-1-logo-close-password').addEventListener('click', () => {

    password_bab_1.forEach(element => {
        element.style.opacity = '0'
        setTimeout(() => {
            element.style.display = 'none'
        },120)
    })

    button_bab_1_soal_multiplai.forEach(element => {
        element.style.display = 'grid'
        setTimeout(() => {
            element.style.opacity = '1'
        },80)
    })
})



document.querySelector('.quit-keluar-bab-1').addEventListener('click', () => {
    window.location.reload()
})





const FormBab1 = document.getElementById('password-form');


FormBab1.addEventListener('submit',(event) => {
    const SandiBab1Multiple = "OPEN BAB 5 PILGAN";
    const KunciBab1Multiple = document.querySelector('.scrollbox-inner-pertanyaan-kunci-jawaban-bab-1-multiple');
    const AllFormBab1 = document.querySelector('.scrollbox-inner-password')

    

    event.preventDefault(); 
    const jawab = document.querySelector('.password').value;


    console.log('Jawaban yang dimasukkan:', jawab);
    console.log('SandiBab1MultipleMobile:', SandiBab1Multiple);

    if (jawab === SandiBab1Multiple) {
        kunci_jawaban.forEach(element => {
            element.style.transform = 'translateY(20%)'
        })
        AllFormBab1.style.display = 'none'
    }else{
      const salah_boss = document.querySelector('.wrong-sound-new')
      salah_boss.play();
    }

    document.getElementById('password').value = '';

});






