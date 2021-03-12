
// Refactored Code


switch(province){
    case 'ONTARIO':
        rate = ONTARIO_RATE
        amt = base * ONTARIO_RATE
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        break
    case 'QUEBEC':
        rate = QUEBEC_RATE
        amt = base * rate;
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        points = 2
        break
    case 'ALBERTA':
        rate = ALBERTA_RATE
        amt = base * rate
        calc = 2 * basis(amt) + extra(amt) * 1.05;
        break
    default:
        rate = 1
        amt = base
        calc = 2 * (basis(amt) + extra(amt)) * 1.05;
}
