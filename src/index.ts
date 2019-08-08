import cheerio = require("cheerio");
import request = require("request-promise");

export type Brand =
  | "master"
  | "visa16"
  | "amex"
  | "diners"
  | "discover"
  | "enroute"
  | "jcb"
  | "voyager"
  | "hiper"
  | "aura";

export interface ICreditCard {
  number: string;
  expirationDate: string;
  cvv: string;
}

export const creditCard = async (brand: Brand, withPoints?: boolean): Promise<ICreditCard> => {
  const options = {
    form: {
      acao: "gerar_cc",
      bandeira: brand,
      pontuacao: withPoints ? "S" : "N",
    },
    method: "POST",
    transform: (body: any) => {
      return cheerio.load(body);
    },
    uri: "https://www.4devs.com.br/ferramentas_online.php",
  };

  const $ = await request(options);
  const card: ICreditCard = {
    cvv: $("#codigo_seguranca").text(),
    expirationDate: $("#data_validade").text(),
    number: $("#cartao_numero").text(),
  };
  return card;
};
