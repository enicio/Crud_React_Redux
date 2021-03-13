export  function PortionToBeDeductedAndAliquot(salary) {
  if ( salary < 1903.98 ) return [ 0 , 0 ];
  if ( salary > 1903.99 && salary < 2826.65 ) return [ 0.075 , 142.80 ];
  if ( salary > 2826.66 && salary < 3715.05 ) return [ 0.15 , 354.80 ];
  if ( salary > 3751.06 && salary < 4664.68 ) return [ 0.225 , 636.13 ];
  if ( salary > 4664.68 ) return [ 0.275 , 869.36 ];
}

export function salaryBase( salary, discount, quantityOfDependents ) {
  const aliquotAndPortion = PortionToBeDeductedAndAliquot(salary)
  const deductionPerDependent = 164.56;
  const haveDependents = ( Number(quantityOfDependents) > 0 )? quantityOfDependents : 1 ;
  const SalaryBaseIR = ( salary - discount - deductionPerDependent ) *
  haveDependents;
  const discountIRRF = ( SalaryBaseIR ) * aliquotAndPortion[0] - aliquotAndPortion[1]
  return (
    <span>{ discountIRRF }</span>
  );
};