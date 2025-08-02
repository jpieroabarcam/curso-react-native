import { useEffect, useRef, useState } from "react"

enum Operator {
    add='+',
    substract='-',
    multiply='*',
    divide='÷',
}


export const useCalculator = () => {

    const [formula, setFormula] = useState('');

    const[number, setNumber] = useState('0');
    const[previousNumber, setPreviousNumber] = useState('0');

    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const fistFormulaPart = formula.split(' ').at(0);
            setFormula(`${fistFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult();
        setPreviousNumber(`${subResult}`);
    }, [formula])
    
    

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    }
    // borrar el ultimo numero ingresado
    const deleteOperation = () => {
        if( number.includes('-') ) {  
            if (number.length === 2) {
                return setNumber('0');
            }           
            return setNumber( number.substring(0, number.length - 1));
        }
        if( number.length === 1 ) {             
            return setNumber('0');
        }
        return setNumber( number.substring(0, number.length - 1));
    }

    const toggleSign = () => {
        if( number.includes('-') ) {
            return setNumber( number.replace( '-', ''));
        }
        setNumber('-' + number);
    }

    const buildNumber = (numberString:string ) => {

        if(number.includes('.') && numberString === '.') return;
        if(number.startsWith('0') || number.startsWith('-0')) {

            // Punto decimal
            if(numberString ==='.'){
                return setNumber(number + numberString);
            }

            // evaluar si es otro cero y no hay punto
            if(numberString ==='0' && number.includes('.')){
                return setNumber(number + numberString);
            }


            //evaluar si es diferente de cero, no hay punto, y es el primer numero
            if(numberString !=='0' && !number.includes('.')){
                return setNumber(numberString);
            }

            // Evitar el 0000000000
            if(numberString ==='0' && !number.includes('.')){
                return;
            }
            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    }

    const setLastNumber = () => {
        calculateResult();

        if( number.endsWith('.') ){
            setPreviousNumber(number.slice(0,-1));
        } else {
            setPreviousNumber(number);
        }
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract;
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`)

        lastOperation.current = undefined;
        setPreviousNumber('0');
    }

    const calculateSubResult = () => {
        const [firstValue, operation, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue); //Nan

        if( isNaN(num2) ) return num1;

        switch(lastOperation.current) {
            case Operator.add:
                return num1 + num2;
                
            case Operator.substract:
                return num1 - num2;
                
            case Operator.multiply:
                return num1 * num2;
                
            case Operator.divide:
                return num1 / num2;
                
            default:
                throw new Error('Operation not implemented');
        }
    }



  return {
    //Properties
    number,
    previousNumber,
    formula,

    //Methods
    buildNumber,
    toggleSign,
    clean,
    deleteOperation,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
  }
}
