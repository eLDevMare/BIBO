
// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Energi potensial gravitasi suatu benda bergantung pada ...",
    answer: "Massa dan ketinggiannya",
    options: [
      "Massa dan kecepatannya",
      "Massa dan ketinggiannya",
      "Kecepatan dan ketinggiannya",
      "Massa dan luas permukaannya"
    ]
  },
  {
    numb: 2,
    question: "Hukum Kekekalan Energi menyatakan bahwa ...",
    answer: "Energi tidak dapat diciptakan maupun dimusnahkan, hanya dapat berubah bentuk",
    options: [
      "Energi dapat diciptakan dan dimusnahkan",
      "Energi tidak dapat diciptakan, tetapi dapat dimusnahkan",
      "Energi tidak dapat diciptakan maupun dimusnahkan, hanya dapat berubah bentuk",
      "Energi dapat diciptakan dari materi"
    ]
  },
  {
    numb: 3,
    question: "Bentuk energi yang terkandung dalam makanan adalah ...",
    answer: "Energi kimia",
    options: [
      "Energi kinetik",
      "Energi potensial",
      "Energi kimia",
      "Energi mekanik"
    ]
  },
  {
    numb: 4,
    question: "Konversi energi kimia menjadi energi listrik terjadi pada ...",
    answer: "Baterai",
    options: [
      "Generator",
      "Motor listrik",
      "Baterai",
      "Panel surya"
    ]
  },
  {
    numb: 5,
    question: "Energi yang dimiliki oleh benda yang sedang bergerak disebut ...",
    answer: "Energi kinetik",
    options: [
      "Energi potensial",
      "Energi kinetik",
      "Energi kimia",
      "Energi panas"
    ]
  },
  {
    numb: 6,
    question: "Saat bola dilempar ke atas, energi kinetiknya ... dan energi potensialnya ...",
    answer: "Berkurang, bertambah",
    options: [
      "Bertambah, berkurang",
      "Berkurang, bertambah",
      "Bertambah, tetap",
      "Berkurang, tetap"
    ]
  },
  {
    numb: 7,
    question: "Energi Cahaya adalah energi yang dihasilkan oleh ...",
    answer: "Radiasi gelombang elektromagnetik",
    options: [
      "muatan Listrik yang bergerak",
      "muatan Listrik yang dinetralkan",
      "Radiasi gelombang elektromagnetik",
      "peristiwa kemagnetan"
    ]
  },
  {
    numb: 8,
    question: "Proses fotosintesis pada tumbuhan mengubah energi ... menjadi energi ...",
    answer: "Cahaya, kimia",
    options: [
      "Kimia, cahaya",
      "Cahaya, kimia",
      "Panas, mekanik",
      "Kinetik, potensial"
    ]
  },
  {
    numb: 9,
    question: "Di antara bahan bakar berikut yang menghasilkan polusi paling kecil adalah ...",
    answer: "Gas alam",
    options: [
      "Solar",
      "Minyak bumi",
      "Batu bara",
      "Gas alam"
    ]
  },
  {
    numb: 10,
    question: "Energi potensial elastis dimiliki oleh ...",
    answer: "Benda yang ditarik atau ditekan",
    options: [
      "Benda yang jatuh",
      "Benda yang ditarik atau ditekan",
      "Benda yang mengapung",
      "Benda yang bergerak"
    ]
  },
  {
    numb: 11,
    question: "Prinsip kerja generator adalah mengubah ...",
    answer: "Energi mekanik menjadi energi listrik",
    options: [
      "Energi mekanik menjadi energi listrik",
      "Energi listrik menjadi energi mekanik",
      "Energi panas menjadi energi listrik",
      "Energi kimia menjadi energi listrik"
    ]
  },
  {
    numb: 12,
    question: "Bentuk energi yang disimpan dalam baterai adalah ...",
    answer: "Energi kimia",
    options: [
      "Energi kinetik",
      "Energi kimia",
      "Energi potensial",
      "Energi mekanik"
    ]
  },
  {
    numb: 13,
    question: "Pernyataan berikut adalah masalah yang dihadapi dalam pemanfaatan kincir angin sebagai pembangkit listrik, kecuali ...",
    answer: "Dapat menimbulkan pencemaran lingkungan",
    options: [
      "Ukurannya sangat besar sehingga dapat memakan tempat",
      "Energi yang dihasilkan masih kecil",
      "Diperlukan kecepatan angin yang cukup tinggi",
      "Dapat menimbulkan pencemaran lingkungan"
    ]
  },
  {
    numb: 14,
    question: "Energi yang digunakan untuk menggerakkan kendaraan listrik berasal dari ...",
    answer: "Energi kimia",
    options: [
      "Energi kinetik",
      "Energi potensial",
      "Energi kimia",
      "Energi mekanik"
    ]
  },
  {
    numb: 15,
    question: "Yang termasuk dalam sumber energi tidak terbarukan adalah ...",
    answer: "Minyak bumi",
    options: [
      "Angin",
      "Air",
      "Biomassa",
      "Minyak bumi"
    ]
  },
  {
    numb: 16,
    question: "Bunyi yang dihasilkan oleh alat musik berasal dari energi ...",
    answer: "Mekanik",
    options: [
      "Kinetik",
      "Potensial",
      "Mekanik",
      "Kimia"
    ]
  },
  {
    numb: 17,
    question: "Energi panas matahari dapat diubah menjadi energi listrik menggunakan ...",
    answer: "Panel surya",
    options: [
      "Kipas angin",
      "Generator",
      "Panel surya",
      "Baterai"
    ]
  },
  {
    numb: 18,
    question: "Saat menggosok kedua tangan hingga hangat, perubahan energi yang terjadi adalah dari ...",
    answer: "Energi kinetik menjadi energi panas",
    options: [
      "Energi potensial menjadi energi kinetik",
      "Energi kinetik menjadi energi panas",
      "Energi kimia menjadi energi mekanik",
      "Energi panas menjadi energi kinetik"
    ]
  },
  {
    numb: 19,
    question: "Perubahan energi yang terjadi pada kembang api adalah dari ...",
    answer: "Energi kimia menjadi energi cahaya dan panas",
    options: [
      "Energi kimia menjadi energi cahaya dan panas",
      "Energi panas menjadi energi kimia",
      "Energi mekanik menjadi energi panas",
      "Energi potensial menjadi energi kinetik"
    ]
  },
  {
    numb: 20,
    question: "Beberapa jenis bioenergy yang dapat kamu ketahui adalah ...",
    answer: "Biodiesel, Bioethanol, Biogas",
    options: [
      "Biodiesel, Bioethanol, Biogas",
      "Biogas, Bioenergi, Biodata",
      "Biodisel, Bioethanol, Biodigester",
      "Biogas, Bioenergi, Biodigester"
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
    const SandiBab1Multiple = "OPEN BAB 3 PILGAN";
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






