let DefaultMinAlcohol = 0.0;
let DefaultMinAlcoholStrawless = 0.05;
let DefaultMaxAlcohol = 4.0;
let FullTest = 0;
let AlcoholOnly = 1;
let FaceRecognitionOnly = 2;
let PassThroughOnly = 3;
let FaceRecognitionWithAlcohol = 8;
let OnlyMarkOfTimeAfterPreviousTest = 10;
let OnlyMarkOfTime = 11;
let OnlyPhoto = 12;

let PROMILE = "g/L, ‰ [w/v]";
let PERCENTAGE_BAC = "% BAC";
let G_KG = "g/kg, ‰ [w/w]";
let MG_100ML = "mg/100mL";
let MG_PERCENTAGE = "mg%";
let MG_ML = "mg/mL";
let MG_L = "mg/L";
let MICRO_G_100ML = "µg/100mL";
let MICRO_G_PERCENTAGE = "µg%";
let MICRO_G_L = "µg/L";
let G_210L = "g/210L";

let Ratio_2100 = "2100";
let Ratio_2000 = "2000";
let Ratio_2300 = "2300";

const convertBreathBloodRatio = (breathBloodratio) => {
  if (breathBloodratio == Ratio_2000) return 2;
  if (breathBloodratio == Ratio_2300) return 2.3;
  if (breathBloodratio == Ratio_2100) return 2.1;

  return 2.1;
};

const convertResultByAlcoholUnits = (
  measurementResult,
  measurementUnit,
  breathBloodRatio
) => {
  let ratio = convertBreathBloodRatio(breathBloodRatio);
  let result = measurementResult;

  //   console.log("ratio", ratio, result);

  if (measurementUnit == PROMILE) return result;
  if (measurementUnit == PERCENTAGE_BAC) return result / 10;
  if (measurementUnit == G_KG) return result / 1.06;
  if (measurementUnit == MG_100ML) return result * 100;
  if (measurementUnit == MG_PERCENTAGE) return result * 100;
  if (measurementUnit == MG_ML) return result;
  if (measurementUnit == MG_L) return result / ratio;
  if (measurementUnit == MICRO_G_100ML) return (result / ratio) * 100;
  if (measurementUnit == MICRO_G_PERCENTAGE) return (result / ratio) * 100;
  if (measurementUnit == MICRO_G_L) return (result / ratio) * 1000;
  if (measurementUnit == G_210L) return result / 10;
  return result;
};

const convertResultToString = (result, measurementUnit, breathBloodRatio) => {
  let convertedResultByAlcoholUnits = convertResultByAlcoholUnits(
    result,
    measurementUnit,
    breathBloodRatio
  );

  //   TODO: implement conversion
  // FIXME: convert
  if (measurementUnit == PROMILE)
    return Number(convertedResultByAlcoholUnits.toFixed(2));
  if (measurementUnit == PERCENTAGE_BAC)
    return Number(convertedResultByAlcoholUnits.toFixed(3));
  if (measurementUnit == G_KG)
    return Number(convertedResultByAlcoholUnits.toFixed(2));
  if (measurementUnit == MG_100ML)
    return Number(String(convertedResultByAlcoholUnits)[0]);
  if (measurementUnit == MG_PERCENTAGE)
    return Number(String(convertedResultByAlcoholUnits).padStart(3, "0")); //DDD
  if (measurementUnit == MG_ML)
    return Number(convertedResultByAlcoholUnits.toFixed(2));
  if (measurementUnit == MG_L)
    return Number(convertedResultByAlcoholUnits.toFixed(2));
  if (measurementUnit == MICRO_G_100ML)
    return Number(String(convertedResultByAlcoholUnits).padStart(3, "0"));
  if (measurementUnit == MICRO_G_PERCENTAGE)
    return Number(String(convertedResultByAlcoholUnits).padStart(3, "0"));
  if (measurementUnit == MICRO_G_L)
    return Number(String(convertedResultByAlcoholUnits)[0]);
  if (measurementUnit == G_210L)
    return Number(convertedResultByAlcoholUnits.toFixed(2));
  return result;
};

const resultToAlcoholUnits = (result, measurementUnit, breathBloodRatio) => {
  let convertedResultToString = convertResultToString(
    result,
    measurementUnit,
    breathBloodRatio
  );

  if (measurementUnit == PROMILE) return convertedResultToString + " ‰";
  if (measurementUnit == PERCENTAGE_BAC)
    return convertedResultToString + " % BAC";
  if (measurementUnit == G_KG) return convertedResultToString + " g/kg";
  if (measurementUnit == MG_100ML) return convertedResultToString + " mg/100mL";
  if (measurementUnit == MG_PERCENTAGE) return convertedResultToString + " mg%";
  if (measurementUnit == MG_ML) return convertedResultToString + " mg/mL";
  if (measurementUnit == MG_L) return convertedResultToString + " mg/L";
  if (measurementUnit == MICRO_G_100ML)
    return convertedResultToString + " µg/100mL";
  if (measurementUnit == MICRO_G_PERCENTAGE)
    return convertedResultToString + " µg%";
  if (measurementUnit == MICRO_G_L) return convertedResultToString + " µg/L";
  if (measurementUnit == G_210L) return convertedResultToString + " g/210L";
  return convertedResultToString + " ‰";
};

// measurementdata { coming from api
//  testType,
//  strawless
//  measurementResult
// }

export const measurementResultToDisplayFormat = (
  //   alcoholLimit, //will use later // api te subdivion object er minPromile value subdivision.map(_.minPromile)
  measurementUnit, //http://localhost:9100/front/company/settings -> alcohol unit
  maxAlcohol, //http://localhost:9100/front/report/employee?employeeNumber=1&page=1&sortBy=NUMBER&sortOrder=ASC -> measurementMaxPromiles
  breathBloodRatio, //http://localhost:9100/front/company/settings //->breathBloodRatio
  //   checkAlcohol, //will use later
  measurementData
) => {
  //   console.log("from func", measurementUnit);
  //   console.log("from func", maxAlcohol);
  //   console.log("from func", breathBloodRatio);
  //   console.log("from func", measurementData);

  if (
    measurementData?.testType == FaceRecognitionOnly ||
    measurementData?.testType == PassThroughOnly ||
    measurementData?.testType == OnlyMarkOfTimeAfterPreviousTest ||
    measurementData?.testType == OnlyMarkOfTime ||
    measurementData?.testType == OnlyPhoto
  ) {
    return "N";
  } else if (measurementData.strawless) {
    //   measurementResult match {
    //     case value if value > Measurement.DefaultMinAlcohol => "ALC"
    //     case _ => AlcoholUnitsConversionUtil.resultToAlcoholUnits(Measurement.DefaultMinAlcohol, measurementUnit, breathBloodRatio)
    //   }
    // TODO: edata.measurement.measurementResult ==value
    // FIXME: check

    if (measurementData.measurementResult > DefaultMinAlcohol) return "ALC";
    return resultToAlcoholUnits(
      DefaultMinAlcohol,
      measurementUnit,
      breathBloodRatio
    );
  } else {
    let limit = maxAlcohol ? maxAlcohol : DefaultMaxAlcohol;
    if (measurementData.measurementResult >= limit) {
      return (
        ">" + resultToAlcoholUnits(limit, measurementUnit, breathBloodRatio)
      );
    }
    // if (maxAlcohol) {
    //   if (measurementData.value >= maxAlcohol) {
    //     return (
    //       ">" +
    //       resultToAlcoholUnits(maxAlcohol, measurementUnit, breathBloodRatio)
    //     );
    //   }
    // } else if (measurementData.value >= DefaultMaxAlcohol) {
    //   return (
    //     ">" +
    //     resultToAlcoholUnits(
    //       DefaultMaxAlcohol,
    //       measurementUnit,
    //       breathBloodRatio
    //     )
    //   );
    // }

    return resultToAlcoholUnits(
      measurementData.measurementResult,
      measurementUnit,
      breathBloodRatio
    );
  }
};
