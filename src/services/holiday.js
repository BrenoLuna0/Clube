import moment from "moment";

function Easter(Y) {
  var C = Math.floor(Y / 100);
  var N = Y - 19 * Math.floor(Y / 19);
  var K = Math.floor((C - 17) / 25);
  var I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
  I = I - 30 * Math.floor(I / 30);
  I =
    I -
    Math.floor(I / 28) *
      (1 -
        Math.floor(I / 28) *
          Math.floor(29 / (I + 1)) *
          Math.floor((21 - N) / 11));
  var J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);
  var L = I - J;
  var M = 3 + Math.floor((L + 40) / 44);
  var D = L + 28 - 31 * Math.floor(M / 4);

  return padout(M) + "" + padout(D);
}

function padout(number) {
  return number < 10 ? "0" + number : number;
}

function holiday(date) {
  let ano = moment(new Date(date)).year();
  let pascoa = moment(ano + Easter(ano));
  const feriados = [
    {
      data: moment(ano + "0101").format("DD/MM/YYYY"),
      descricao: "Confraternização Universal",
    },
    {
      data: moment(pascoa).subtract(48, "days").format("DD/MM/YYYY"),
      descricao: "2ºferia Carnaval",
    },
    {
      data: moment(pascoa).subtract(47, "days").format("DD/MM/YYYY"),
      descricao: "Carnaval",
    },
    {
      data: moment(pascoa).format("DD/MM/YYYY"),
      descricao: "Páscoa",
    },
    {
      data: moment(pascoa).subtract(2, "days").format("DD/MM/YYYY"),
      descricao: "6ºfeira Santa",
    },
    {
      data: moment(ano + "0421").format("DD/MM/YYYY"),
      descricao: "Tiradentes",
    },
    {
      data: moment(ano + "0629").format("DD/MM/YYYY"),
      descricao: "São Pedro",
    },
    {
      data: moment(ano + "0624").format("DD/MM/YYYY"),
      descricao: "São João",
    },
    {
      data: moment(ano + "0306").format("DD/MM/YYYY"),
      descricao: "Data Magna",
    },
    {
      data: moment(ano + "0501").format("DD/MM/YYYY"),
      descricao: "Dia do Trabalhador",
    },
    {
      data: moment(ano + "0907").format("DD/MM/YYYY"),
      descricao: "Dia da Independência",
    },
    {
      data: moment(ano + "0915").format("DD/MM/YYYY"),
      descricao: "Padroeira",
    },
    {
      data: moment(ano + "1012").format("DD/MM/YYYY"),
      descricao: "N. S. Aparecida",
    },
    {
      data: moment(ano + "1102").format("DD/MM/YYYY"),
      descricao: "Todos os santos",
    },
    {
      data: moment(ano + "1225").format("DD/MM/YYYY"),
      descricao: "Natal",
    },
  ];

  const retorno = feriados.filter((feriado) => {
    return feriado.data === moment(new Date(date)).format("DD/MM/YYYY");
  });

  if (retorno.length) {
    return true;
  } else {
    return false;
  }
}

export default holiday;
