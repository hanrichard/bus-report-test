export const calStatus = (status: number | null) => {

  switch (true) {
    case status && status > 100:
      return "isLate";
    case status && status < 100 && status > 0:
      return  "isOnTime";
    case status && status < 0:
      return  "isEarly";
    case status === null:
      return  "isNull";
  }
};
