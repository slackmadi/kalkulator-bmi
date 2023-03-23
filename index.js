//pengenalan input pada js
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

//validasi data
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("count")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}

//fungsi saat hitung bmi ditekan beserta pengaktifan validasi
document.getElementById("count").addEventListener("click", validateForm);
function countBmi() {
    var title = "Hasil";
    var p = [age.value, height.value, weight.value];
        if (male.checked) {
            p.push("male");
         } else if (female.checked) {
            p.push("female");
            }
    
    //rumus perhitungan bmi
    var bmi = Number(p[2]) / ((Number(p[1]) / 100)**2);
    //hasil bmi
    var result = "";
        if (bmi < 18.5) {
            result = "Kekurangan Berat Badan";
        } else if (18.5 <= bmi && bmi <= 24.9) {
            result = "Normal (Ideal)";
        } else if (25 <= bmi && bmi <= 29.9) {
            result = "(Kelebihan Berat Badan)";
        } else if (30 <= bmi && bmi <= 34.9) {
            result = "Kegemukan (Obesitas)";
        } 
    //penjelasan range angka bmi
    var statement = "";
        if (bmi < 18.5) {
            statemet = "Hasil BMI kurang dari 18.5. ";
        } else if (18.5 <= bmi && bmi <= 24.9) {
            statement = "Hasil BMI di antara 18.5 dan 24.9. ";
        } else if (25 <= bmi && bmi <= 29.9) {
            statement = "(Hasil BMI di antara 25 dan 29.9. )";
        } else if (30 <= bmi && bmi <= 34.9) {
            statement = "Hasil BMI lebih dari 30.0. ";
        } 
    //pennjelasan kategori hasil bmi
    var explanation = "";
        if (bmi < 18.5) {
            explanation = "Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
        } else if (18.5 <= bmi && bmi <= 24.9) {
            explanation = "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. Konsultasi Ahli Gizi Via Aplikasi. ";
        } else if (25 <= bmi && bmi <= 29.9) {
            explanation = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        } else if (30 <= bmi && bmi <= 34.9) {
            explanation = "Anda berada dalam kategori obesitas. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda. ";
        } 
    
    //penjelasan kemungkinan penyakit pada setiap hasil bmi
    var desease = "";
        if (bmi < 18.5) {
            desease = "Berat rendah dapat menyebabkan berbagai masalah penyakit: Infertilitas, Anemia, Osteoporosis, Sistem Imun Lemah.";
        } else if (18.5 <= bmi && bmi <= 24.9) {
            desease = "";
        } else if (25 <= bmi && bmi <= 29.9) {
            desease = "Beberapa penyakit yang berasal dari kegemukan: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis.";
        } else if (30 <= bmi && bmi <= 34.9) {
            desease = "Beberapa penyakit yang berasal dari kegemukan: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis.";
        } 
    var article = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    
    //mendefinisikan hasil
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var h3 = document.createElement("h3");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var tit = document.createTextNode(title);
    var t = document.createTextNode(result);
    var b = document.createTextNode("");
    var sta = document.createTextNode(statement);
    var exp = document.createTextNode(explanation);
    var des =document.createTextNode(desease)
    var art =document.createTextNode(article)
    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    
    //menampilkan hasil pada halaman web
    
    h1.appendChild(tit);
    h2.appendChild(t);
    h3.appendChild(b);
    p1.appendChild(sta);
    p2.appendChild(exp);
    p3.appendChild(des);
    p4.appendChild(art);
    h3.appendChild(r);
    
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);
  

    document.getElementById("count").removeEventListener("click", countBmi);
    document
        .getElementById("count")
        .removeEventListener("click", validateForm);
}
document.getElementById("count").addEventListener("click", countBmi);