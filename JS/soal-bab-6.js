
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Interaksi social adalah suatu proses Dimana terjadi kontak social, saling mempengaruhi. Yang paling penting dalam interaksi social itu adalah",
    answer: "Bersifat timbal balik",
    options: [
      "Berkaitan dengan untung/ rugi",
      "Saling mengalah",
      "Bersifat timbal balik",
      "Saling menyalahkan"
    ]
  },
  {
    numb: 2,
    question: "Berikut yang bukan menunjukkan wujud interaksi social adalah",
    answer: "Berteriak teriak",
    options: [
      "Berteriak teriak",
      "Berjabat tangan",
      "Saling mencibir",
      "Saling mengolok"
    ]
  },
  {
    numb: 3,
    question: "Syarat terjadinya hubungan social adalah komunikasi karena seseorang dapat",
    answer: "Menimbulkan saling pengertian antar individu",
    options: [
      "Menimbulkan pertentangan",
      "Menimbulkan saling pengertian antar individu",
      "Memberikan dorongan emosional",
      "Menimbulkan saling ketergantungan"
    ]
  },
  {
    numb: 4,
    question: "Faktor factor yang mempengaruhi interaksi social adalah",
    answer: "Imitasi, sugesti, identifikasi, simpati",
    options: [
      "Imitasi, sugesti, identifikasi, simpati",
      "Imitasi, empati, reaksi, simpati",
      "Imitasi, kritik, saran, simpati",
      "Imitasi, reaksi, Tindakan, peluang"
    ]
  },
  {
    numb: 5,
    question: "Yang termasuk dalam proses desosiatif adalah",
    answer: "Kontravensi dan persaingan",
    options: [
      "Kerjasama dan produktiovitas",
      "Kerjasama dan akomodasi",
      "Kontravensi dan persaingan",
      "Kerjasama dan kontraversi"
    ]
  },
  {
    numb: 6,
    question: "Unsur-unsur dalam pembentukan keteraturan sosial adalah",
    answer: "Tertib sosial, order, keajegan, pola",
    options: [
      "Tertib sosial, pendanaan, keteraturan",
      "Upaya, tertib sosial, keajegan",
      "Tertib sosial, order, keajegan, pola",
      "Tertib sosial, keramah tamahan, keajegan"
    ]
  },
  {
    numb: 7,
    question: "Agar interaksi dapat berlangsung dibutuhkan dua syarat yaitu",
    answer: "Adanya kontak sosial dan komunikasi",
    options: [
      "Antara kelompok dengan kelompok",
      "Antara individu dengan kelompok",
      "Adanya individu dengan individu",
      "Adanya kontak sosial dan komunikasi"
    ]
  },
  {
    numb: 8,
    question: "Hubungan timbal balik yang dinamis antara orang perorangan, atau orang dengan kelompok disebut",
    answer: "Interaksi sosial",
    options: [
      "Interaksi sosial",
      "Proses sosialisasi",
      "Kontak sosial",
      "Komunikasi sosial"
    ]
  },
  {
    numb: 9,
    question: "Interaksi sosial memiliki ciri-ciri sebagai berikut kecuali",
    answer: "Dapat dilakukan seorang diri",
    options: [
      "Adanya kontak sosial",
      "Dapat dilakukan seorang diri",
      "Terjadi komunikasi baik langsung ataupun tidak langsung",
      "Adanya tujuan yang jelas"
    ]
  },
  {
    numb: 10,
    question: "Penyiar radio menyampaikan berita langsung tentang kebakaran di kota yang terjadi sore tadi kepada pemirsa. Kontak yang terjadi merupakan kontak",
    answer: "Kontak langsung",
    options: [
      "Kontak primer",
      "Kontak langsung",
      "Kontak antar individu dengan individu",
      "Kontak tidak langsung"
    ]
  },
  {
    numb: 11,
    question: "Seorang anak akan berusaha untuk meniru dan menyamakan dirinya dengan ibunya, sikap demikian merupakan tindakan sosial berupa",
    answer: "Identifikasi",
    options: [
      "Asimilasi",
      "Motivasi",
      "Identifikasi",
      "Simpati"
    ]
  },
  {
    numb: 12,
    question: "Yang dimaksud dengan kontravensi sederhana adalah",
    answer: "Penolakan, keengganan, protes, gangguan",
    options: [
      "Penolakan, keengganan, protes, gangguan",
      "Menyangkal pendapat orang lain di muka umum",
      "Provokasi dan intimidasi",
      "Penghasutan atau penyebaran desas-desus"
    ]
  },
  {
    numb: 13,
    question: "Salah satu masalah sosial dalam masyarakat adalah kemiskinan. Tingginya angka kemiskinan dapat meningkatkan tindak kriminal dalam masyarakat. Untuk mengatasi permasalahan tersebut, fungsi sosiologi adalah",
    answer: "Perencanaan",
    options: [
      "Perencanaan",
      "Jasa konsultan",
      "Kegiatan distribusi",
      "Tenaga kerja trampil"
    ]
  },
  {
    numb: 14,
    question: "Aspek utama yang dipelajari sosiologi adalah interaksi antara",
    answer: "Manusia dengan manusia atau kelompok",
    options: [
      "Manusia dengan manusia atau kelompok",
      "Kelas-kelas sosial di masyarakat",
      "Masyarakat dengan budayanya",
      "Manusia dengan lingkungan"
    ]
  },
  {
    numb: 15,
    question: "Bentuk keluarga berdasarkan perkawinan tunggal yang terdiri dari suami istri dan anak disebut dengan keluarga",
    answer: "Inti",
    options: [
      "Tunggal",
      "Inti",
      "Kecil",
      "Besar"
    ]
  },
  {
    numb: 16,
    question: "Jika sebuah kompetisi terjadi dengan tajam dapat mengarah terjadinya konflik, situasi antara persaingan dengan konflik dinamakan",
    answer: "Kontroversi",
    options: [
      "Mediasi",
      "Kontroversi",
      "Akomodasi",
      "Asimilasi"
    ]
  },
  {
    numb: 17,
    question: "berikut ini merupakan bentuk interaksi social yang bersifat disosiatif kecuali",
    answer: "Kerjasama",
    options: [
      "Konflik",
      "Kerjasama",
      "Kontavensi",
      "Pertikaian"
    ]
  },
  {
    numb: 18,
    question: "sosialisasi primer berlangsung dalam lingkungan",
    answer: "Keluarga",
    options: [
      "Keluarga",
      "Taman Bermain",
      "Masyarakat Luas",
      "Sekolah"
    ]
  },
  {
    numb: 19,
    question: "salah satu bentuk penyimpanagan social yang kerap terjadi seiring pesatnya kemajuan di bidang tekonologi informasi adalah kejahatan dunia maya contohnya",
    answer: "Carding",
    options: [
      "Bullying",
      "carding",
      "Terorisme",
      "Travikking"
    ]
  },
  {
    numb: 20,
    question: "Jika sebuah kompetisi terjadi dengan tajam dapat mengarah terjadinya konflik, situasi antara persaingan dengan konflik dinamakan",
    answer: "rekaman wawancara",
    options: [
      "Naskah",
      "Koran",
      "rekaman wawancara",
      "Majalah"
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
    const SandiBab1Multiple = "OPEN BAB 6 PILGAN";
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






