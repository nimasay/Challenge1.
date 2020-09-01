bmi =(bb,tb) => {
    const a = bb / Math.pow((tb / 100), 2);
    var s;
    if(a< 18.5 ){
        return s = "Kekurangan Berat Badan";
    } else if(a >= 18.5 && a<= 24.9){
        return s = "Normal(Ideal)";
    } else if(a >= 25 && a<= 29.9){
        return s = "Kelebihan berat badan";
    } else {
        return s = "Kegemukan(Obsitas)";
    }
}

console.log(" Ukuran BMI :" + bmi(60,170)); 