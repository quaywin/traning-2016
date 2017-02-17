function pow(base, exp){
    if (exp == 1) return base;
    return base*pow(base,exp-1);
}

console.log(pow(2,5));